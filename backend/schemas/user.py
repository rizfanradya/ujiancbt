from pydantic import BaseModel
from typing import List
from schemas.role import RoleSchema


class MainBaseSchema(BaseModel):
    username: str
    is_active: bool
    role_id: int


class UserSchema(MainBaseSchema):
    password: str


class BaseSchema(MainBaseSchema):
    id: int
    role: RoleSchema

    class Config:
        from_attributes = True


class UserResponseSchema(BaseModel):
    total_data: int
    data: List[BaseSchema]

    class Config:
        from_attributes = True
