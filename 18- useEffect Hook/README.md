# ⚛️ `useEffect` Hook — Detailed Notes

## 🚀 What is `useEffect`?

`useEffect` React ka **side-effect hook** hai.
Side-effects ka matlab wo kaam jo **direct UI render se related nahi hote**, jaise:

* API calls
* Browser events (scroll, resize)
* Timers (setTimeout, setInterval)
* LocalStorage operations
* DOM manipulation
* Subscriptions / listeners add & remove

> **In short:**
> `useEffect` = “Component ke render hone ke baad kuch extra kaam karna”.

---

# 🔧 Syntax

```jsx
useEffect(() => {
  // your side-effect logic here
}, [dependencies]);
```

* **Callback** → effect function
* **Dependency Array** → kab effect chalega

---

# 🔥 Three Main Behaviors of useEffect

## 1️⃣ **Runs on every render** (No dependency array)

```jsx
useEffect(() => {
  console.log("Runs after every render!");
});
```

* Initial render ✔
* State update ✔
* Props change ✔
* Re-renders ✔

---

## 2️⃣ **Runs only on first render** (Empty dependency array)

```jsx
useEffect(() => {
  console.log("Runs only once — like componentDidMount");
}, []);
```

Useful for:

✔ API calls
✔ LocalStorage se initial data get karna
✔ One-time setup

---

## 3️⃣ **Runs when specific value changes** (Dependency array with values)

```jsx
useEffect(() => {
  console.log("Runs when count changes");
}, [count]);
```

Useful for:

✔ Search filters
✔ Fetch data when ID changes
✔ Update UI based on selected value

---

# 🧩 Real Examples

---

## 🟦 Example 1 — API Calling (Most Common)

```jsx
useEffect(() => {
  async function loadData() {
    const res = await fetch("https://api.example.com/users");
    const data = await res.json();
    setUsers(data);
  }

  loadData();
}, []);
```

✔ Runs *only once*
✔ Good for initial data fetch

---

## 🟩 Example 2 — Counter ke saath Side Effect

```jsx
useEffect(() => {
  document.title = `Count is ${count}`;
}, [count]);
```

✔ Page title update hoga **jab count change hoga**

---

## 🟧 Example 3 — Cleanup Function

Jab component unmount ho ya dependency change ho,
React cleanup function run karta hai.

```jsx
useEffect(() => {
  const timer = setInterval(() => {
    console.log("Running...");
  }, 1000);

  return () => {
    clearInterval(timer); // cleanup
  };
}, []);
```

Cleanup is used for:

* Stop timers
* Remove event listeners
* Unsubscribe services

---

# 🧠 Why Cleanup is Important?

> Agar cleanup na karein to
> ❌ memory leak hoti hai
> ❌ multiple timers lag jaate hain
> ❌ unnecessary listeners active rehte hain

That’s why cleanup is **very important**.

---

# 🟪 Example 4 — Tracking Scroll Position

```jsx
useEffect(() => {
  function handleScroll() {
    setScrollY(window.scrollY);
  }

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);
```

---

# 🟨 Example 5 — Listening to Resizing

```jsx
useEffect(() => {
  const cb = () => setWidth(window.innerWidth);
  window.addEventListener("resize", cb);

  return () => window.removeEventListener("resize", cb);
}, []);
```

---

# 🔥 Dependency Array Deep Explanation

### 1️⃣ Empty → run once

```jsx
useEffect(() => {}, []);
```

### 2️⃣ With dependencies → run when variables change

```jsx
useEffect(() => {}, [x, y]);
```

### 3️⃣ No array → run after every render

```jsx
useEffect(() => {});
```

---

# 🧠 Common Mistakes & Fixes

### ❌ Mistake: Infinite Loop

```jsx
useEffect(() => {
  setCount(count + 1);
});
```

✔ Because state update causes re-render → useEffect runs again → loop

### ✅ Fix:

Use dependency array:

```jsx
useEffect(() => {
  setCount(count + 1);
}, []);
```

---

# ⚡ Best Practices

### ✔ Always put variables used in effect inside dependency array

### ✔ Never update state directly inside an effect without dependency

### ✔ Cleanup timers and listeners

### ✔ For API calls, use async function inside effect

### ✔ Keep effects pure — no unnecessary logic

---

# 🧨 When NOT to use useEffect

❌ Derived state
(Example: `count * 2` ko state me rakhne ki zaroorat nahi hoti)

❌ Logic jo normal rendering me ho sakta hai
(Example: sorting arrays before `map()`)

---

# 🧾 Summary Table

| Behavior      | Syntax                   | Runs                                 |
| ------------- | ------------------------ | ------------------------------------ |
| No deps       | `useEffect(()=>{})`      | every render                         |
| Empty deps    | `useEffect(()=>{}, [])`  | once                                 |
| Specific deps | `useEffect(()=>{}, [x])` | when `x` changes                     |
| Cleanup       | `return () => {}`        | before unmount or before next effect |

---

# 🧩 useEffect + useState → Real Power Combo

React me API calling, timers, localStorage — sab is combo se hota hai:

```jsx
const [data, setData] = useState([]);

useEffect(() => {
  fetchData();
}, []);
```

✔ Perfect pattern
✔ React ka sabse important concept

---

# 🏁 Final Summary

* `useEffect` side effects ke liye use hota hai
* 3 main modes: no deps, empty deps, with deps
* Cleanup important hai
* API calls + event listeners + intervals
* useState + useEffect combo = powerful