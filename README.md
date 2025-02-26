# Smart Brain App

## 📌 Overview
Smart Brain is a web application that allows users to **detect faces in images** using the Clarifai API. Users can **register and log in** with credentials stored in a **PostgreSQL database**. The app also features a **ranking system** that tracks user activity.

## 🚀 Features

This project was built using **Node.js** and **Express.js** for the backend, ensuring a fast and scalable server environment.
- **User Authentication**: Register and log in with a secure PostgreSQL database.
- **Face Detection**: Analyze images and detect faces using the Clarifai API.
- **Extra Security:** Passwords are hashed using bcrypt for enhanced security and are never stored in plain text.

## 🛠️ Technologies Used
- **Frontend**: React, Vite, Tailwind CSS
- **Backend**: Node.js, Express.js, PostgreSQL
- **API**: Clarifai Face Detection API
- **Hosting**: Vercel (Frontend), Railway (Backend), Neon.tech (Database)

## 🔧 Installation & Setup
   ```sh
   git clone https://github.com/your-username/smart-brain.git
   cd smart-brain
   npm install
   VITE_API_URL=your-backend-url
   npm run dev
```

## ⚠️ Important Note
This repository does not include the backend server or database for security reasons. You need to set up your own Express.js and PostgreSQL database separately.
