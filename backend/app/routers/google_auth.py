# Importa APIRouter, Request
from fastapi import APIRouter, Request
# Importa RedirectResponse
from starlette.responses import RedirectResponse
# Importa AsyncOAuth2Client
from authlib.integrations.httpx_client import AsyncOAuth2Client
# Importa urlencode
from urllib.parse import urlencode

# Importa oauth
from app.core.oauth import oauth
# Importa create_jwt
from app.core.security import create_jwt
# Importa settings
from app.settings import settings

router = APIRouter()

@router.get("/login")
async def login_google(request: Request):
    redirect_uri = request.url_for('auth_callback')
    return await oauth.google.authorize_redirect(request, redirect_uri)

@router.get("/callback")
async def auth_callback(request: Request):
    token = await oauth.google.authorize_access_token(request)
    async with AsyncOAuth2Client(token=token) as client:
        resp = await client.get('https://www.googleapis.com/oauth2/v2/userinfo')
        user_info = resp.json()

    jwt_token = create_jwt(user_info["email"])

    query = urlencode({
        "token": jwt_token,
        "name": user_info.get("name", ""),
        "email": user_info.get("email", ""),
        "picture": user_info.get("picture", "")
    })

    return RedirectResponse(url=f"{settings.FRONTEND_URL}/google-callback?{query}")
