from .database import SessionLocal
from .hashed_password import hashed_password
from models.user import User
from models.role import Role
from schemas.user import UserSchema
from schemas.role import RoleSchema


def data_that_must_exist_in_the_database():
    db = SessionLocal()
    role_admin = db.query(Role).where(Role.role == 'admin').first()
    if not role_admin:
        role_schema = RoleSchema(
            role='admin'
        )
        new_role_admin = Role(**role_schema.dict())
        db.add(new_role_admin)
        db.commit()
        db.refresh(new_role_admin)
        role_admin = new_role_admin

    user_admin = db.query(User).where(
        User.role_id == role_admin.id).first()
    if not user_admin:
        user_schema = UserSchema(
            username='admin',
            password=hashed_password('@Admin123'),
            role_id=role_admin.id,  # type: ignore
            is_active=True
        )
        new_user = User(**user_schema.dict())
        db.add(new_user)
        db.commit()
        db.refresh(new_user)
