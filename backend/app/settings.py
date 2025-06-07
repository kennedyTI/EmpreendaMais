# Importa BaseSettings
from pydantic_settings import BaseSettings

# Definição da classe Settings
class Settings(BaseSettings):
    SECRET_KEY: str
    ALGORITHM: str
    EXPIRATION_MINUTES: int
    GOOGLE_CLIENT_ID: str
    GOOGLE_CLIENT_SECRET: str
    FRONTEND_URL: str

# Definição da classe Config:
    class Config:
        env_file = ".env"

settings = Settings()