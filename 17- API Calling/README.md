# 🌐 API Calling in React — Notes

## 🚀 What is an API?

API (Application Programming Interface) ek tarah ka **data pipeline** hota hai
jisme server (backend) data send karta hai,
aur frontend (React) us data ko **fetch** karke UI me show karta hai.

Examples:
✔ Random user data
✔ Weather info
✔ Product list
✔ News feed

---

# 🧩 Why We Fetch APIs in React?

React me backend se data lana hota hai:

* Dynamic UI (e.g., Users, Products, Posts)
* Real-world projects ka fundamental part
* async/await + useEffect + useState combo practice hoti hai

---

# ⚙️ API Calling Methods

React me 2 famous methods use hote hain:

| Method      | Description                     |
| ----------- | ------------------------------- |
| **fetch()** | Browser ka built-in API fetcher |
| **axios**   | Extra library, easy syntax      |

---

# 🔄 1️⃣ API Call Using `fetch()`

### Basic Example

```jsx
import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <h1>Users</h1>
      {users.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
    </>
  );
}

export default App;
```

### 🧠 Explanation

* `useEffect()` → API call **sirf initial render** par chalti hai
* `.json()` → response ko JSON me convert karta hai
* `setUsers(data)` → state update karta hai
* UI automatically update ho jati hai

---

# ⚡ 2️⃣ API Call Using Axios

### Install axios

```
npm install axios
```

### Example

```jsx
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(res => setPosts(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <h1>Posts</h1>
      {posts.map(post => (
        <h3 key={post.id}>{post.title}</h3>
      ))}
    </>
  );
}

export default App;
```

### 🧠 Why Axios?

✔ Automatic JSON conversion
✔ Simpler syntax
✔ Better error handling
✔ Works great with async/await

---

# 🔥 Using `async/await` (Best Practice)

### Example with fetch

```jsx
useEffect(() => {
  async function fetchData() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  }
  fetchData();
}, []);
```

### Example with axios

```jsx
useEffect(() => {
  async function loadPosts() {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
    } catch (err) {
      console.log(err);
    }
  }
  loadPosts();
}, []);
```

---

# 💡 Adding Loading & Error States (Very Important)

```jsx
const [data, setData] = useState([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);

useEffect(() => {
  async function getData() {
    setLoading(true);
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const json = await res.json();
      setData(json);
    } catch (err) {
      setError("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  }
  getData();
}, []);
```

### UI

```jsx
if (loading) return <h2>Loading...</h2>;
if (error) return <h2>{error}</h2>;
```

---

# 🧠 Where to Use API Calls?

API calls always:

✔ `useEffect()` me
✔ jab input ya parameter change ho
✔ component render ke baad

> ❌ Never call APIs directly inside component top-level → infinite loops ho jayenge.

---

# 🧪 Common API Based Patterns

### Pagination

Backend se chunks me data lana

### Searching

Query string ke sath API call:

```
/search?q=keyword
```

### Filtering

Category, price, ratings ke according call

### Post Request (Form submit)

Using axios:

```js
axios.post("/api/users", { name, email })
```

---

# 🧩 Difference Between fetch() & axios

| Feature         | fetch() | axios                 |
| --------------- | ------- | --------------------- |
| Built-in?       | Yes     | No (install required) |
| JSON automatic? | ❌ No    | ✔ Yes                 |
| Error handling  | Weak    | Strong                |
| Syntax          | Longer  | Cleaner               |
| Interceptors    | ❌ No    | ✔ Yes                 |
| Upload files    | Hard    | Easy                  |

---

# 🏁 Summary

* React me API calls asynchronous operations hoti hain
* `useEffect()` ka use API load karne ke liye hota hai
* Response data → `useState()` me store hota hai
* Rendering dynamically using `.map()`
* fetch() & axios dono ka use kar sakte ho
* Advanced: loading, error handling, async/await

---

# 🔥 What You Learned

✔ API call (GET)
✔ fetch vs axios
✔ JSON conversion
✔ Data ko UI me map karna
✔ useState + useEffect combo
✔ Clean async/await pattern