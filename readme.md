# WorkPulse - RBAC Microservices System (Node.js + Sequelize)

A **Role-Based Access Control (RBAC)** microservices-based backend system built using **Node.js**, **Express**, **Sequelize ORM**, and **API Gateway architecture**.

This project simulates a real-world enterprise workflow where **Employees**, **Managers**, and **Admins** interact through structured services such as **Leave Management**, **Task Assignment**, **Company Issue Tracking**, and **Approval Management**.

---

## 🚀 Features

### 🔐 Authentication & Authorization
- JWT-based authentication
- Role-based access control (Employee, Manager, Admin)
- Centralized API Gateway

### 🧩 Microservices Architecture
- Independent services with isolated responsibilities
- Clean separation of concerns
- Scalable and production-ready structure

### 👥 Roles & Capabilities

#### Employee
- Apply for leave
- Raise company-related issues
- View assigned tasks
- Accept or reject tasks
- Track task and leave status

#### Manager
- Approve or reject employee leaves
- Resolve or reject issues
- Assign tasks to employees
- Monitor team activities

#### Admin
- View all system data
- Manage user roles and statuses
- Monitor overall system health and reports

---

## 🏗️ Architecture Overview

Each service:
- Has its own routes, controllers, services, and models
- Enforces RBAC internally
- Can be scaled independently

---

## 🧠 Services Breakdown

### 🔑 Auth Service (`/auth`)
Handles authentication and user identity.

(Created Migration and seed data for users model-- explain this)

**Endpoints**
- `POST /auth/signup`
- `POST /auth/login`
- `GET /auth/profile`

---

### 🏖️ Leave Service (`/leave`)
Manages employee leave lifecycle.

**Endpoints**
- `POST /leave/apply (Employee)`
- `GET /leave/myLeaves (Employee)`
- `GET /leave/pending (Manager)`
- `PATCH /leave/:id/approve (Manager)`
- `PATCH /leave/:id/reject (Manager)`

---

### ✅ Task Service (`/task`)
Handles task assignment and progress tracking.

**Endpoints**
- `POST /task`
- `GET /task/assigned-by-me`
- `GET /task/my-tasks`
- `PATCH /task/:id/accept`
- `PATCH /task/:id/reject`
- `PATCH /task/:id/status`

---

### 🛠️ Issue Service (`/issue`)
Used for reporting and resolving company issues.

**Endpoints**
- `POST /issue`
- `GET /issue/my-issues`
- `GET /issue/pending`
- `PATCH /issue/:id/resolve`
- `PATCH /issue/:id/reject`

---

### 🔄 Approval Service (`/approval`)
Centralized approval workflow (optional but scalable).

**Endpoints**
- `POST /approval/request`
- `GET /approval/pending`
- `PATCH /approval/:id/approve`
- `PATCH /approval/:id/reject`

---

### 👑 Admin Service (`/admin`)
System-wide monitoring and control.

**Endpoints**
- `GET /admin/users`
- `GET /admin/leaves`
- `GET /admin/tasks`
- `GET /admin/issues`
- `PATCH /admin/user/:id/role`
- `PATCH /admin/user/:id/status`

---

## 🔐 RBAC Strategy

- JWT contains `userId` and `role`
- API Gateway validates token
- Services enforce role-based access internally

Example:
```ts
if (req.user.role !== "MANAGER") {
  throw new ForbiddenError();
}


