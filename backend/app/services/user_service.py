# ------------------------------
# Importações
# ------------------------------
from typing import Optional
from pymongo.errors import DuplicateKeyError
from passlib.context import CryptContext

# Importa modelos de dados do usuário
from app.models.user import UserInDB, UserCreate

# Importa conexão com o MongoDB
from app.db.mongo import db


# ------------------------------
# Inicializações
# ------------------------------
# Inicializa o contexto para hashing seguro de senhas
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# Define a coleção usada para armazenar usuários
user_collection = db.users


# ------------------------------
# Função para gerar hash seguro da senha
# ------------------------------
def get_password_hash(password: str) -> str:
    """
    Gera um hash da senha usando bcrypt.
    """
    return pwd_context.hash(password)


# ------------------------------
# Função para buscar usuário por e-mail
# ------------------------------
async def get_user_by_email(email: str) -> Optional[UserInDB]:
    """
    Busca um usuário na base pelo email.
    Retorna um UserInDB se encontrado, ou None.
    """
    user_data = await user_collection.find_one({"email": email})
    if user_data:
        return UserInDB(**user_data)
    return None


# ------------------------------
# Função para criar novo usuário com verificação de duplicidade
# ------------------------------
async def create_user(user: UserCreate, is_google_account: bool = False) -> Optional[UserInDB]:
    """
    Cria um novo usuário na base.
    - Hasheia a senha se for conta tradicional.
    - Define senha como None para conta Google.
    - Verifica duplicidade com índice único (email).
    """
    user_dict = user.dict()

    if not is_google_account:
        user_dict["hashed_password"] = get_password_hash(user_dict.pop("password"))
    else:
        user_dict["hashed_password"] = None

    user_dict["is_google_account"] = is_google_account

    try:
        result = await user_collection.insert_one(user_dict)
        user_dict["_id"] = result.inserted_id
        return UserInDB(**user_dict)
    except DuplicateKeyError:
        return None  # Email já registrado


# ------------------------------
# Função para atualizar dados do usuário
# ------------------------------
async def update_user(email: str, user_update: dict) -> Optional[UserInDB]:
    """
    Atualiza os dados do usuário identificado pelo email.
    - Pode atualizar qualquer campo, incluindo senha.
    - Se "password" estiver presente, faz o hash corretamente.
    """
    if "password" in user_update:
        user_update["hashed_password"] = get_password_hash(user_update.pop("password"))

    result = await user_collection.find_one_and_update(
        {"email": email},
        {"$set": user_update},
        return_document=True  # Retorna o documento atualizado
    )

    if result:
        return UserInDB(**result)
    return None


# ------------------------------
# Função para excluir usuário
# ------------------------------
async def delete_user(email: str) -> bool:
    """
    Remove o usuário com o email especificado da base.
    Retorna True se excluído com sucesso, ou False se não encontrado.
    """
    result = await user_collection.delete_one({"email": email})
    return result.deleted_count == 1
