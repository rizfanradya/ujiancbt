use crate::models::user::{NewUser, User};
use utoipa::OpenApi;
use utoipa_swagger_ui::SwaggerUi;

#[derive(OpenApi)]
#[openapi(
    info(
        title = "Ujian CBT API",
        version = "0.1.0",
        description = "API documentation for Ujian CBT system"
    ),
    paths(),
    components(schemas(User, NewUser))
)]
pub struct ApiDoc;

pub fn swagger_routes() -> SwaggerUi {
    SwaggerUi::new("/swagger-ui").url("/api-docs/openapi.json", ApiDoc::openapi())
}
