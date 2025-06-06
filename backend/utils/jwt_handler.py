import jwt
from datetime import datetime, timedelta
import os

def create_jwt(user_email: str) -> str:
    payload = {
        "sub": user_email,
        "exp": datetime.utcnow() + timedelta(hours=1)
    }
    return jwt.encode(payload, os.getenv("SECRET_KEY"), algorithm="HS256")