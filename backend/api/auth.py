from fastapi.security import OAuth2PasswordRequestForm
from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.orm import Session
from utils.database import get_db
from utils.auth import create_access_token, create_refresh_token
from utils.config import JWT_REFRESH_SECRET_KEY, ALGORITHM
from models.user import User
from utils.error_response import send_error_response
import jwt
import bcrypt
from schemas.auth import AuthSchema

router = APIRouter()


@router.post("/token")
async def user_login(
    form_data: OAuth2PasswordRequestForm = Depends(),
    client_type: str = Query(
        description="Client type admin or siswa",
        default="admin"),
    db: Session = Depends(get_db)
):
    user_info = None
    if client_type == 'admin':
        user_info = db.query(User).where(
            User.username == form_data.username).first()
    if user_info is None:
        send_error_response("User not found")
    form_data_pwd = form_data.password.encode('utf-8')
    user_info_pwd = user_info.password.encode('utf-8')  # type: ignore
    bcrypt_checkpw = bcrypt.checkpw(form_data_pwd, user_info_pwd)
    access_token = create_access_token(
        user_info.id, client_type=client_type)  # type: ignore
    refresh_token = create_refresh_token(
        user_info.id, client_type=client_type)  # type: ignore
    if bcrypt_checkpw:
        return {
            "id": user_info.id,  # type: ignore
            "access_token": access_token,
            "refresh_token": refresh_token,
            "status": user_info.is_active,  # type: ignore
            "role": user_info.role.role if client_type == 'admin' else 'siswa',  # type: ignore
            "detail": "Login success"
        }
    else:
        raise HTTPException(
            status_code=404,
            detail={
                "id": user_info.id,  # type: ignore
                "access_token": None,
                "refresh_token": None,
                "status": False,
                "role": None,
                "detail": "Password not match"
            }
        )


@router.post("/refresh_token")
async def refresh_token(
    refresh_token: AuthSchema,
    db: Session = Depends(get_db)
):
    if JWT_REFRESH_SECRET_KEY is None:
        send_error_response("Environment variable JWT SECRET KEY not set")
    try:
        decode_token = jwt.decode(
            refresh_token.refresh_token,
            JWT_REFRESH_SECRET_KEY,  # type: ignore
            algorithms=[ALGORITHM]
        )
        client_type = decode_token.get('client_type')
        user_info = None
        if client_type == 'admin':
            user_info = db.query(User).get(decode_token.get('id'))
        if user_info is None:
            send_error_response("User not found")
        return {
            "access_token": create_access_token(
                user_info.id,  # type: ignore
                client_type=client_type
            ),
            "refresh_token": create_refresh_token(
                user_info.id,  # type: ignore
                client_type=client_type
            )
        }
    except jwt.ExpiredSignatureError:
        send_error_response("Token has expired")
    except jwt.InvalidTokenError:
        send_error_response("Token is invalid")
    except Exception as error:
        send_error_response(error, 'generate refresh token failed')
