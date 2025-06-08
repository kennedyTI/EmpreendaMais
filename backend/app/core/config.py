# ------------------------------
# Importações
# ------------------------------
from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI
from app.settings import settings

# ------------------------------
# Função que configura o middleware de CORS na aplicação
# ------------------------------
def setup_cors(app: FastAPI):
    app.add_middleware(
        CORSMiddleware,
        allow_origins=settings.frontend_origins,  # ✅ Lista de origens válidas
        allow_credentials=True,                   # ✅ Permite cookies/autenticação
        allow_methods=["*"],                      # ✅ Todos os métodos HTTP permitidos
        allow_headers=["*"],                      # ✅ Todos os cabeçalhos permitidos
    )
