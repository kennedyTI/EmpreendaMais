from fastapi import FastAPI, Request
from authlib.integrations.starlette_client import OAuth
from starlette.middleware.sessions import SessionMiddleware
from dotenv import load_dotenv
from authlib.integrations.httpx_client import AsyncOAuth2Client
import os
from starlette.responses import RedirectResponse
from urllib.parse import urlencode

from utils.jwt_handler import create_jwt  # importa a função

load_dotenv()

app = FastAPI()
app.add_middleware(SessionMiddleware, secret_key=os.getenv("SECRET_KEY"))

oauth = OAuth()
oauth.register(
    name='google',
    client_id=os.getenv("GOOGLE_CLIENT_ID"),
    client_secret=os.getenv("GOOGLE_CLIENT_SECRET"),
    server_metadata_url='https://accounts.google.com/.well-known/openid-configuration',
    client_kwargs={'scope': 'openid email profile'},
)

@app.get("/auth/google/callback")
async def auth_callback(request: Request):
    token = await oauth.google.authorize_access_token(request)

    async with AsyncOAuth2Client(token=token) as client:
        resp = await client.get('https://www.googleapis.com/oauth2/v2/userinfo')
        user_info = resp.json()

    jwt_token = create_jwt(user_info["email"])

    query = urlencode({
        "token": jwt_token,
        "name": user_info["name"],
        "email": user_info["email"],
        "picture": user_info.get("picture", "")
    })

    return RedirectResponse(url=f"http://localhost:5173/google-callback?{query}")


@app.get("/auth/google/login")
async def login_google(request: Request):
    redirect_uri = request.url_for('auth_callback')
    return await oauth.google.authorize_redirect(request, redirect_uri)
