# ------------------------------
# Importações
# ------------------------------
from motor.motor_asyncio import AsyncIOMotorClient
from app.core.config import settings

# ------------------------------
# Cria o cliente MongoDB usando a URI configurada no .env
# ------------------------------
client = AsyncIOMotorClient(settings.MONGO_URI)

# ------------------------------
# Seleciona o banco de dados definido no .env
# ------------------------------
db = client[settings.MONGO_DB]

# ------------------------------
# Funções para acessar collections específicas
# ------------------------------
def get_users_collection():
    """
    Retorna a collection 'users' do banco de dados.
    Essa collection armazena dados de usuários do sistema.
    """
    return db["users"]

def get_oauth_states_collection():
    """
    Retorna a collection 'oauth_states' do banco de dados.
    Usada para armazenar tokens 'state' temporários durante o login com Google (CSRF protection).
    """
    return db["oauth_states"]

# ------------------------------
# (Opcional) Função para garantir índice único no campo email
# ------------------------------
async def create_indexes():
    """
    Cria índices necessários no banco de dados, como o índice único no email dos usuários.
    Deve ser chamada no evento de startup da aplicação.
    """
    await db["users"].create_index("email", unique=True)
