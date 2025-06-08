# ------------------------------
# Importações
# ------------------------------
from pydantic import BaseModel, EmailStr, Field
from typing import Optional
from bson import ObjectId

# ------------------------------
# Classe auxiliar para validar e converter ObjectId do MongoDB
# ------------------------------
class PyObjectId(ObjectId):
    @classmethod
    def __get_validators__(cls):
        yield cls.validate

    @classmethod
    def validate(cls, v):
        if not ObjectId.is_valid(v):
            raise ValueError("Invalid objectid")
        return ObjectId(v)

    @classmethod
    def __modify_schema__(cls, field_schema):
        field_schema.update(type="string")

# ------------------------------
# Modelo base para o usuário (reutilizado para herança)
# ------------------------------
class UserBase(BaseModel):
    email: EmailStr                              # Email válido do usuário
    full_name: Optional[str] = None              # Nome completo (opcional)
    is_active: bool = True                        # Indicador se usuário está ativo
    is_google_account: bool = False               # Se a conta foi criada via Google OAuth

# ------------------------------
# Modelo para criação de usuário (entrada da API)
# ------------------------------
class UserCreate(UserBase):
    password: str                                # Senha em texto (a ser hashada)

# ------------------------------
# Modelo para usuário armazenado no banco (leitura e manipulação)
# ------------------------------
class UserInDB(UserBase):
    id: PyObjectId = Field(default_factory=PyObjectId, alias="_id")  # ID MongoDB
    hashed_password: Optional[str] = None                           # Senha já hashada

    class Config:
        allow_population_by_field_name = True    # Permite usar 'id' no lugar de '_id'
        json_encoders = {ObjectId: str}           # Converte ObjectId para string no JSON
        arbitrary_types_allowed = True            # Permite tipos como ObjectId

# ------------------------------
# Sugestão futura: modelos para retorno (UserOut), atualização parcial, etc.
# ------------------------------
# class UserOut(UserBase):
#     id: PyObjectId = Field(alias="_id")
#
#     class Config:
#         allow_population_by_field_name = True
#         json_encoders = {ObjectId: str}
#
# class UserUpdate(BaseModel):
#     full_name: Optional[str] = None
#     is_active: Optional[bool] = None
