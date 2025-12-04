# 🎬 YouTube Clone — Frontend (React + Vite)

📝 **GitHub Repository:**
[https://github.com/ashreekar/youtube-frontend](https://github.com/ashreekar/youtube-frontend)

## 📌 Overview

This is the **frontend of a YouTube Clone application** built using **React (Vite)**.
The project replicates core YouTube features such as:

* Browse videos on the Home page
* Search videos by title
* Filter videos using categories
* View and play videos
* Like / Dislike videos
* Add, edit, and delete comments
* User authentication (Login / Register)
* Create and manage channels
* Upload, edit, and delete videos from your own channel
* Fully responsive UI
* Smooth navigation using React Router
* Clean state management using Redux Toolkit

This project is part of the MERN YouTube Clone capstone and implements all required frontend features.

---

## ⚙️ Features

### 🏠 **Home Page**

✔ YouTube-like header
✔ Collapsible sidebar
✔ Video grid layout
✔ Filter buttons (6+ categories)
✔ Search videos by title
✔ Responsive layout

### 🔐 **User Authentication**

✔ Register and Login pages
✔ JWT-based authentication
✔ Validation for username, email, and password
✔ After login, username appears in the header

### 🎥 **Video Player Page**

✔ Play selected video
✔ Shows title, description, channel name
✔ Like / Dislike functionality
✔ Full Comments CRUD:

* Add comment
* Edit comment
* Delete comment

### 📺 **Channel Page**

✔ Create a channel (after signing in)
✔ View all videos uploaded by that channel
✔ Upload new videos
✔ Edit video details
✔ Delete videos

### 🔍 **Search & Filters**

✔ Header search bar
✔ Search videos by title
✔ Category-based filtering
✔ Videos dynamically update based on filter

### 📱 Responsive UI

✔ Mobile
✔ Tablet
✔ Desktop

---

## 🏗️ Project Structure

```
youtube-frontend/
├── public/
├── src/
│   ├── components/
│   │   ├── Auth/
│   │   ├── Header/
│   │   ├── Sidebar/
│   │   ├── VideoCard/
│   │   ├── VideoGrid/
│   │   ├── CommentSection/
│   │   ├── Channel/
│   │   ├── Filters/
│   ├── pages/
│   │   ├── Home/
│   │   ├── Login/
│   │   ├── Register/
│   │   ├── VideoPlayer/
│   │   ├── ChannelPage/
│   ├── utils/
│   │   ├── dateFormatter.js
│   │   ├── viewsFormatter.js
│   │   ├── axiosInstance.js
│   ├── store/
│   │   ├── userSlice.js
│   │   ├── videoSlice.js
│   │   ├── channelSlice.js
│   │   ├── store.js
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
├── package.json
├── vite.config.js
├── README.md
```

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/ashreekar/youtube-frontend.git
cd youtube-frontend
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Run the Application

```bash
npm run dev
```

Now open **[http://localhost:5173](http://localhost:5173)** in the browser.

---

## 🧰 Tech Stack

**Frontend:**

* React (Vite)
* Redux Toolkit
* React Router
* Axios
* TailwindCSS
* Framer Motion
* React Icons
* React Hook Form

---

## 🎨 UI & Styling

✔ Clean and YouTube-inspired UI
✔ TailwindCSS for styling
✔ Responsive for all screen sizes
✔ Smooth animations using Framer Motion

---

## 📜 Assignment Requirements Covered

✔ React app created with Vite
✔ Home page with header, sidebar, filters, and video grid
✔ Login and Register with validation + JWT handling
✔ Video Player with Like/Dislike
✔ Comments CRUD
✔ Channel page with full video CRUD
✔ Search by video title
✔ Filter by category
✔ Routing for all pages + dynamic video routes
✔ Redux for global state
✔ Responsive UI
✔ Clean folder structure
✔ README with setup instructions

---

## 🎯 Future Enhancements

* Dark mode toggle
* Recommended videos section

---

## 🤝 Contributions

Pull requests are welcome!

---