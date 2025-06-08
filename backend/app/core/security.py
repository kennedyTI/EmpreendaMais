# ------------------------------
# Importações
# ------------------------------
from datetime import datetime, timedelta
import jwt
from jwt import ExpiredSignatureError, PyJWTError
import bcrypt
from app.settings import settings

# ------------------------------
# Função para criar token JWT com email e expiração
# ------------------------------
def create_jwt(email: str) -> str:
    """
    Gera um token JWT assinado contendo o email do usuário e tempo de expiração.

    Args:
        email (str): Email do usuário, usado como identificador no token ("sub").

    Returns:
        str: Token JWT codificado como string.
    """
    expire = datetime.utcnow() + timedelta(minutes=settings.EXPIRATION_MINUTES)
    payload = {
        "sub": email,
        "exp": expire
    }
    return jwt.encode(payload, settings.SECRET_KEY_JWT, algorithm=settings.ALGORITHM)

# ------------------------------
# Função para decodificar e validar token JWT
# ------------------------------
def decode_jwt(token: str) -> dict | None:
    """
    Decodifica o token JWT e verifica validade.

    Args:
        token (str): Token JWT a ser decodificado.

    Returns:
        dict | None: Payload do token se válido, None se inválido ou expirado.
    """
    try:
        payload = jwt.decode(token, settings.SECRET_KEY_JWT, algorithms=[settings.ALGORITHM])
        return payload
    except ExpiredSignatureError:
        print("[Auth] Token expirado.")
        return None
    except PyJWTError:
        print("[Auth] Token inválido.")
        return None

# ------------------------------
# Função para gerar hash seguro de senha usando bcrypt
# ------------------------------
def hash_password(password: str) -> str:
    """
    Gera hash seguro da senha utilizando bcrypt.

    Args:
        password (str): Senha em texto plano.

    Returns:
        str: Hash da senha codificado como string.
    """
    return bcrypt.hashpw(password.encode("utf-8"), bcrypt.gensalt()).decode("utf-8")

# ------------------------------
# Função para verificar se senha informada bate com o hash armazenado
# ------------------------------
def verify_password(password: str, hashed_password: str) -> bool:
    """
    Compara senha em texto plano com o hash armazenado.

    Args:
        password (str): Senha fornecida.
        hashed_password (str): Hash salvo no banco.

    Returns:
        bool: True se as senhas coincidem, False se não.
    """
    return bcrypt.checkpw(password.encode("utf-8"), hashed_password.encode("utf-8"))
