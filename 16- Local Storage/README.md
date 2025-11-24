# 📦 Local Storage in JavaScript — Notes

## 🚀 What is Local Storage?

Local Storage browser ki ek storage space hoti hai jisme hum **data permanently save** kar sakte hain.
Iska data browser close karne ke baad bhi rehta hai (until delete manually).

* Size limit ~5MB
* Key–value pairs me data store hota hai
* Only **string** accept karta hai (important!)

---

# 📌 Basic Methods (VERY IMPORTANT)

| Method                      | Description         |
| --------------------------- | ------------------- |
| `localStorage.setItem()`    | Store data          |
| `localStorage.getItem()`    | Retrieve data       |
| `localStorage.removeItem()` | Delete specific key |
| `localStorage.clear()`      | Delete all keys     |

---

## 1️⃣ `setItem()` — Save Data

```js
localStorage.setItem("username", "Atif");
```

✔ Key → `"username"`
✔ Value → `"Atif"`

---

## 2️⃣ `getItem()` — Read Data

```js
const user = localStorage.getItem("username");
console.log(user); // "Atif"
```

Agar key exist na ho → output `null` milta hai.

---

## 3️⃣ `removeItem()` — Delete a Single Key

```js
localStorage.removeItem("username");
```

Ye sirf `"username"` key ko delete karega.

---

## 4️⃣ `clear()` — Delete All Local Storage Data

```js
localStorage.clear();
```

⚠️ **Warning:**
Local storage ke saare keys remove ho jayenge.

---

# 🔥 Storing Objects & Arrays (Most Important Part)

Local Storage **sirf string** store karta hai.
Isliye object ya array ko store karne ke liye hume **JSON** use karna padta hai.

---

## 5️⃣ Store Object using JSON

### ❌ Wrong (Error)

```js
localStorage.setItem("user", {name:"Atif"});
```

> ❌ Object ko directly store nahi kar sakte.

---

### ✅ Correct Way

```js
const user = { name: "Atif", age: 21 };

localStorage.setItem("user", JSON.stringify(user));
```

---

## 6️⃣ Get Object from Local Storage

```js
const data = localStorage.getItem("user");
const userObj = JSON.parse(data);

console.log(userObj.name); // "Atif"
```

✔ `JSON.stringify()` → convert object → string
✔ `JSON.parse()` → convert string → object

---

## 7️⃣ Store Array in Local Storage

```js
const tasks = ["Learn React", "Learn JS", "Build Projects"];

localStorage.setItem("tasks", JSON.stringify(tasks));
```

---

## 8️⃣ Get Array

```js
const tasks = JSON.parse(localStorage.getItem("tasks"));
console.log(tasks[0]); // "Learn React"
```

---

# 🧩 Updating an Array (Common Use Case)

```js
const oldTasks = JSON.parse(localStorage.getItem("tasks")) || [];

oldTasks.push("New Task");

localStorage.setItem("tasks", JSON.stringify(oldTasks));
```

✔ This pattern is used in Notes App, Todo App, Cart system etc.

---

# 🧪 Example: Notes App with Local Storage

```js
useEffect(() => {
  localStorage.setItem("notes", JSON.stringify(task));
}, [task]);

useEffect(() => {
  const saved = JSON.parse(localStorage.getItem("notes")) || [];
  setTask(saved);
}, []);
```

✔ Save notes automatically when `task` changes
✔ Load notes when app opens

---

# 🧠 Key Points Summary

* Local Storage **string** type hota hai
* Object/Array store karne ke liye **JSON.stringify()** mandatory
* Get karte waqt **JSON.parse()**
* `setItem`, `getItem`, `removeItem`, `clear()` basic core methods
* Good for:

  * Notes App
  * Todo App
  * Theme save
  * Cart items
  * Form data save

---

# ⚡ Best Practices

✔ Always wrap JSON.parse inside fallback (`|| []` or `{}`)
✔ Use meaningful key names
✔ Don’t store sensitive data (passwords)
✔ Use try/catch when parsing JSON
✔ Clear outdated data

Example:

```js
const data = JSON.parse(localStorage.getItem("user") || "{}");
```

---

# 🏁 Final Summary

Local Storage browser me data permanently save karne ka simplest way hai.
React + Local Storage = Perfect combo for small apps.