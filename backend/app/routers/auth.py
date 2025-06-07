# Importa APIRouter, HTTPException
from fastapi import APIRouter, HTTPException
# Importa BaseModel
from pydantic import BaseModel
# Importa create_jwt
from app.core.security import create_jwt

router = APIRouter()

fake_user = {
    "email": "admin@teste.com",
    "password": "123456"
}

# Definição da classe LoginRequest
class LoginRequest(BaseModel):
    email: str
    password: str

# Definição da classe TokenResponse
class TokenResponse(BaseModel):
    access_token: str
    token_type: str

@router.post("/login", response_model=TokenResponse)
# Definição da função login
def login(data: LoginRequest):
    if data.email != fake_user["email"] or data.password != fake_user["password"]:
        raise HTTPException(status_code=401, detail="Credenciais inválidas")

    token = create_jwt(data.email)
    return {"access_token": token, "token_type": "bearer"}
