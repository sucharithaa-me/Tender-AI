| Method | Endpoint                 | Description              |
| ------ | ------------------------ | ------------------------ |
| POST   | `/api/auth/register`     | Register a new user      |
| POST   | `/api/auth/login`        | Login user               |
| POST   | `/api/tenders/upload`    | Upload a tender PDF      |
| GET    | `/api/tenders`           | Get all uploaded tenders |
| GET    | `/api/tenders/{id}`      | Get a specific tender    |
| DELETE | `/api/tenders/{id}`      | Delete a tender          |
| POST   | `/api/ai/summarize/{id}` | Generate AI summary      |
| POST   | `/api/ai/chat/{id}`      | Chat with a tender       |
| GET    | `/api/reports/{id}`      | Download AI report       |
| GET    | `/api/history`           | View chat history        |
