# Importa CORSMiddleware
from fastapi.middleware.cors import CORSMiddleware
# Importa FastAPI
from fastapi import FastAPI
# Importa settings
from app.settings import settings

# Definição da função setup_cors
def setup_cors(app: FastAPI):
    app.add_middleware(
        CORSMiddleware,
        allow_origins=[settings.FRONTEND_URL],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )
