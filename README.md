backend/
├── config/
│ └── db.js # DB connection logic
├── controllers/
│ ├── authController.js # Login, signup, etc.
│ ├── courseController.js # CRUD for courses
│ ├── testController.js # Test series logic
│ ├── paymentController.js # Razorpay/Stripe handlers
│ └── userController.js # User profile, progress, etc.
├── middlewares/
│ └── authMiddleware.js # JWT auth check
├── models/
│ ├── User.js
│ ├── Course.js
│ ├── Test.js
│ └── Result.js
├── routes/
│ ├── authRoutes.js
│ ├── courseRoutes.js
│ ├── testRoutes.js
│ ├── userRoutes.js
│ └── paymentRoutes.js
├── uploads/ # For PDFs, images, etc.
├── utils/
│ └── sendEmail.js # For OTP or notifications
├── .env # Env variables
├── .gitignore
├── package.json
├── server.js # Entry point
└── README.md

/api/auth

| Method | Route         | Description              |
| ------ | ------------- | ------------------------ |
| POST   | `/register`   | Register new user        |
| POST   | `/login`      | Login + return token     |
| GET    | `/profile`    | Get current user details |
| POST   | `/verify-otp` | Optional for email OTP   |

/api/courses

| Method | Route  | Description                   |
| ------ | ------ | ----------------------------- |
| GET    | `/`    | Get all courses               |
| GET    | `/:id` | Get course by ID              |
| POST   | `/`    | Add a new course (admin only) |
| PUT    | `/:id` | Update course                 |
| DELETE | `/:id` | Delete course                 |

/api/tests

| Method | Route         | Description                      |
| ------ | ------------- | -------------------------------- |
| GET    | `/`           | All available tests              |
| GET    | `/:id`        | Test details & questions         |
| POST   | `/`           | Create new test (admin only)     |
| PUT    | `/:id`        | Update test (admin only)         |
| DELETE | `/:id`        | Delete test                      |
| POST   | `/submit/:id` | Submit answers & calculate marks |

/api/results

| Method | Route  | Description             |
| ------ | ------ | ----------------------- |
| GET    | `/`    | Get all results of user |
| GET    | `/:id` | Get specific result     |

/api/users

| Method | Route  | Description           |
| ------ | ------ | --------------------- |
| GET    | `/me`  | Get logged-in user    |
| PUT    | `/me`  | Update profile        |
| GET    | `/:id` | (Optional) Admin view |

/api/payment

| Method | Route     | Description              |
| ------ | --------- | ------------------------ |
| POST   | `/create` | Create order             |
| POST   | `/verify` | Verify payment signature |
