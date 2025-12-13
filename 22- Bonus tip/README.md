# 🔁 Sending Data from Child to Parent (Using Props Drilling)

---

## 📌 Overview

Normally React me data flow **Parent → Child** hota hai (using props).
Lekin kabhi-kabhi hume **Child component se Parent component ko data bhejna hota hai**
(for example: button click, theme change, form submit).

👉 React me ye directly possible nahi hota.
👉 Iske liye hum ek **TRICK** use karte hain:

> **Parent apna state update karne wala function child ko props ke through deta hai**
> Aur child us function ko call karta hai.

Isi ko hum commonly kehte hain:

* **Child → Parent communication**
* **Props drilling trick**
* **Lifting state up (basic level)**

---

## 🧠 Core Idea (Easy Language)

React me:

* **State hamesha parent ke paas hota hai**
* **Child sirf parent ko “request” bhejta hai**

So process hota hai:

```
Parent
  └── state + setState()
        ↓ (props)
      Child
        ↓ (event)
   setState() call
        ↑
 Parent state update
```

---

## 🧩 Your Project Example (Theme Change)

Tumne ek **theme system** banaya hai jisme:

* State parent (`App.jsx`) me hai
* Button child (`Navbar.jsx`) me hai
* Button click par theme change hoti hai

Perfect real-world example 👌

---

## 🧱 App.jsx (Parent Component)

```jsx
import React, { useState } from 'react'
import Navbar from './Components/Navbar'

const App = () => {
  const [theme, setTheme] = useState('light')

  return (
    <div>
      <Navbar theme={theme} setTheme={setTheme} />
      <h1>Theme is {theme}</h1>
    </div>
  ) 
}

export default App
```

### 🔍 Explanation

* `theme` → parent state
* `setTheme` → state update function
* `setTheme` ko **props ke through child ko bhej diya**
* Parent ne control apne paas hi rakha

---

## 🧱 Navbar.jsx (Child Component)

```jsx
import React from "react";

const Navbar = (props) => {
  const changeTheme = () => {
    props.setTheme("dark");
  };

  return (
    <div className="nav">
      <h1>Fabrooh</h1>
      <div className="nav-links">
        <h3>Home</h3>
        <h3>About</h3>
        <h3>Contact</h3>
        <button onClick={changeTheme}>Dark</button>
      </div>
    </div>
  );
};

export default Navbar;
```

### 🔍 Explanation

* Child ke paas **setTheme function** aaya via props
* Button click → `changeTheme()` call hua
* `props.setTheme("dark")` → parent state update
* Parent re-render hua → UI update

---

## 🔥 This Is the “Trick” (Important)

> ❌ Child directly parent ka state change nahi kar sakta
> ✅ Parent apna function child ko deta hai
> ✅ Child us function ko call karta hai

Is trick ko hi hum bolte hain:

* **Child to Parent data flow**
* **Callback via props**
* **Props drilling (basic form)**

---

## 📊 Data Flow Diagram

```
App.jsx (Parent)
 ├── theme state
 ├── setTheme()
 └── passes setTheme as prop
        ↓
Navbar.jsx (Child)
 └── Button click
        ↓
   props.setTheme("dark")
        ↓
App.jsx re-render
```

---

## 💡 Why This Pattern Is Important?

Iska use hota hai jab:

* Button child me ho
* Logic parent me ho
* Shared state manage karna ho

Real-world examples:

* Dark / Light theme toggle
* Modal open/close
* Login / Logout button
* Cart count update
* Form submit from child

---

## 🧠 Key Points to Remember

✅ State always parent me rakho
✅ setState function ko child me bhejo
✅ Child sirf function call kare
❌ Child me state update logic mat rakho
❌ Direct state mutation kabhi nahi

---

## 🧾 Short Summary Table

| Concept      | Meaning                           |
| ------------ | --------------------------------- |
| Parent state | App.jsx                           |
| Child action | Navbar.jsx                        |
| Data flow    | Child → Parent (via function)     |
| Technique    | Callback via props                |
| Name         | Props drilling / Lifting state up |

---

## 🚀 What’s Next?

Ye approach small apps ke liye perfect hai.
Lekin jab props zyada deep ho jaate hain (App → A → B → C):

👉 Props drilling problem aati hai.

---

## 🏁 Final Note

Ye React foundation ka **very strong concept** hai
aur interviews me bhi frequently poocha jaata hai 🔥
