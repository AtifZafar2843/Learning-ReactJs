# 🧾 Form Handling in React

---

## 🚀 Overview

React me **form handling** ka matlab hai:
➡️ user ke input ko lena,
➡️ us input ko component ke state me store karna,
➡️ aur jab form submit ho, tab use process karna.

React me har input field (like `<input>`, `<textarea>`, `<select>`) ek **controlled component** banta hai —
jiska value React ke **state** ke through control hota hai.

---

## ⚙️ Basic Example — Single Input

```jsx
import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Hello ${name}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={handleChange} placeholder="Enter your name" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
```

### 💡 Explanation

* `value={name}` → React controls input field
* `onChange` → updates state on every keystroke
* `onSubmit` → form submit hone pe trigger hota hai

---

## ⚙️ Handling Multiple Inputs

Form me aksar multiple fields hote hain (name, email, password etc.).
Us case me hum ek **object state** use karte hain.

### ✅ Example

```jsx
import { useState } from "react";

function SignupForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
      <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
      <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
      <button type="submit">Register</button>
    </form>
  );
}

export default SignupForm;
```

### 🧠 Explanation

* `name` attribute input ka unique identifier hai
* `[name]: value` → dynamic key update hota hai
* `...prev` → purane data ko preserve karta hai

---

## ⚙️ Controlled vs Uncontrolled Components

| Type         | Description                                    | Example         |
| ------------ | ---------------------------------------------- | --------------- |
| Controlled   | Input value React ke state se control hoti hai | `value={state}` |
| Uncontrolled | Input value DOM ke through control hoti hai    | `ref` ke saath  |

👉 React apps me mostly **controlled inputs** use kiye jaate hain.

---

## ⚙️ Form Submission Handling

Form submit hone par page reload hota hai by default.
Isliye hamesha `e.preventDefault()` lagao.

```jsx
function handleSubmit(e) {
  e.preventDefault();
  // your code here
}
```

---

## ⚙️ Resetting Form

Form submit hone ke baad inputs clear karne ke liye simply state reset kar do.

```jsx
setFormData({ name: "", email: "", password: "" });
```

---

## ⚙️ Checkbox and Radio Inputs

### ✅ Checkbox Example

```jsx
<input
  type="checkbox"
  name="subscribe"
  checked={formData.subscribe}
  onChange={(e) =>
    setFormData({ ...formData, subscribe: e.target.checked })
  }
/>
```

### ✅ Radio Example

```jsx
<input
  type="radio"
  name="gender"
  value="male"
  checked={formData.gender === "male"}
  onChange={handleChange}
/>
```

---

## ⚙️ Dropdown Example

```jsx
<select name="country" value={formData.country} onChange={handleChange}>
  <option value="">Select</option>
  <option value="India">India</option>
  <option value="USA">USA</option>
</select>
```

---

## 🧠 Key Takeaways

✅ React me input fields **controlled components** hote hain
✅ `value` attribute se state aur input sync me rehte hain
✅ `onChange` se input updates handle karte hain
✅ `e.preventDefault()` lagana zaroori hai form submission pe
✅ Multiple fields ke liye ek object state best practice hai

---

## 🏁 Summary Table

| Concept              | Description                           |
| -------------------- | ------------------------------------- |
| Controlled Input     | Input value controlled by React state |
| onChange             | Updates state on user input           |
| onSubmit             | Handles form submission               |
| e.preventDefault()   | Stops page reload                     |
| Reset form           | Set state to empty values             |
| Dynamic input update | `[name]: value` syntax                |