# 🌐 React Context API — Notes

## 🚀 Overview

React me **Context API** ka use hum tab karte hain jab:

* Ek hi data ko **multiple components** me use karna ho
* Data ko **props ke through bar-bar pass karna (props drilling)** avoid karna ho

Context API hume **global state** banane ki facility deta hai
jisse data directly kisi bhi component me access kiya ja sakta hai.

---

## ❌ Problem: Props Drilling

Props drilling ka matlab:

> Data ko parent → child → grandchild → great-grandchild tak props ke through bhejna

```jsx
<App theme={theme}>
  <Navbar theme={theme}>
    <Menu theme={theme}>
      <Button theme={theme} />
    </Menu>
  </Navbar>
</App>
```

❌ Code messy ho jata hai
❌ Maintain karna mushkil hota hai

---

## ✅ Solution: Context API

Context API ke through:

* Data ek **central place** me store hota hai
* Jo component chahe, directly access kar sakta hai
* Props drilling ki zarurat nahi hoti

---

## 🧠 Context API Ka Core Idea (Easy Language)

Socho:

* Ek **water tank (Context)** hai
* Sab rooms (components) directly us tank se paani le sakte hain
* Pipe (props) har jagah lagane ki zarurat nahi

---

## 🧱 Steps to Use Context API

### 1️⃣ Create Context

### 2️⃣ Provide Context

### 3️⃣ Consume Context

---

## 1️⃣ Create Context

```jsx
import { createContext } from "react";

const ThemeContext = createContext();

export default ThemeContext;
```

* `createContext()` ek context object banata hai
* Ye context global data hold karega

---

## 2️⃣ Provide Context (Using Provider)

```jsx
import ThemeContext from "./ThemeContext";
import { useState } from "react";

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
```

### 🔥 Important Part: `children`

```jsx
{children}
```

* `children` ka matlab hota hai:

  > Jo bhi components `<ThemeProvider>` ke andar likhe gaye hain
* Ye automatically React ke through pass ho jaata hai
* Isse provider **reusable wrapper** ban jaata hai

---

## 3️⃣ Wrap App with Provider

```jsx
import ThemeProvider from "./ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Content />
    </ThemeProvider>
  );
}

export default App;
```

* Ab `Navbar`, `Content`, ya koi bhi nested component
  context ka data access kar sakta hai

---

## 4️⃣ Consume Context (useContext)

```jsx
import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <>
      <h1>Theme: {theme}</h1>
      <button onClick={() => setTheme("dark")}>Dark</button>
    </>
  );
}

export default Navbar;
```

* `useContext()` context ka data directly deta hai
* Koi props pass karne ki zarurat nahi

---

## 🔁 Children as Props — Deep Explanation

### ❓ What is `children`?

`children` ek **special prop** hota hai jo React automatically pass karta hai.

```jsx
<Component>
  <h1>Hello</h1>
</Component>
```

Is case me:

```jsx
props.children === <h1>Hello</h1>
```

---

## 🔥 Why We Use `children` in Context API?

Because:

* Provider ko **generic wrapper** banana hota hai
* Provider ko nahi pata hota kaunse components andar aayenge
* `children` allow karta hai flexible composition

### Example:

```jsx
<ThemeProvider>
  <Navbar />
  <Sidebar />
  <Footer />
</ThemeProvider>
```

Sab components ko context access mil jaata hai — bina extra props ke.

---

## 🧠 Data Flow with Context API

```
ThemeProvider
   ├── Navbar (uses theme)
   ├── Content (uses theme)
   └── Footer (uses theme)
```

✔ No props drilling
✔ Clean architecture

---

## 🧩 When to Use Context API?

Use Context API when:

* Theme (dark/light)
* Auth data (user info)
* Language (i18n)
* Cart data (small apps)
* App-level settings

❌ Avoid using Context for:

* Highly frequent updates (performance issue)
* Very large complex states (Redux better)

---

## 📊 Props Drilling vs Context API

| Feature          | Props Drilling | Context API |
| ---------------- | -------------- | ----------- |
| Code cleanliness | ❌ Messy        | ✅ Clean     |
| Scalability      | ❌ Poor         | ✅ Good      |
| Data access      | Limited        | Global      |
| Reusability      | Low            | High        |

---

## 🏁 Summary

* Context API React ka built-in global state solution hai
* Props drilling problem solve karta hai
* `createContext`, `Provider`, `useContext` — 3 main pillars
* `children` se provider reusable & flexible banta hai
* Small to medium apps ke liye best choice
