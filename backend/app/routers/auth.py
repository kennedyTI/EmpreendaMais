# ------------------------------
# Importações principais
# ------------------------------
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, EmailStr  # <-- importa EmailStr
from app.core.security import create_jwt, verify_password
from app.db.mongo import db

# ------------------------------
# Instancia o roteador da API
# ------------------------------
router = APIRouter()

# ------------------------------
# Modelo de dados esperado na requisição de login
# ------------------------------
class LoginRequest(BaseModel):
    email: EmailStr        # <-- validação automática de formato de email
    password: str

# ------------------------------
# Modelo de resposta para retornar token JWT
# ------------------------------
class TokenResponse(BaseModel):
    access_token: str
    token_type: str

# ------------------------------
# Endpoint POST para login tradicional (email + senha)
# ------------------------------
@router.post("/login", response_model=TokenResponse)
async def login(data: LoginRequest):
    # Busca o usuário pelo email no MongoDB
    user = await db["users"].find_one({"email": data.email})

    # Se não encontrou usuário, retorna erro 401 - Unauthorized
    if not user:
        raise HTTPException(status_code=401, detail="Credenciais inválidas")

    # Se usuário foi criado via Google OAuth, bloqueia login por senha
    if user.get("auth_provider") == "google":
        raise HTTPException(
            status_code=403,
            detail="Conta registrada via Google. Use o login com Google."
        )

    # Valida a senha informada com o hash armazenado
    if not verify_password(data.password, user.get("hashed_password", "")):
        raise HTTPException(status_code=401, detail="Credenciais inválidas")

    # Cria o token JWT com o email do usuário autenticado
    token = create_jwt(user["email"])

    # Retorna o token e tipo no padrão OAuth2 Bearer Token
    return {
        "access_token": token,
        "token_type": "bearer"
    }
