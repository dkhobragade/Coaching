---

## 🚀 Tech Stack

| Component            | Technology                     |
|---------------------|--------------------------------|
| Backend Framework    | Node.js + Express.js           |
| Database             | MongoDB + Mongoose             |
| Authentication       | JWT                            |
| Payments             | Razorpay / Stripe              |
| File Uploads         | Multer                         |
| Email Notifications  | Nodemailer (OTP, etc.)        |

---


## 🎯 API Endpoints

### Authentication (`/api/auth`)
- `POST /signup` — Register a new user  
- `POST /login` — User login  
- `POST /logout` — Log out  

### Courses (`/api/courses`)
- `GET /` — List all courses  
- `POST /` — Create a new course  
- `PUT /:id` — Edit a course  
- `DELETE /:id` — Remove a course  

### Tests (`/api/tests`)
- `GET /` — List tests  
- `POST /` — Add a test  
- `POST /submit` — Submit test answers  

### Users (`/api/users`)
- `GET /profile` — Get profile info  
- `PUT /progress` — Update learning progress  

### Payments (`/api/payments`)
- `POST /create-order` — Create Razorpay/Stripe order  
- `POST /verify` — Verify payment  

---
