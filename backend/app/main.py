# Importa FastAPI
from fastapi import FastAPI
# Importa SessionMiddleware
from starlette.middleware.sessions import SessionMiddleware
# Importa settings
from app.settings import settings
# Importa setup_cors
from app.core.config import setup_cors
# Importa auth, google_auth
from app.routers import auth, google_auth

# Instancia o app FastAPI:
app = FastAPI()

# ------------------------------
# Middleware de sessão para OAuth e sessões seguras:
# ------------------------------
app.add_middleware(SessionMiddleware, secret_key=settings.SECRET_KEY)

# ------------------------------
# Middleware CORS para permitir requests do frontend acessarem a API:
# Ajuste os URLs conforme seus ambientes dentro do .env:
# ------------------------------
# Middleware CORS
setup_cors(app)

# ------------------------------
# Rota para iniciar o fluxo de login pelo Google:
# ------------------------------
app.include_router(auth.router, prefix="/auth", tags=["Auth"])
app.include_router(google_auth.router, prefix="/auth/google", tags=["Google OAuth"])