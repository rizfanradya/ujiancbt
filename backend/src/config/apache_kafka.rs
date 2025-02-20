use rdkafka::config::ClientConfig;
use rdkafka::producer::FutureProducer;
use std::env;

pub async fn connect_kafka_producer() -> FutureProducer {
    ClientConfig::new()
        .set(
            "bootstrap.servers",
            env::var("KAFKA_BROKERS").expect("KAFKA_BROKERS must be set"),
        )
        .set("message.timeout.ms", "5000")
        .create()
        .expect("Producer creation error")
}
