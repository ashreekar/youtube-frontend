# 🎬 YouTube Clone — Frontend

Frontend for a **full-featured YouTube Clone**, built using **React (Vite)** with clean UI, responsive layouts, and seamless integration with the backend API.
This application replicates YouTube’s essential user experience — video browsing, searching, filtering, authentication, channel management, video uploading, and full player interactions.

📝 **GitHub Repository:**
👉 [https://github.com/ashreekar/youtube-frontend](https://github.com/ashreekar/youtube-frontend)

---

## 📌 Overview

This frontend provides the complete UI and client-side functionality for the MERN YouTube Clone:

✔ Browse videos on the Home Page
✔ Play videos with full metadata
✔ Like / Dislike interactions
✔ Full Comments CRUD (Add / Edit / Delete)
✔ Login / Register with validation
✔ Create & manage channels
✔ Upload, edit, delete videos
✔ Dynamic search & filtering
✔ Responsive sidebar + YouTube-like navigation
✔ Smooth transitions & animations
✔ Global state using Redux Toolkit

The app integrates with the backend (Node.js/Express/MongoDB) to deliver a production-ready experience.

---

## ⚙️ Features

### 🏠 **Home Page**

✔ YouTube-style header
✔ Collapsible and responsive sidebar
✔ Grid-based video feed
✔ 6+ category filter buttons
✔ Real-time search bar (filters videos by title)
✔ Fully responsive (mobile/tablet/desktop)

---

### 🔐 **User Authentication**

✔ Register and Login pages
✔ JWT stored securely
✔ Validates username, email, password
✔ After login → username shows in header
✔ Handles auth states globally with Redux

---

### 🎥 **Video Player Page**

✔ Video playback
✔ Detailed metadata
✔ Like / Dislike toggle
✔ Related video section
✔ Full Comments CRUD:

* ➕ Add comment
* ✏️ Edit comment
* ❌ Delete comment

---

### 📺 **Channel Page**

✔ Create channel (after login)
✔ Update channel avatar & banner
✔ View channel videos
✔ Upload new videos (thumbnail + details)
✔ Edit video metadata
✔ Delete videos
✔ Channel tabs & modern layout

---

### 🔍 **Search & Filters**

✔ Header search bar with dynamic results
✔ Filter buttons for categories
✔ Results page showing all matching videos
✔ Smooth transitions & optimized fetching

---

### 📱 Fully Responsive Design

✔ Mobile-friendly navigation
✔ Tablet-optimized layouts
✔ Desktop grid system
✔ Custom loaders & skeleton screens

---

## 🏗️ Project Structure

```
youtube-frontend/
│
├── public/
│   ├── youtube.png
│   └── header/
│       └── burger-menu-svgrepo-com.svg
│
└── src/
    ├── components/
    │   ├── ButtonsAndInput/
    │   ├── cards/
    │   ├── Channel/
    │   ├── CreateAccount/
    │   ├── ErrorBoundary/
    │   ├── Header/
    │   ├── HomeFeed/
    │   ├── Loaders/
    │   ├── Login/
    │   ├── NotFound/
    │   ├── Popup/
    │   ├── Popups/
    │   ├── ResultList/
    │   ├── Sidebar/
    │   ├── SidebarAndPopUp/
    │   ├── TopFilter/
    │   └── VideoPalyer/
    │
    ├── pages/
    │   ├── ChannelPage.jsx
    │   ├── CreateAccount.jsx
    │   ├── LandingPage.jsx
    │   ├── Login.jsx
    │   ├── ResultsPage.jsx
    │   └── VideoPlayerPage.jsx
    │
    ├── states/ (Redux Toolkit slices)
    │   ├── appStore.js
    │   ├── overlaySlice.js
    │   ├── searchSlic.js
    │   ├── sidebarSlice.js
    │   ├── sideOverlaySlice.js
    │   ├── userSlice.js
    │   └── videoSlice.js
    │
    ├── utils/
    │   ├── dateFormatter.js
    │   ├── useFetch.js
    │   ├── viewsFormatter.js
    │
    ├── App.jsx
    ├── main.jsx
    └── index.css
│
├── vite.config.js
├── eslint.config.js
├── package.json
└── README.md
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

### 3️⃣ Run the Development Server

```bash
npm run dev
```

Open the app at:
👉 [http://localhost:5173](http://localhost:5173)

---

## 🧰 Tech Stack

**Frontend Framework**

* React (Vite)

**State Management**

* Redux Toolkit

**Routing**

* React Router DOM

**HTTP Client**

* Axios

**Styling**

* TailwindCSS
* Custom components & utility classes

**Animations**

* Framer Motion

**Forms**

* React Hook Form

**Icons**

* React Icons

---

## 🎨 UI & Styling

✔ YouTube-inspired user interface
✔ TailwindCSS for fast styling
✔ Smooth, clean UX
✔ Mobile-first responsive layout
✔ Animated sidebars & popups
✔ 10+ Skeleton loaders for a polished feel

---

## 📜 Assignment Requirements Covered

✔ Vite-based React project
✔ Home Page → header, sidebar, filters, video grid
✔ Login / Register with full validation & JWT
✔ Video Player with like/dislike logic
✔ Comments system (CRUD)
✔ Channel creation + video CRUD
✔ Search functionality
✔ Filter by category (6+ categories)
✔ Global Redux state
✔ Dynamic routing
✔ Responsive across devices
✔ Clear folder structure
✔ README with installation instructions

**Everything required by the MERN Capstone is fully implemented.** 💯

---

## 🎯 Future Enhancements plan

🔲 Dark Mode
🔲 LRU cahing
🔲 Google OAuth
🔲 Adaptive bitrate streaming
🔲 Recommended Videos Panel
🔲 History / Watch Later
🔲 Live Chat UI for streaming
🔲 Global Download Manager

---

## 🤝 Contributions

Pull requests, issues, and feature suggestions are welcome!
Feel free to open a PR or contact for collaboration.