# ⚛️ React Hooks — Notes

## ✅ What Are Hooks?

**Hooks** React ke aise special functions hain
jo hume **functional components** ke andar
state, lifecycle methods, aur logic handle karne ki ability dete hain.

➡️ Pehle ye sab features **class components** me milte the
par ab **functional components + hooks** most common approach hai.

> In short:
> Hooks = Functional Component ko powerful banane ka system 🔥

---

## ✅ Why Hooks?

✅ Functional components me state manage karne ke liye
✅ Code reusable & clean banane ke liye
✅ Logic reuse (custom hooks)
✅ No need for class components
✅ Easy to test + read

---

## ✅ Rules of Hooks (Very Important)

1️⃣ Hooks must be called **only at top level**
→ loops, conditions, nested functions ke andar nahi

2️⃣ Hooks must be used **only inside functional components or custom hooks**

✅ Correct:

```jsx
function App() {
  const [count, setCount] = useState(0);
}
```

❌ Wrong:

```jsx
if (true) {
  useState(0);
}
```

---

# 🪝 Common React Hooks

---

## 1️⃣ **useState()**

Component ke andar data (state) store karne ke liye.

### ✅ Example

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
}
```

📝 `useState()` hume **value + setter function** return karta hai.
Jab state change hota hai, component re-render hota hai.

---

## 2️⃣ **useEffect()**

Component lifecycle (mount, update, unmount) ke liye use hota hai.

✅ Side effects ke liye:

* API calls
* event listeners
* timers
* updating document title

### ✅ Example

```jsx
import { useEffect } from "react";

useEffect(() => {
  console.log("Component render/update");
});
```

### ✅ Run only once (on mount)

```jsx
useEffect(() => {
  console.log("Runs once!");
}, []);
```

### ✅ Run when `count` changes

```jsx
useEffect(() => {
  console.log("Count changed!");
}, [count]);
```

### ✅ Clean-up

```jsx
useEffect(() => {
  const timer = setInterval(()=>{},1000);

  return () => clearInterval(timer);
}, []);
```

---

## 3️⃣ **useRef()**

DOM ko directly access karne ke liye
ya mutable value store karne ke liye.

### ✅ Example

```jsx
import { useRef } from "react";

function InputFocus() {
  const inputRef = useRef();

  function focusInput() {
    inputRef.current.focus();
  }

  return (
    <>
      <input ref={inputRef} />
      <button onClick={focusInput}>Focus</button>
    </>
  );
}
```

---

## 4️⃣ **useContext()**

Props drilling avoid karne ke liye
(data ko direct share karna between components)

---

## 5️⃣ **useReducer()**

Complex state logic handle karne ke liye
similar to Redux concept (state + actions)

---

## 6️⃣ **useMemo()**

Expensive calculation ko cache karne ke liye
→ performance optimization

---

## 7️⃣ **useCallback()**

Function ko memorize karne ke liye
→ unnecessary re-render prevent

---

# 🧩 Custom Hooks

Jab kisi logic ki zarurat multiple components me ho
to hum apna khud ka hook bana sakte hain.

✅ Naming must start with **use**
Example: `useFetch()`, `useToggle()`

```jsx
function useCount() {
  const [count, setCount] = useState(0);
  return { count, setCount };
}
```

---

# ✅ Summary Table

| Hook         | Purpose                       |
| ------------ | ----------------------------- |
| useState     | Manage state                  |
| useEffect    | Side effects + lifecycle      |
| useRef       | DOM access / persistent value |
| useContext   | Avoid props drilling          |
| useReducer   | Complex state mgmt            |
| useMemo      | Cache expensive logic         |
| useCallback  | Cache function                |
| Custom Hooks | Reusable logic                |

---

# ✅ When to Use Hooks?

| When                     | Use                   |
| ------------------------ | --------------------- |
| Save data, update UI     | useState              |
| Run code on mount/update | useEffect             |
| DOM access               | useRef                |
| Share global data        | useContext            |
| Large logic              | useReducer            |
| Optimize                 | useMemo / useCallback |

---

# 🏁 Final Notes

✔ Hooks functional components ko powerful banate hain
✔ Class component ki need nahi
✔ Code readable aur short hota hai
✔ Reusable + modular logic