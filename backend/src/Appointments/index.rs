
use mongodb::{Client, Database};
use next_router::{Router, Route};

#[derive(Debug)]
struct Appointment {
    id: String,
    patient_name: String,
    doctor_name: String,
    hospital_name: String,
    date: String,
    time: String,
}

#[async_std::main]
async fn main() {
    let client = Client::with_uri("mongodb://localhost:27017").unwrap();
    let db = client.database("hospital_management");

    let router = Router::new()
        .route(Route::get("/").handler(get_appointments))
        .route(Route::post("/").handler(create_appointment))
        .build();

    router.listen(format!("http://localhost:3000/api/appointments")).await.unwrap();
}

async fn get_appointments(req: Request, mut res: Response) -> Result<Response, HttpError> {
    let collection = db.collection("appointments");
    let appointments = collection.find(None, None).await.unwrap();

    let appointments: Vec<Appointment> = appointments.into_iter().map(|document| {
        Appointment {
            id: document["_id"].as_str().unwrap().to_string(),
            patient_name: document["patient_name"].as_str().unwrap().to_string(),
            doctor_name: document["doctor_name"].as_str().unwrap().to_string(),
            hospital_name: document["hospital_name"].as_str().unwrap().to_string(),
            date: document["date"].as_str().unwrap().to_string(),
            time: document["time"].as_str().unwrap().to_string(),
        }
    }).collect();

    res.set_status(StatusCode::OK);
    res.set_header("Content-Type", "application/json");
    serde_json::to_writer(res.body_mut(), &appointments).unwrap();

    Ok(res)
}

async fn create_appointment(req: Request, mut res: Response) -> Result<Response, HttpError> {
    let body = req.body_json::<Appointment>().unwrap();

    let collection = db.collection("appointments");
    let appointment = Appointment {
        id: bson::oid::ObjectId::new().to_string(),
        patient_name: body.patient_name,
        doctor_name: body.doctor_name,
        hospital_name: body.hospital_name,
        date: body.date,
        time: body.time,
    };

    collection.insert_one(appointment, None).unwrap();

    res.set_status(StatusCode::CREATED);
    res.set_header("Content-Type", "application/json");
    serde_json::to_writer(res.body_mut(), &appointment).unwrap();

    Ok(res)
}
