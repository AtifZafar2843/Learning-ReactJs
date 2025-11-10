# ⚛️ `useState` — React Hook Notes

## ✅ What is `useState`?

`useState` React ka **sabse basic aur important hook** hai.
Iska use hum component ke andar **state (data) store & update** karne ke liye karte hain.

> ⚡ In short:
> UI me jo cheez change hoti hai → woh **state** hoti hai.

Example:
✅ Counter
✅ Toggle button
✅ Form inputs
✅ Show/Hide sections

---

## ✅ Syntax

```jsx
const [state, setState] = useState(initialValue);
```

| Part           | Meaning                 |
| -------------- | ----------------------- |
| `state`        | Current value           |
| `setState`     | Function → state update |
| `initialValue` | Starting value          |

---

## ✅ Mini Project – Simple Counter (From Your Code)

Tumne ek simple counter project banaya hai jisme:
✔ Increase
✔ Decrease
✔ Jump by 5

Ye perfect example hai `useState` ka basic use samajhne ke liye ✅

### 📄 Code Breakdown

```jsx
import { useState } from "react";

function App() {
  const [num, setNum] = useState(10);
```

🔹 `num` → current value
🔹 `setNum` → value update function
🔹 `10` → initial state

---

### ✅ Update Functions

```jsx
function incraseNum(){
    setNum(num + 1)
}

function decreaseNum(){
    setNum(num - 1)
}

function jump5Num(){
    setNum(num + 5)
}
```

✔ `setNum()` se value update hoti hai
✔ Har update ke baad component re–render hota hai

---

### ✅ UI Rendering

```jsx
return (
  <>
    <h1>{num}</h1>

    <button onClick={incraseNum}>Increase</button>
    <button onClick={decreaseNum}>Decrease</button>
    <button onClick={jump5Num}>Jump by 5</button>
  </>
);
```

UI → component ke andar value display ho rahi hai
Aur buttons update kar rahe hain

---

## ✅ Important Points

### 🔹 1. Updating state causes re-render

Jab `setNum()` chalega →
component dubara run hoga & UI update hogi

---

### 🔹 2. `setState()` is asynchronous

Yaani, update immediately reflect nahi karti →
React batching ke through perform karta hai

---

### 🔹 3. Always use `setState()`

❌ `num = num + 1`
Correct ✅ `setNum(num + 1)`

---

### 🔹 4. Multiple updates based on previous value

Agar update previous value ke basis par ho →
functional update use karo ✅

```jsx
setNum(prev => prev + 1);
```

This is safer.

---

## ✅ When to use useState?

❗ Jab UI me koi data change karna ho
Example:

* Counter
* Form handling
* Tabs switching
* Show/Hide element
* Theme toggle

---

## ✅ Best Practices

✔ Start with proper initial value
✔ Use functional updates when relying on previous value
✔ Hooks top-level par call karo
❌ Loops / Condition ke andar hooks mat call karo

---

## ✅ Example with Functional Update (important!)

```jsx
setNum(prev => prev + 1);
```

✅ Useful when updating many times
✅ Correct value milegi

---

## ✅ Summary Table

| Topic              | Meaning              |
| ------------------ | -------------------- |
| `useState()`       | Hook to manage state |
| `state`            | Current data         |
| `setState()`       | Update function      |
| Update → Re-render | Yes                  |
| Async?             | Yes                  |
| Initial value      | Required             |

---

# ✅ What You Learned So Far

✔ State kaise banate hain
✔ setState ka use
✔ Button + event se state update
✔ UI re-render
✔ Functional component with state

Ye React ke sabse basic & most used concept hai.
Aage tum **Advance useState** me jaoge to ye base bahut kaam aayega ✅

---

# ✅ Next: Advance `useState` (Coming Next Folder)

In next level you should learn:

✅ Updating state based on previous
✅ Storing objects & arrays in state
✅ Updating nested values
✅ Multiple states
✅ Patterns to avoid