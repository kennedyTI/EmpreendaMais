# ------------------------------
# Importações
# ------------------------------
# Importa FastAPI
from fastapi import FastAPI
# Importa SessionMiddleware
from starlette.middleware.sessions import SessionMiddleware
# Importa settings
from app.settings import settings
# Importa setup_cors
from app.core.config import setup_cors
# Importa routers
from app.routers import auth, google_auth
# Importa logging
import logging

# ------------------------------
# Configuração inicial de logging
# ------------------------------
logging.basicConfig(level=logging.INFO)
logging.info("🚀 Aplicação FastAPI iniciando...")

# ------------------------------
# Validação de chave secreta necessária para segurança
# ------------------------------
if not settings.SECRET_KEY_JWT:
    raise ValueError("❌ A chave secreta JWT (SECRET_KEY_JWT) não foi definida no arquivo .env")

# ------------------------------
# Instancia o app FastAPI
# ------------------------------
app = FastAPI()

# ------------------------------
# Middleware de sessão para OAuth e sessões seguras:
# Usa a chave específica para Google OAuth
# ------------------------------
app.add_middleware(SessionMiddleware, secret_key=settings.SECRET_KEY_GOOGLE)

# ------------------------------
# Middleware CORS para permitir requests do frontend acessarem a API:
# Lê múltiplas origens do .env separadas por vírgula
# ------------------------------
setup_cors(app)

# ------------------------------
# Rotas de autenticação
# ------------------------------
app.include_router(auth.router, prefix="/auth", tags=["Auth"])
app.include_router(google_auth.router, prefix="/auth/google", tags=["Google OAuth"])

# ------------------------------
# Evento de inicialização para criação de índices no MongoDB
# ------------------------------
@app.on_event("startup")
async def startup_event():
    from app.db.mongo import create_indexes
    await create_indexes()
    logging.info("✅ Índices do MongoDB criados com sucesso.")

# ------------------------------
# Rota raiz para verificação de status da API (health check):
# ------------------------------
@app.get("/")
async def root():
    return {"status": "ok"}
