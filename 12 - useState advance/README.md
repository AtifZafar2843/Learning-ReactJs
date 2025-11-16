# ⚛️ Advanced `useState` — React Hook Notes

---

## 🚀 Overview

`useState` simple lagta hai,
lekin jab hum arrays, objects, aur previous state logic ke sath kaam karte hain,
tab hi iska **real power** samajh me aata hai 💥

---

## 🧠 Recap: Basic Syntax

```jsx
const [state, setState] = useState(initialValue);
```

---

## ⚙️ 1️⃣ Updating State Based on Previous Value

Jab naya state **purane state ke upar depend karta hai**,
to direct update karna **galat ho sakta hai**,
kyunki React state updates ko **batch** karta hai (asynchronous hota hai).

### ❌ Wrong Way

```jsx
setNum(num + 1);
setNum(num + 1);
```

→ Ye dono ek hi purani value pe chalenge.

### ✅ Correct Way

```jsx
setNum(prev => prev + 1);
setNum(prev => prev + 1);
```

→ Ye har baar updated value lega.
**Always use functional updates when dependent on previous state.**

---

## ⚙️ 2️⃣ Storing Objects in State

React me hum `useState()` me **object** bhi store kar sakte hain.
Lekin update karte waqt **purani properties** overwrite na ho, iska dhyaan rakhna padta hai.

### Example

```jsx
const [user, setUser] = useState({
  name: "Atif",
  age: 21,
  country: "India"
});
```

### ❌ Wrong Update

```jsx
setUser({ age: 22 }); // other fields lost!
```

### ✅ Correct Update

```jsx
setUser(prev => ({ ...prev, age: 22 }));
```

🧠 Explanation:

* `{ ...prev }` → purani properties copy
* `age: 22` → sirf ek property update

---

## ⚙️ 3️⃣ Storing Arrays in State

`useState` me arrays store karna common hai (lists, todos, products, etc.)
Lekin arrays **immutable** treat karne chahiye.

### Example

```jsx
const [todos, setTodos] = useState(["React", "JavaScript"]);
```

### ✅ Add item

```jsx
setTodos(prev => [...prev, "Next.js"]);
```

### ✅ Remove item

```jsx
setTodos(prev => prev.filter(item => item !== "React"));
```

### ✅ Update item

```jsx
setTodos(prev =>
  prev.map(item => (item === "React" ? "ReactJS" : item))
);
```

---

## ⚙️ 4️⃣ Initial State with Function (Performance Tip)

Agar initial value **heavy calculation** se aati hai
(toh directly calculate karne se performance down ho sakti hai).
Isliye hum function pass karte hain — taaki ye **sirf once** chale.

### Example

```jsx
function expensiveCalculation() {
  console.log("Running only once");
  return 100;
}

const [count, setCount] = useState(() => expensiveCalculation());
```

> ⚡ Note: Function ke andar call karne se React usse sirf initial render pe hi run karega.

---

## ⚙️ 5️⃣ Multiple States in One Component

Ek component me hum multiple `useState` hooks use kar sakte hain
(alag–alag values ke liye).

### Example

```jsx
const [count, setCount] = useState(0);
const [theme, setTheme] = useState("light");
const [user, setUser] = useState({ name: "Atif", loggedIn: false });
```

⚡ Advantage → Code modular aur organized rehta hai.

---

## ⚙️ 6️⃣ Nested Objects or Deep Updates

React shallow comparison karta hai,
isliye nested data update karte waqt **spread operator** ka use karo.

### Example

```jsx
const [user, setUser] = useState({
  name: "Atif",
  address: { city: "Delhi", pin: 110001 }
});
```

✅ Correct update:

```jsx
setUser(prev => ({
  ...prev,
  address: { ...prev.address, city: "Lucknow" }
}));
```

---

## ⚙️ 7️⃣ Resetting State

Kabhi–kabhi tumhe state ko initial value pe reset karna padta hai.

```jsx
const [count, setCount] = useState(10);

function resetCount() {
  setCount(10); // back to initial
}
```

---

## ⚙️ 8️⃣ State Asynchronous Nature (Important)

React updates asynchronously perform karta hai.
Isliye agar tum state ke immediately baad console.log() lagate ho
to purani value dikhegi 👇

```jsx
setNum(num + 1);
console.log(num); // old value
```

✅ Solution:
Use `useEffect()` to check updates

```jsx
useEffect(() => {
  console.log(num);
}, [num]);
```

---

## ⚙️ 9️⃣ Conditional State Updates

State updates ko kabhi condition ke saath bhi control kar sakte ho:

```jsx
function increment() {
  setCount(prev => (prev < 10 ? prev + 1 : prev));
}
```

---

## ⚙️ 🔟 Managing Complex UI State

Jab UI me bohot saare state variables ho jaate hain,
to unhe ek object me store karke manage karna easy hota hai.

```jsx
const [form, setForm] = useState({
  name: "",
  email: "",
  password: ""
});

function handleChange(e) {
  setForm(prev => ({
    ...prev,
    [e.target.name]: e.target.value
  }));
}
```

---

## 💡 Real-Life Examples

| Use Case        | useState Logic                |
| --------------- | ----------------------------- |
| Counter         | Simple numeric update         |
| Form Handling   | Object-based updates          |
| Todo List       | Array handling                |
| Modal Show/Hide | Boolean toggle                |
| Tabs            | State + conditional rendering |
| Theme Switch    | String state (“light/dark”)   |

---

## ⚡ Pro Tips

✔ Always use `prev => ...` when updating based on previous state
✔ Never mutate state directly
✔ Use functional updates for safety
✔ Keep state minimal – only what’s needed for UI
✔ Don’t overuse state (sometimes props or derived values enough)

---

## 🧩 Summary Table

| Concept           | Example                                     |
| ----------------- | ------------------------------------------- |
| Basic state       | `const [x, setX] = useState(0)`             |
| Object state      | `useState({name: "", age: 0})`              |
| Array state       | `useState([])`                              |
| Functional update | `setX(prev => prev + 1)`                    |
| Nested update     | `setUser(prev => ({...prev, key: newVal}))` |
| Initial function  | `useState(() => initValue())`               |

---

## 🏁 Key Takeaways

✅ `useState` asynchronous hota hai
✅ `setState` se component re-render hota hai
✅ Arrays & Objects update karte waqt immutable approach use karo
✅ Functional updates are safer
✅ Performance ke liye lazy initialization karo