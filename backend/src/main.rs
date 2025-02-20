mod config;
mod handlers;
mod models;
mod schema;

use actix_web::{web, App, HttpServer};
use dotenvy::dotenv;

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    dotenv().ok();
    let db = config::database::init_db().await;
    let redis_conn = config::redis::connect_redis().await;
    let es_client = config::elasticsearch::connect_elasticsearch().await;
    let kafka_producer = config::apache_kafka::connect_kafka_producer().await;

    HttpServer::new(move || {
        App::new()
            .app_data(web::Data::new(db.clone()))
            .app_data(web::Data::new(redis_conn.clone()))
            .app_data(web::Data::new(es_client.clone()))
            .app_data(web::Data::new(kafka_producer.clone()))
            .service(config::swagger_docs::swagger_routes())
            .route("/user", web::post().to(handlers::user::create_user))
            .route("/user", web::get().to(handlers::user::get_users))
    })
    .bind("0.0.0.0:8080")?
    .run()
    .await
}
