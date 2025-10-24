## ⚛️ React Components

React me **Components** ek tarah se building blocks hote hain —
jaise LEGO ke chhote pieces mil kar ek bada structure banate hain,
waise hi React components milkar **poori website/app** banate hain.

---

### 🔹 What is a Component?

A **Component** ek reusable piece of UI (User Interface) hota hai.
Isme hum HTML, CSS, aur JavaScript ka code ek sath likh sakte hain.

React me mainly **2 types ke components** hote hain 👇

1. **Functional Components (Modern & Most Used)**
2. **Class Components (Old Style)**

---

### 🟢 Functional Components

Functional components ek **simple JavaScript function** hote hain
jo kuch JSX (HTML-like code) return karte hain.

#### 📄 Example:

```jsx
// App.jsx
function Welcome() {
  return <h1>Hello, React Components!</h1>;
}

export default Welcome;
```

Yahan `Welcome` ek component hai.
Ye JSX return karta hai — jo screen par HTML ki tarah show hota hai.

**Import karna:**

```jsx
// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import Welcome from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(<Welcome />);
```

---

### 🟣 Class Components (Old Way)

Pehle React me class components use hote the —
ye ab bhi kaam karte hain, lekin modern React me functional components preferred hain.

#### 📄 Example:

```jsx
import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return <h1>Hello from Class Component!</h1>;
  }
}

export default Welcome;
```

📝 *Note:*
Aaj ke time pe **Hooks** (like `useState`, `useEffect`) ke aane ke baad functional components hi mostly use hote hain.

---

### 💡 Naming Rules for Components

* Component ka **naam capital letter se** start hona chahiye (e.g., `App`, `Header`, `Button`)
* Component ek **single element return** kare — agar multiple elements hain to **Fragments (`<> </>`)** use karo
* Har component ko **export/import** karna zaroori hai taaki use dusri file me kar sakein

---

### 🧩 Combining Multiple Components

React app me hum multiple components bana sakte hain
aur ek main component (mostly `App.jsx`) ke andar unhe use karte hain.

#### 📄 Example:

```jsx
// Header.jsx
function Header() {
  return <h2>This is the Header</h2>;
}
export default Header;
```

```jsx
// Footer.jsx
function Footer() {
  return <p>© 2025 React App</p>;
}
export default Footer;
```

```jsx
// App.jsx
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Header />
      <h1>Welcome to My React App</h1>
      <Footer />
    </>
  );
}

export default App;
```

**Output:**

```
This is the Header
Welcome to My React App
© 2025 React App
```

---

### 🧠 Why Components Are Useful

| Feature            | Description                                     |
| ------------------ | ----------------------------------------------- |
| ♻️ Reusability     | Ek hi component multiple jagah use ho sakta hai |
| 🔧 Maintainability | Code short aur easy to manage ho jata hai       |
| 📦 Modularity      | Har part (UI section) alag file me hota hai     |
| ⚡ Performance      | Small components render faster                  |

---

### ⚙️ Component Folder Structure (Recommended)

```
src/
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   └── Button.jsx
└── App.jsx
```

> Har component ko `components/` folder me rakho —
> taaki project clean aur organized rahe.

---

### 🧠 Summary

* Components React app ke **core building blocks** hain.
* 2 types → **Functional** (modern) & **Class** (old).
* Components ko **import/export** karna padta hai.
* Components reusable, modular aur maintainable hote hain.
* React me mostly **Functional Components + Hooks** ka use hota hai.