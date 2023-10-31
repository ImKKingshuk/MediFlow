// app/backend/hospitals/index.rs

use mongodb::{Client, Database};
use next_router::{Router, Route};

#[derive(Debug)]
struct Hospital {
    id: String,
    name: String,
    address: String,
    city: String,
    state: String,
    country: String,
    phone_number: String,
    website: String,
    image_url: String,
}

#[async_std::main]
async fn main() {
    let client = Client::with_uri("mongodb://localhost:27017").unwrap();
    let db = client.database("hospital_management");

    let router = Router::new()
        .route(Route::get("/").handler(get_hospitals))
        .build();

    router.listen(format!("http://localhost:3000/api/hospitals")).await.unwrap();
}

async fn get_hospitals(req: Request, mut res: Response) -> Result<Response, HttpError> {
    let collection = db.collection("hospitals");
    let hospitals = collection.find(None, None).await.unwrap();

    let hospitals: Vec<Hospital> = hospitals.into_iter().map(|document| {
        Hospital {
            id: document["_id"].as_str().unwrap().to_string(),
            name: document["name"].as_str().unwrap().to_string(),
            address: document["address"].as_str().unwrap().to_string(),
            city: document["city"].as_str().unwrap().to_string(),
            state: document["state"].as_str().unwrap().to_string(),
            country: document["country"].as_str().unwrap().to_string(),
            phone_number: document["phone_number"].as_str().unwrap().to_string(),
            website: document["website"].as_str().unwrap().to_string(),
            image_url: document["image_url"].as_str().unwrap().to_string(),
        }
    }).collect();

    res.set_status(StatusCode::OK);
    res.set_header("Content-Type", "application/json");
    serde_json::to_writer(res.body_mut(), &hospitals).unwrap();

    Ok(res)
}
