# HR & Attendance Management System
A full-stack Human Resources and Employee Attendance tracking system built to streamline workforce administration, daily attendance logging, employee record lifecycles, and verification documents.
---
## System Overview
The repository is organized into a decoupled frontend and backend:
attendance-system/ ├── Front-endAtt/ # React.js client dashboard └── HR-Management-System/ # Node.js + Express REST API & MongoDB models



---
## Core Capabilities
### 1. Administrative Metrics Dashboard
Real-time high-level workforce metrics on login:
- **Total Headcount:** Total registered staff.
- **Today's Status:** Employees marked Present vs. Absent.
- **Punctuality Tracking:** Late arrivals and employees currently On Leave.
### 2. Employee Lifecycle Management
- **Full CRUD:** Create, view profile cards, update records, and remove or deactivate employees.
- **Status Lifecycle:** Classify staff across `Active`, `Probation`, and `Inactive` states.
- **Document Handling:** Secure file upload pipeline for government IDs (CNIC) and Resumes/CVs (PDF, PNG, JPG).
- **Search & Filtering:** Dynamic employee lookup by name, designation, or department.
### 3. Daily Attendance Tracking
- Individual punch-in and punch-out timestamp logging.
- Date-based log query system (`GET /api/attendance?date=YYYY-MM-DD`).
- Historical attendance records for payroll reporting.
---
## REST API Reference
### Authentication
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/api/auth/login` | Admin login & JWT token generation |
### Employee Management
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/employees` | List employees (supports `?search=` query) |
| `GET` | `/api/employees/:id` | Get individual employee details and documents |
| `POST` | `/api/employees` | Register new employee profile |
| `POST` | `/api/employees/upload` | Multipart file upload for CNIC and CV documents |
| `PUT` | `/api/employees/:id` | Update employee profile details |
| `PATCH`| `/api/employees/:id/status`| Update employee status (`Active` / `Probation` / `Inactive`) |
| `DELETE`| `/api/employees/:id` | Delete employee record |
### Attendance Records
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/attendance` | Fetch attendance records (default view) |
| `GET` | `/api/attendance?date=YYYY-MM-DD` | Filter attendance logs for a specific date |
| `POST` | `/api/attendance` | Record daily attendance entry (punch-in / punch-out) |
---
## Tech Stack
### Frontend (`Front-endAtt`)
- **React.js** (Functional Components, Hooks)
- **Axios** (API communication)
- **React Router** (Protected dashboard navigation)
- **CSS / UI Components** (Responsive administrative interface)
### Backend (`HR-Management-System`)
- **Node.js & Express.js** (REST API architecture)
- **MongoDB & Mongoose** (Document schemas, relations, and indexes)
- **JSON Web Tokens (JWT) & bcrypt** (Authentication & password hashing)
- **Multer** (Multipart file upload handling for documents)
---
## Local Development Setup
### 1. Prerequisites
- **Node.js** >= 18
- **MongoDB** running locally (`mongodb://localhost:27017`) or a MongoDB Atlas URI
---
### 2. Backend Setup
```bash
cd HR-Management-System
npm install
Create a .env file in HR-Management-System/:

env


PORT=5000
MONGO_URI=mongodb://localhost:27017/attendance_db
JWT_SECRET=your_jwt_secret_key
Start the backend server:

bash


npm start
# Server starts on http://localhost:5000
3. Frontend Setup
In a separate terminal:

bash


cd Front-endAtt
npm install
Create a .env file in Front-endAtt/ (if API URL customization is needed):

env


REACT_APP_API_URL=http://localhost:5000/api
Start the client:

bash


npm start
# Client starts on http://localhost:3000
