from fastapi import FastAPI, Request, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from authlib.integrations.starlette_client import OAuth
from starlette.middleware.sessions import SessionMiddleware
from starlette.responses import RedirectResponse
from authlib.integrations.httpx_client import AsyncOAuth2Client
from urllib.parse import urlencode
from pydantic import BaseModel
from dotenv import load_dotenv

# Importa a função customizada para criar tokens JWT:
from utils.jwt_handler import create_jwt

# Importa as configurações do arquivo settings.py (ou config.py):
from setting import SECRET_KEY, ALGORITHM, EXPIRATION_MINUTES, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET

# Carrega variáveis do arquivo .env para o ambiente:
load_dotenv()

# Instancia o app FastAPI:
app = FastAPI()

# ------------------------------
# Middleware de sessão para OAuth e sessões seguras:
# ------------------------------
app.add_middleware(SessionMiddleware, secret_key=SECRET_KEY)

# ------------------------------
# Middleware CORS para permitir requests do frontend em localhost:5173 e 3000 acessarem a API:
# Ajuste os URLs conforme seus ambientes:
# ------------------------------
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:3000"],  # Frontends permitidos:
    allow_credentials=True,  # Permite cookies e credenciais:
    allow_methods=["*"],  # Permite todos os métodos HTTP (GET, POST, etc):
    allow_headers=["*"],  # Permite todos os headers:
)

# ------------------------------
# Configuração OAuth Google usando Authlib:
# ------------------------------
oauth = OAuth()
oauth.register(
    name='google',
    client_id=GOOGLE_CLIENT_ID,
    client_secret=GOOGLE_CLIENT_SECRET,
    server_metadata_url='https://accounts.google.com/.well-known/openid-configuration',  # Padrão OpenID do Google:
    client_kwargs={'scope': 'openid email profile'},  # Escopos necessários para info do usuário:
)

# ------------------------------
# Usuário fake para login tradicional (login/senha == apenas para teste):
# ------------------------------
fake_user = {
    "email": "admin@teste.com",
    "password": "123456"  # Senha em texto puro (NÃO USAR EM PRODUÇÃO):
}

# ------------------------------
# Modelos Pydantic para requisições e respostas:
# ------------------------------
class LoginRequest(BaseModel):  # Modelo Pydantic para o corpo da requisição de login tradicional:
    email: str
    password: str

class TokenResponse(BaseModel):  # Modelo Pydantic para resposta com token JWT:
    access_token: str
    token_type: str

# ------------------------------
# Endpoint callback do Google OAuth:
# ------------------------------
@app.get("/auth/google/callback")
async def auth_callback(request: Request):
    # Recebe o token de acesso após o login no Google:
    token = await oauth.google.authorize_access_token(request)

    # Usa o token para buscar informações do usuário no Google:
    async with AsyncOAuth2Client(token=token) as client:
        resp = await client.get('https://www.googleapis.com/oauth2/v2/userinfo')
        user_info = resp.json()

    # Cria um token JWT para o usuário logado:
    jwt_token = create_jwt(user_info["email"])

    # Monta os parâmetros para redirecionar o front-end com as infos:
    query = urlencode({
        "token": jwt_token,
        "name": user_info.get("name", ""),
        "email": user_info.get("email", ""),
        "picture": user_info.get("picture", "")
    })

    # Redireciona para o front-end com o token e dados do usuário:
    return RedirectResponse(url=f"http://localhost:5173/google-callback?{query}")

# ------------------------------
# Rota para iniciar o fluxo de login pelo Google:
# ------------------------------
@app.get("/auth/google/login")
async def login_google(request: Request):
    # Gera a URL de callback para o Google redirecionar depois do login:
    redirect_uri = request.url_for('auth_callback')
    # Redireciona para o Google iniciar o login OAuth:
    return await oauth.google.authorize_redirect(request, redirect_uri)

# ------------------------------
# Endpoint para login tradicional com email e senha
# ------------------------------
@app.post("/login", response_model=TokenResponse)
def login(data: LoginRequest):
    # Verifica se as credenciais batem com o usuário fake:
    if data.email != fake_user["email"] or data.password != fake_user["password"]:
        # Levanta exceção HTTP 401 - Unauthorized se credenciais inválidas:
        raise HTTPException(status_code=401, detail="Credenciais inválidas")

    # Cria um token JWT para o usuário autenticado:
    token = create_jwt(data.email)

    # Retorna o token e o tipo de token (Bearer) para o cliente:
    return {"access_token": token, "token_type": "bearer"}
