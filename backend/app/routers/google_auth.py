# ------------------------------
# Importações principais
# ------------------------------
from fastapi import APIRouter, Request, HTTPException
from fastapi.responses import RedirectResponse
from urllib.parse import urlencode
from datetime import datetime
import httpx

from app.core.security import create_jwt
from app.core.oauth_state import generate_oauth_state, validate_oauth_state
from app.settings import settings
from app.db.mongo import db

# ------------------------------
# Instancia o roteador da API
# ------------------------------
router = APIRouter()

# ------------------------------
# Inicia o fluxo de login via Google OAuth2
# ------------------------------
@router.get("/login")
async def login_with_google(request: Request):
    """
    Inicia o processo de login via Google OAuth2.
    Gera o parâmetro 'state' para proteção contra CSRF,
    monta a URL de autorização do Google e redireciona o usuário.
    """
    # Gera o parâmetro state para proteção contra CSRF
    state = await generate_oauth_state()

    # Define o redirect_uri fixo conforme o registrado no Google Console e no backend
    redirect_uri = f"{settings.BACKEND_URL}/auth/google/callback"

    # Parâmetros para a URL de autorização do Google OAuth2
    params = {
        "client_id": settings.GOOGLE_CLIENT_ID,
        "redirect_uri": redirect_uri,
        "response_type": "code",
        "scope": "openid email profile",
        "state": state,
        "access_type": "offline",  # Para obter refresh_token
        "prompt": "consent"        # Força consentimento para garantir refresh_token
    }

    # Monta a URL completa para redirecionamento
    google_auth_url = f"https://accounts.google.com/o/oauth2/v2/auth?{urlencode(params)}"

    # Redireciona o usuário para o login do Google
    return RedirectResponse(google_auth_url)

# ------------------------------
# Callback que o Google chama após autenticação
# ------------------------------
@router.get("/callback")
async def google_callback(request: Request):
    """
    Endpoint chamado pelo Google após autenticação.
    Recebe o código e o state, valida, troca o código por tokens,
    obtém informações do usuário, salva/atualiza usuário no banco,
    gera JWT e redireciona para o frontend com o token.
    """
    # Obtém os parâmetros 'code' e 'state' enviados pelo Google
    code = request.query_params.get("code")
    state = request.query_params.get("state")

    # Valida presença dos parâmetros obrigatórios
    if not code or not state:
        raise HTTPException(status_code=400, detail="Missing code or state in callback")

    # Valida o parâmetro state para proteção CSRF
    if not await validate_oauth_state(state):
        raise HTTPException(status_code=400, detail="Invalid state parameter")

    # Define o redirect_uri fixo, deve ser o mesmo usado na requisição inicial
    redirect_uri = f"{settings.BACKEND_URL}/auth/google/callback"

    # Dados para trocar o código de autorização pelo token de acesso
    token_data = {
        "code": code,
        "client_id": settings.GOOGLE_CLIENT_ID,
        "client_secret": settings.GOOGLE_CLIENT_SECRET,
        "redirect_uri": redirect_uri,
        "grant_type": "authorization_code",
    }

    # Requisição assíncrona para obter tokens do Google
    async with httpx.AsyncClient() as client:
        token_resp = await client.post("https://oauth2.googleapis.com/token", data=token_data)
        token_resp.raise_for_status()
        tokens = token_resp.json()

        # Usa access_token para obter informações do usuário
        user_info_resp = await client.get(
            "https://www.googleapis.com/oauth2/v2/userinfo",
            headers={"Authorization": f"Bearer {tokens['access_token']}"}
        )
        user_info_resp.raise_for_status()
        user_info = user_info_resp.json()

    # Procura usuário no banco pelo email retornado pelo Google
    user = await db["users"].find_one({"email": user_info["email"]})

    # Caso não exista, cria um novo registro com os dados do Google
    if not user:
        await db["users"].insert_one({
            "email": user_info["email"],
            "full_name": user_info.get("name"),
            "picture": user_info.get("picture"),
            "created_at": datetime.utcnow(),
            "auth_provider": "google",
        })
        user = await db["users"].find_one({"email": user_info["email"]})

    # Gera token JWT para o usuário autenticado
    jwt_token = create_jwt(user["email"])

    # Redireciona para o frontend, enviando o token JWT na query string
    # Também adiciona parâmetro google=success para frontend identificar login via Google
    redirect_url = f"{settings.FRONTEND_URL}/login?token={jwt_token}&google=success"
    return RedirectResponse(url=redirect_url)
