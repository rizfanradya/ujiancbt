from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from utils.database import get_db
from utils.auth import TokenAuthorization
from utils.error_response import send_error_response
from utils.hashed_password import hashed_password
from models.user import User
from schemas.user import UserSchema, UserResponseSchema
from typing import Optional
from sqlalchemy import or_

router = APIRouter()


@router.post('/user')
def create_user(user: UserSchema, db: Session = Depends(get_db)):
    user.password = hashed_password(user.password)
    try:
        new_user_info = User(**user.dict())
        db.add(new_user_info)
        db.commit()
        db.refresh(new_user_info)
        return new_user_info
    except Exception as error:
        send_error_response(
            str(error),
            'User already exists or role id not found'
        )


@router.put('/user/{id}')
def update_user(id: int, user: UserSchema, db: Session = Depends(get_db), token: str = Depends(TokenAuthorization)):
    user.password = hashed_password(user.password)
    user_info = db.query(User).get(id)
    if user_info is None:
        send_error_response('User not found')
    try:
        for key, value in user.dict().items():
            if value is not None:
                setattr(user_info, key, value)
        db.commit()
        db.refresh(user_info)
        return user_info
    except Exception as error:
        send_error_response(
            str(error),
            'User already exists or role id not found'
        )


@router.get('/user', response_model=UserResponseSchema)
def get_user(limit: int = 10, offset: int = 0, search: Optional[str] = None, user_id: Optional[int] = None, db: Session = Depends(get_db), token: str = Depends(TokenAuthorization)):
    query = db.query(User)

    if user_id:
        query = query.where(User.id == user_id)

    if search:
        query = query.filter(or_(*[getattr(User, column).ilike(
            f"%{search}%"
        ) for column in User.__table__.columns.keys()]))  # type: ignore

    total_data = query.count()
    query = query.offset(offset).limit(limit).all()  # type: ignore

    return {
        "total_data": total_data,
        "data": query
    }


@router.delete('/user/{id}')
def delete_user(id: int, db: Session = Depends(get_db), token: str = Depends(TokenAuthorization)):
    try:
        user = db.query(User).get(id)
        if user:
            db.delete(user)
            db.commit()
    except Exception as error:
        send_error_response(str(error), 'Cannot delete this data')
