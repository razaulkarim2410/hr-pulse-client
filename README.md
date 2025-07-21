# 👨‍💼 HRPulse – Smart HR Management System

Website Name- HRPulse

**Live Site:** https://hr-pulse-b9fea.web.app/ 

Admin username- Nasif Azara
Password- 1234Azad@


## 🚀 Overview

**HRPulse** is a full-featured Human Resource Management System built for modern organizations. It streamlines employee tracking, task management, salary handling, and admin control — all within an intuitive, responsive web interface.

---

## ✨ Key Features

- 🔐 **Role-Based Access Control**  
  Roles include **Admin**, **HR**, and **Employee**, each with distinct dashboard and access privileges.

- 🧑‍💼 **Employee Registration & Authentication**  
  Users can register/login via email/password or social login (Google/GitHub). Role selection and image upload supported.

- 📄 **WorkSheet Logging**  
  Employees can log daily tasks with hours and date, and edit or delete entries.

- 📊 **Admin Dashboard**  
  Admins can view all employees, promote to HR, fire users, and assign salaries securely using JWT-based protected routes.

- 💰 **Payroll & Payments**  
  HRs can generate monthly payroll requests. Admins review and mark salaries as paid with Stripe integration.

- 💳 **Stripe Payment Integration**  
  Secure salary payments processed via Stripe with dynamic amount handling.

- 📈 **Employee Salary History & Progress**  
  View detailed employee work records, filter by month, and explore salary charts with payment breakdowns.

- 🧾 **Pagination & Sorting**  
  Paginated views for payment history ensure better performance and clean UI.

- 💬 **Contact Form with Email Support**  
  Users can send messages via the Contact Us form; data is saved and viewable by admins.

- 📱 **Responsive UI**  
  Fully responsive across mobile, tablet, and desktop using Tailwind CSS & DaisyUI.

---

## 🛠 Tech Stack

- **Frontend:** React, Tailwind CSS, DaisyUI, Axios, React Router, React Query  
- **Backend:** Node.js, Express.js, MongoDB, JWT, Stripe  
- **Auth:** Firebase Authentication  
- **Deployment:** Vercel (Backend) + Firebase Hosting (Frontend)

---

## 📁 Folder Structure Highlights

- `client/` → React frontend  
- `server/` → Express backend with JWT auth middleware  
- `.env` → Secure environment variables (VITE_ prefix for frontend)

---

## 📢 Note

- All sensitive actions (salary update, promotion, payroll approval) are protected with role-based middlewares (`isAdmin`, `isHR`).
- Use the admin credentials above for full access during testing.

---

