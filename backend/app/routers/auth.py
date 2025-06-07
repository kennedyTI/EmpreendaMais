from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from app.core.security import create_jwt

router = APIRouter()

fake_user = {
    "email": "admin@teste.com",
    "password": "123456"
}

class LoginRequest(BaseModel):
    email: str
    password: str

class TokenResponse(BaseModel):
    access_token: str
    token_type: str

@router.post("/login", response_model=TokenResponse)
def login(data: LoginRequest):
    if data.email != fake_user["email"] or data.password != fake_user["password"]:
        raise HTTPException(status_code=401, detail="Credenciais inválidas")

    token = create_jwt(data.email)
    return {"access_token": token, "token_type": "bearer"}
