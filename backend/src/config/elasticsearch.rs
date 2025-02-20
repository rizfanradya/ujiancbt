use elasticsearch::Elasticsearch;
use std::env;

pub async fn connect_elasticsearch() -> Elasticsearch {
    let es_url = env::var("ELASTICSEARCH_URL").expect("ELASTICSEARCH_URL must be set");
    Elasticsearch::new(elasticsearch::http::transport::Transport::single_node(&es_url).unwrap())
}
