from datetime import datetime, timezone
from app.core.security import hash_password
from app.db.mongo import db
import asyncio

async def insert_user():
    user = {
        "email": "teste@exemplo.com",
        "full_name": "Usuário Teste",
        "hashed_password": hash_password("suaSenha123"),  # Cria o hash da senha
        "created_at": datetime.now(timezone.utc),       # Data UTC com timezone-aware
        "auth_provider": "local"
    }
    result = await db["users"].insert_one(user)
    print(f"Usuário inserido com ID: {result.inserted_id}")

# Para rodar a função async: rode == python -m app.insert_user
asyncio.run(insert_user())
