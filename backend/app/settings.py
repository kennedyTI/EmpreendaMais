# ------------------------------
# Importações
# ------------------------------
from pydantic_settings import BaseSettings
from typing import List

# ------------------------------
# Definição da classe Settings para variáveis de ambiente
# ------------------------------
class Settings(BaseSettings):
    # ------------------------------
    # Chaves secretas para segurança da aplicação
    # ------------------------------
    SECRET_KEY_JWT: str
    SECRET_KEY_GOOGLE: str

    # ------------------------------
    # Configurações do JWT
    # ------------------------------
    ALGORITHM: str
    EXPIRATION_MINUTES: int
    GOOGLE_TOKEN_EXP_MINUTES: int

    # ------------------------------
    # Credenciais da API do Google OAuth
    # ------------------------------
    GOOGLE_CLIENT_ID: str
    GOOGLE_CLIENT_SECRET: str

    # ------------------------------
    # URLs permitidas no CORS
    # ------------------------------
    FRONTEND_URL: str  # 👈 Variável simples (não lista)
    BACKEND_URL: str   # 👈 NOVA variável para URL do backend

    # ------------------------------
    # Configuração do MongoDB
    # ------------------------------
    MONGO_URI: str
    MONGO_DB: str

    # ------------------------------
    # Propriedade derivada para CORS
    # ------------------------------
    @property
    def frontend_origins(self) -> List[str]:
        return [self.FRONTEND_URL.strip()] if self.FRONTEND_URL else []

    # ------------------------------
    # Fonte das variáveis de ambiente
    # ------------------------------
    class Config:
        env_file = ".env"

# ------------------------------
# Instanciação
# ------------------------------
settings = Settings()
