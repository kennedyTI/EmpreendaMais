import jwt
from datetime import datetime, timedelta

# ------------------------------
# Importa as variáveis de configuração do settings.py
# (validadas e carregadas do .env)
# ------------------------------
from backend.app.settings import SECRET_KEY, ALGORITHM, EXPIRATION_MINUTES

# ------------------------------
# Função para criação de token JWT
# ------------------------------
def create_jwt(user_email: str) -> str:
    """
    Gera um token JWT assinado contendo o email do usuário e tempo de expiração.

    Args:
        user_email (str): Email do usuário, usado como identificação principal no token ("sub").

    Returns:
        str: Token JWT codificado como string.
    """

    # Define o tempo de expiração do token:
    expire = datetime.utcnow() + timedelta(minutes=EXPIRATION_MINUTES)

    # Payload com os dados do token:
    payload = {
        "sub": user_email,  # Identificação do usuário:
        "exp": expire        # Tempo de expiração (exp) obrigatório:
    }

    # Codifica e retorna o token JWT com a chave secreta e algoritmo definidos:
    return jwt.encode(payload, SECRET_KEY, algorithm=ALGORITHM)
