import os
from dotenv import load_dotenv

load_dotenv()  # Carrega as variáveis do arquivo .env

# ---------------------------
# Variáveis obrigatórias - devem estar definidas no .env
# ---------------------------

# Chave secreta para uso geral (sessões, JWT, etc)
SECRET_KEY = os.getenv("SECRET_KEY")
if not SECRET_KEY:
    raise ValueError("A variável SECRET_KEY não está definida no .env")

# Algoritmo para assinatura JWT (ex: HS256)
ALGORITHM = os.getenv("ALGORITHM")
if not ALGORITHM:
    raise ValueError("A variável ALGORITHM não está definida no .env")

# Tempo de expiração do token JWT em minutos (ex: 60)
try:
    EXPIRATION_MINUTES = int(os.getenv("EXPIRATION_MINUTES"))
except (TypeError, ValueError):
    raise ValueError("A variável EXPIRATION_MINUTES deve estar definida no .env e ser um inteiro")

# Client ID da API Google OAuth2
GOOGLE_CLIENT_ID = os.getenv("GOOGLE_CLIENT_ID")
if not GOOGLE_CLIENT_ID:
    raise ValueError("A variável GOOGLE_CLIENT_ID não está definida no .env")

# Client Secret da API Google OAuth2
GOOGLE_CLIENT_SECRET = os.getenv("GOOGLE_CLIENT_SECRET")
if not GOOGLE_CLIENT_SECRET:
    raise ValueError("A variável GOOGLE_CLIENT_SECRET não está definida no .env")

# ---------------------------
# Você pode adicionar mais variáveis do .env conforme a necessidade
# ---------------------------
