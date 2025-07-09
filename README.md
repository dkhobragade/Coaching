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


## 📁 Project Structure

<pre> ``` backend/ ├── config/ │ └── db.js # Database connection setup │ ├── controllers/ │ ├── authController.js # User signup/login/logout │ ├── courseController.js # CRUD for courses │ ├── testController.js # Test series logic │ ├── paymentController.js # Handles Razorpay/Stripe │ └── userController.js # User profiles & progress │ ├── middlewares/ │ └── authMiddleware.js # JWT authorization │ ├── models/ │ ├── User.js │ ├── Course.js │ ├── Test.js │ └── Result.js │ ├── routes/ │ ├── authRoutes.js │ ├── courseRoutes.js │ ├── testRoutes.js │ ├── userRoutes.js │ └── paymentRoutes.js │ ├── uploads/ # PDF, image storage │ ├── utils/ │ └── sendEmail.js # OTP and email notifications │ ├── .env # Environment variables ├── .gitignore ├── package.json ├── server.js # Entry point └── README.md ``` </pre>


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
