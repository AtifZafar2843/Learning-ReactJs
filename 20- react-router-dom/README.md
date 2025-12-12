# 🚦 React Router DOM — Basic Routing Notes

## 📌 What is React Router?

**React Router** ek library hai jisse hum React app me:

* Multiple pages create kar sakte hain
* URL ke hisaab se component change kar sakte hain
* SPA (Single Page App) ke andar multi-page experience de sakte hain

Without reload → fast navigation!

---

# 📦 Installation

Vite, CRA, or any React project me:

```bash
npm install react-router-dom
```

---

# 🧱 Basic Folder Structure (Recommended)

```
src/
 ├── pages/
 │     ├── Home.jsx
 │     ├── About.jsx
 │     └── Contact.jsx
 ├── App.jsx
 └── main.jsx
```

---

# 🔗 Basic Setup — main.jsx

React Router ko enable karne ke liye **BrowserRouter** wrapper use hota hai.

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
```

---

# 🧭 Define Routes — App.jsx

React Router DOM v6 se (latest syntax):

```jsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
```

### ✔ Key Points

* `<Routes>` → Parent wrapper of all routes
* `<Route>` → Single route define karta hai
* `path="/"` → URL
* `element={<Home />}` → Component to show

---

# 🧭 Navigation — `<Link>` Component

React me `<a>` tag use nahi karte because it reloads the page.

Use:

```jsx
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </>
  );
}
```

✔ Page reload nahi hota
✔ Smooth navigation
✔ SPA behavior

---

# 🧪 Example Page Component (Home.jsx)

```jsx
function Home() {
  return <h1>Welcome to Home Page</h1>;
}

export default Home;
```

---

# 🧠 What You Just Learned (Basic Level)

✔ BrowserRouter setup
✔ Routes & Route components
✔ Page switching based on URL
✔ Link component for navigation
✔ SPA routing — without refresh

Yeh sab **basic routing** ka foundation hai.

---

# 🧩 Common Mistakes to Avoid

### ❌ Using `<a href="">` instead of `<Link>`

* Page reload ho jata hai
* SPA ka purpose fail

### ❌ Not wrapping app with `<BrowserRouter>`

→ Routing work hi nahi karega

### ❌ Wrong syntax (old v5):

```js
<Route component={Home} /> // ❌
```

React Router v6 syntax uses:

```js
<Route element={<Home />} /> // ✔
```

---

# ⚡ Extra: Navigate Programmatically (Basic Concept)

`useNavigate()` ka use hota hai, but ye **advanced routing** me detail se cover karenge.

Example:

```jsx
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();
navigate("/about");
```

---

# 🎯 Summary Table

| Concept       | Meaning                   |
| ------------- | ------------------------- |
| BrowserRouter | Routing enable karta hai  |
| Routes        | Group of routes           |
| Route         | URL → Component mapping   |
| Link          | Navigation without reload |
| useNavigate   | Programmatic navigation   |

---

# 🔥 Real-World Examples Where Basic Routing Used

* Landing pages → Home, About, Services
* Blog pages → /blog, /blog/:id (advanced)
* E-commerce → Home, Products, Contact
* Portfolio → Home, Projects, Contact

---

# 🎉 You Are Ready For Advanced Routing!

Aage hum padhenge:

* Nested Routes
* Dynamic Routes (`/user/:id`)
* useParams
* useLocation
* useNavigate
* Protected Routes
* Layout Routes