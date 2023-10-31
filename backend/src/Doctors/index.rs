
use mongodb::{Client, Database};
use next_router::{Router, Route};

#[derive(Debug)]
struct Doctor {
    id: String,
    name: String,
    specialty: String,
    hospital_id: String,
    image_url: String,
}

#[async_std::main]
async fn main() {
    let client = Client::with_uri("mongodb://localhost:27017").unwrap();
    let db = client.database("hospital_management");

    let router = Router::new()
        .route(Route::get("/").handler(get_doctors))
        .build();

    router.listen(format!("http://localhost:3000/api/doctors")).await.unwrap();
}

async fn get_doctors(req: Request, mut res: Response) -> Result<Response, HttpError> {
    let collection = db.collection("doctors");
    let doctors = collection.find(None, None).await.unwrap();

    let doctors: Vec<Doctor> = doctors.into_iter().map(|document| {
        Doctor {
            id: document["_id"].as_str().unwrap().to_string(),
            name: document["name"].as_str().unwrap().to_string(),
            specialty: document["specialty"].as_str().unwrap().to_string(),
            hospital_id: document["hospital_id"].as_str().unwrap().to_string(),
            image_url: document["image_url"].as_str().unwrap().to_string(),
        }
    }).collect();

    res.set_status(StatusCode::OK);
    res.set_header("Content-Type", "application/json");
    serde_json::to_writer(res.body_mut(), &doctors).unwrap();

    Ok(res)
}
