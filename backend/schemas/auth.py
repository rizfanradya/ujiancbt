from pydantic import BaseModel


class AuthSchema(BaseModel):
    refresh_token: str
