use crate::{
    config::database::DbPool,
    models::user::{NewUser, User},
    schema::users::dsl::*,
};
use actix_web::{web, HttpResponse, Responder};
use diesel::prelude::*;

#[utoipa::path(
    get,
    path = "/user",
    responses(
        (status = 200, description = "Get all users", body = Vec<User>)
    )
)]
pub async fn get_users(pool: web::Data<DbPool>) -> impl Responder {
    let mut conn = pool.get().expect("Failed to get DB connection");
    let result = users.load::<User>(&mut conn).expect("Failed to load users");
    HttpResponse::Ok().json(result)
}

#[utoipa::path(
    post,
    path = "/user",
    request_body = NewUser,
    responses(
        (status = 201, description = "User created", body = User)
    )
)]
pub async fn create_user(pool: web::Data<DbPool>, new_user: web::Json<NewUser>) -> impl Responder {
    let mut conn = pool.get().expect("Failed to get DB connection");
    diesel::insert_into(users)
        .values(new_user.into_inner())
        .execute(&mut conn)
        .expect("Failed to insert user");
    HttpResponse::Created().finish()
}
