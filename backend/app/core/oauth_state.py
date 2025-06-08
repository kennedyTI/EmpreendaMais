# ------------------------------
# Importações
# ------------------------------
from uuid import uuid4
from datetime import datetime, timedelta
from app.db.mongo import db

# ------------------------------
# Constantes
# ------------------------------
STATE_EXPIRATION_MINUTES = 10  # ⏱ Tempo de validade do parâmetro 'state' (em minutos)
COLLECTION_NAME = "oauth_states"  # 📦 Nome da coleção no MongoDB

# ------------------------------
# Função para gerar um 'state' único e armazenar com validade
# ------------------------------
async def generate_oauth_state() -> str:
    state = uuid4().hex  # 🔑 Gera um identificador único e aleatório
    expires_at = datetime.utcnow() + timedelta(minutes=STATE_EXPIRATION_MINUTES)

    await db[COLLECTION_NAME].insert_one({
        "state": state,
        "expires_at": expires_at
    })

    return state

# ------------------------------
# Função para validar um 'state': verifica se existe, não expirou e apaga após uso
# ------------------------------
async def validate_oauth_state(state: str) -> bool:
    if not state:
        return False

    record = await db[COLLECTION_NAME].find_one({"state": state})

    if not record:
        return False

    expires_at = record.get("expires_at")

    # ⏱ Verifica se o 'state' expirou
    if not expires_at or expires_at < datetime.utcnow():
        # Remove registro expirado para limpeza do banco
        await db[COLLECTION_NAME].delete_one({"_id": record["_id"]})
        return False

    # 🔒 Remove para garantir uso único do state
    await db[COLLECTION_NAME].delete_one({"_id": record["_id"]})
    return True
