from fastapi import FastAPI
from starlette.middleware.sessions import SessionMiddleware
from app.settings import settings
from app.core.config import setup_cors
from app.routers import auth, google_auth

app = FastAPI()

# Middleware de sessão
app.add_middleware(SessionMiddleware, secret_key=settings.SECRET_KEY)

# Middleware CORS
setup_cors(app)

# Rotas
app.include_router(auth.router, prefix="/auth", tags=["Auth"])
app.include_router(google_auth.router, prefix="/auth/google", tags=["Google OAuth"])