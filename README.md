# Employee TaskTrack - Phase 1: Project Setup and Backend Configuration

## Overview

Employee TaskTrack is a MERN-based application that helps employees create, update, and manage their own work tasks.  
In this first phase, we set up the backend with Node.js, Express.js, and MongoDB, establish the project structure, and configure environment variables.

---

## Phase 1 Objectives

- Initialize the Node.js project.
- Install backend dependencies.
- Connect the project to MongoDB Atlas.
- Create project structure and core files.
- Add models for User and Task.
- Implement authentication using JWT.
- Set up basic CRUD routes for tasks.

---

## Project Setup Steps

### 1. Initialize Project

```bash
mkdir employee-tasktrack-backend
cd employee-tasktrack-backend
npm init -y
```

### 2. Install Dependencies

```bash
npm install express mongoose dotenv bcryptjs jsonwebtoken cors express-validator
npm install -D nodemon
```

### 3. Add Scripts in `package.json`

```json
"scripts": {
  "start": "node src/server.js",
  "dev": "nodemon src/server.js"
}
```

### 4. Create Project Structure

```
employee-tasktrack-backend/
├─ src/
│  ├─ config/
│  │  └─ db.js
│  ├─ controllers/
│  │  ├─ authController.js
│  │  └─ taskController.js
│  ├─ middleware/
│  │  └─ auth.js
│  ├─ models/
│  │  ├─ User.js
│  │  └─ Task.js
│  ├─ routes/
│  │  ├─ auth.js
│  │  └─ tasks.js
│  └─ server.js
├─ .env
├─ .gitignore
└─ package.json
```

### 5. Configure `.env`

```
PORT=5000
MONGODB_URI=mongodb+srv://Jeff:<db password>@cluster0.nfko3ho.mongodb.net/employeetasktrack?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=your_secure_random_secret
JWT_EXPIRES_IN=7d
```

### 6. Connect to MongoDB

Run the server and confirm connection:

```bash
npm run dev
```

You should see:

```
MongoDB connected
Server started on port 5000
```

---

## Basic API Endpoints

| Method | Endpoint             | Description               | Auth Required |
| ------ | -------------------- | ------------------------- | ------------- |
| POST   | `/api/auth/register` | Register a new user       | No            |
| POST   | `/api/auth/login`    | Log in user and get token | No            |
| GET    | `/api/tasks`         | Get all user tasks        | Yes           |
| POST   | `/api/tasks`         | Create a new task         | Yes           |
| PUT    | `/api/tasks/:id`     | Update a task             | Yes           |
| DELETE | `/api/tasks/:id`     | Delete a task             | Yes           |

---

## .gitignore Setup

```
node_modules/
.env
.env.local
.DS_Store
npm-debug.log*
yarn-debug.log*
yarn-error.log*
```

---

## Next Phase

Phase 2 will include the frontend setup using React, connecting it to the backend API, and building the user interface for task management.
