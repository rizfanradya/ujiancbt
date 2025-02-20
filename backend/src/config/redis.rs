use redis::Client;
use std::env;

pub async fn connect_redis() -> redis::aio::MultiplexedConnection {
    let redis_url = env::var("REDIS_URL").expect("REDIS_URL must be set");
    let client = Client::open(redis_url).expect("Failed to create Redis client");
    client
        .get_multiplexed_async_connection()
        .await
        .expect("Failed to connect to Redis")
}
