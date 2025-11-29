# Node.js + MongoDB JWT Authentication Project

A complete starter project with:

✔ User Signup  
✔ JWT-based Login Authentication  
✔ 5 Free Credits on Signup  
✔ Credit Usage & Transactions  
✔ MongoDB (Mongoose)  
✔ HTML + Bootstrap Frontend  
✔ REST APIs for Auth & Credits  
✔ Fully Working Dashboard  

---

## 📌 Tech Stack

- Node.js (Express.js)
- MongoDB + Mongoose
- JWT Authentication
- HTML, CSS, Bootstrap 5
- AJAX / Fetch API
- dotenv
- bcryptjs

---

## 🚀 Features

### 🔐 Authentication
- Signup (firstName, lastName, email, username, password, confirmPassword)
- Email & Username must be unique
- Password hashing (bcryptjs)
- JWT-based login
- Protected routes via middleware

### 💳 Credits System
- New users get **5 free credits**
- Transaction history stored in `CreditTransaction` collection
- Use 1 credit per operation
- Admin can add credits (demo endpoint)

### 🖥 Frontend Pages
- `/signup.html`
- `/login.html`
- `/dashboard.html`

---

## 📦 Project Structure

run "npm install"

In project root, create a .env file:
PORT=5000
MONGO_URI=mongodb://localhost:27017/node_auth_db
JWT_SECRET=your_secret_key_here
JWT_EXPIRES_IN=7d