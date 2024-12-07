from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from utils.database import get_db
from utils.auth import TokenAuthorization
from utils.error_response import send_error_response
from typing import Optional
from sqlalchemy import or_
from models.role import Role
from schemas.role import RoleSchema, RoleResponseSchema

router = APIRouter()


@router.post('/role')
def create_role(role: RoleSchema, db: Session = Depends(get_db), token: str = Depends(TokenAuthorization)):
    try:
        new_data = Role(**role.dict())
        db.add(new_data)
        db.commit()
        db.refresh(new_data)
        return new_data
    except Exception as error:
        send_error_response(str(error), 'role already exist')


@router.put('/role/{id}')
def update_role(id: int, role: RoleSchema, db: Session = Depends(get_db), token: str = Depends(TokenAuthorization)):
    data_info = db.query(Role).get(id)
    if data_info is None:
        send_error_response('Data not found')
    try:
        for key, value in role.dict().items():
            if value is not None:
                setattr(data_info, key, value)
        db.commit()
        db.refresh(data_info)
        return data_info
    except Exception as error:
        send_error_response(str(error), 'role already exist')


@router.get('/role', response_model=RoleResponseSchema)
def get_role(limit: int = 10, offset: int = 0, search: Optional[str] = None, role_id: Optional[int] = None, db: Session = Depends(get_db), token: str = Depends(TokenAuthorization)):
    query = db.query(Role)
    if role_id:
        query = query.where(Role.id == role_id)
    if search:
        query = query.filter(or_(*[getattr(Role, column).ilike(
            f"%{search}%"
        ) for column in Role.__table__.columns.keys()]  # type: ignore
        ))
    total_data = query.count()
    query = query.offset(offset).limit(limit).all()  # type: ignore
    return {
        "total_data": total_data,
        "data": query
    }


@router.delete('/role/{id}')
def delete_role(id: int, db: Session = Depends(get_db), token: str = Depends(TokenAuthorization)):
    try:
        data = db.query(Role).get(id)
        if data:
            db.delete(data)
            db.commit()
    except Exception as error:
        send_error_response(str(error), 'Cannot delete this data')
