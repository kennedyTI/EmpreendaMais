# Importa datetime, timedelta
from datetime import datetime, timedelta
# Importa jwt
import jwt
# Importa settings
from app.settings import settings

# Definição da função create_jwt
def create_jwt(email: str) -> str:
    payload = {
        "sub": email,
        "exp": datetime.utcnow() + timedelta(minutes=settings.EXPIRATION_MINUTES),
    }
    return jwt.encode(payload, settings.SECRET_KEY, algorithm=settings.ALGORITHM)
