# 🚀 React Router DOM — Advanced Routing Notes

---

## 📌 Overview

Advanced routing React Router DOM ka wo part hai jisse hum **real-world, multi-page like applications** banate hain — bina page reload ke.

Is level par hum:

* Complex layouts handle karte hain
* URL ke through dynamic data dikhate hain
* Programmatic navigation use karte hain
* Invalid routes ke liye 404 page show karte hain

---

## 🧭 1️⃣ Routing (Quick Recap)

Routing ka matlab:

> URL ke hisaab se **different components render karna**

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
</Routes>
```

Ye SPA (Single Page Application) ka base hai.

---

## 🧩 2️⃣ Nested Routing

### 🔹 What is Nested Routing?

**Nested routing** ka matlab hai:

> Ek route ke andar aur routes hona

Ye tab use hota hai jab:

* Page ka kuch layout same rahe (Navbar, Sidebar)
* Sirf content section change ho

---

### 📁 Example Folder Structure

```
pages/
 ├── Dashboard.jsx
 ├── Profile.jsx
 ├── Settings.jsx
```

---

### 📄 Parent Route (App.jsx)

```jsx
<Route path="/dashboard" element={<Dashboard />}>
  <Route path="profile" element={<Profile />} />
  <Route path="settings" element={<Settings />} />
</Route>
```

---

### 📄 Parent Component (Dashboard.jsx)

```jsx
import { Outlet, Link } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <h1>Dashboard</h1>

      <nav>
        <Link to="profile">Profile</Link>
        <Link to="settings">Settings</Link>
      </nav>

      <Outlet />
    </>
  );
}

export default Dashboard;
```

### 🧠 Key Point

* `<Outlet />` **mandatory** hota hai nested route ko render karne ke liye
* URL:

  * `/dashboard/profile`
  * `/dashboard/settings`

---

## 🔁 3️⃣ Dynamic Routing

### 🔹 What is Dynamic Routing?

Dynamic routing ka matlab:

> URL ke andar variable value pass karna

Example:

```
/user/1
/user/25
/product/iphone
```

---

### 📄 Route Definition

```jsx
<Route path="/user/:id" element={<User />} />
```

Yahan `:id` ek **dynamic parameter** hai.

---

### 📄 Access Dynamic Value — `useParams()`

```jsx
import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams();

  return <h1>User ID: {id}</h1>;
}

export default User;
```

### 🧠 Use Cases

* User profile pages
* Product details
* Blog post pages

---

## 🧭 4️⃣ Programmatic Navigation — `useNavigate`

### 🔹 What is `useNavigate`?

`useNavigate` ka use hota hai:

> JavaScript ke through page change karne ke liye

Matlab button click, form submit, login success ke baad redirect.

---

### 📄 Example

```jsx
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  function handleLogin() {
    // login logic
    navigate("/dashboard");
  }

  return <button onClick={handleLogin}>Login</button>;
}

export default Login;
```

---

### 🔁 Navigate Back / Forward

```jsx
navigate(-1); // back
navigate(1);  // forward
```

---

## 🚫 5️⃣ 404 Page Not Found

### 🔹 What is 404 Page?

Jab user kisi **invalid URL** par jata hai,
to ek **Not Found page** show karna best practice hai.

---

### 📄 Create NotFound Component

```jsx
function NotFound() {
  return <h1>404 - Page Not Found</h1>;
}

export default NotFound;
```

---

### 📄 Catch All Route

```jsx
<Route path="*" element={<NotFound />} />
```

### 🧠 Important

* `"*"` ka matlab → koi bhi unmatched route
* Ye route **last me likhna zaroori** hota hai

---

## 🔥 Full Advanced Routing Example (Combined)

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/user/:id" element={<User />} />

  <Route path="/dashboard" element={<Dashboard />}>
    <Route path="profile" element={<Profile />} />
    <Route path="settings" element={<Settings />} />
  </Route>

  <Route path="*" element={<NotFound />} />
</Routes>
```

---

## 🧠 Common Mistakes to Avoid

❌ `<Outlet />` bhool jana in nested routing
❌ Dynamic route ke liye `useParams()` use na karna
❌ `path="*"` route ko upar likhna
❌ `<a href="">` use karna instead of `<Link />`

---

## 📊 Summary Table

| Concept         | Use                        |
| --------------- | -------------------------- |
| Routing         | URL → Component mapping    |
| Nested Routing  | Layout ke andar routes     |
| Dynamic Routing | URL params ke through data |
| useNavigate     | Programmatic navigation    |
| 404 Page        | Invalid routes handle      |

---

## 🎯 Real-World Use Cases

* Admin dashboards
* User profile systems
* E-commerce product pages
* Blog platforms
* Auth-based redirects

---

## 🏁 Final Summary

Advanced routing se tum:

* Complex apps bana sakte ho
* Clean URL structure maintain kar sakte ho
* Better user experience de sakte ho

Ye concepts **industry-level React apps** ka core hissa hain 🔥
