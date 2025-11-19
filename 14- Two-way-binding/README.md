# 🔄 Two-Way Binding in React — Notes

---

## 🚀 Overview

**Two–Way Binding** ka matlab hai:

> **Input field → State update kare**
> **State → UI update kare (back to input)**

Matlab:
User input change kare → State update hoti hai
State update ho → Input field automatically change ho jaata hai

React me ye possible hota hai because of:

✔ `value` attribute
✔ `onChange` event
✔ `useState()` hook

Isliye React me har input ko “**Controlled Component**” kaha jaata hai.

---

# ⭐ Two-Way Binding — Easy Explanation (As You Wanted)

Socho tumhare paas ek **bucket (state)** aur ek **pipe (input)** hai.

* Jab tum bucket me paani daalte ho → pipe ke through input me paani dikhta hai
  (state → UI)

* Aur jab tum pipe se paani nikalte ho → bucket ki quantity change ho jaati hai
  (UI → state)

Dono **ek-dusre ko update karte rehte hain** 😄
Yahi hai two-way binding!

React me yeh hota hai:

```
Input → onChange → setState()
AND
State → value={} → Input ko update karta hai
```

---

# 🔧 Basic Two-Way Binding Example

```jsx
import { useState } from "react";

function App() {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <div>
      <input 
        type="text" 
        value={text} 
        onChange={handleChange} 
        placeholder="Type something..."
      />

      <h2>You typed: {text}</h2>
    </div>
  );
}

export default App;
```

### ✔ Breakdown

* `value={text}` → State input me dikh rahi hai
* `onChange` → State ko update kar raha hai
* State change → UI instant update

Yahi two-way binding ka concept hai.

---

# 🔄 Two-Way Binding with Multiple Fields

```jsx
const [form, setForm] = useState({
  name: "",
  email: ""
});

function handleChange(e) {
  const { name, value } = e.target;
  setForm(prev => ({ ...prev, [name]: value }));
}

return (
  <>
    <input name="name" value={form.name} onChange={handleChange} />
    <input name="email" value={form.email} onChange={handleChange} />
  </>
);
```

### 🔥 Benefits:

* Inputs aur state hamesha sync me rehte hain
* UI automated update hota hai
* Form handling bohot easy ho jaati hai

---

# ✔ Two-Way Binding with Checkbox

```jsx
const [subscribe, setSubscribe] = useState(false);

<input 
  type="checkbox" 
  checked={subscribe}
  onChange={(e) => setSubscribe(e.target.checked)}
/>
```

Here:
`checked` = state
`onChange` = update state

---

# ✔ Two-Way Binding with Select Dropdown

```jsx
const [country, setCountry] = useState("");

<select value={country} onChange={(e) => setCountry(e.target.value)}>
  <option value="">Select Country</option>
  <option value="India">India</option>
  <option value="USA">USA</option>
</select>
```

---

# 🧠 Why Two-Way Binding Is Important?

| Reason            | Explanation                                       |
| ----------------- | ------------------------------------------------- |
| Real-time updates | User jo type kare, woh turant UI me reflect ho    |
| Form handling     | Signup, Login forms easy bante hain               |
| Validation        | Input ke sath hi error messages show kar sakte ho |
| Dynamic UI        | Search filters, live text preview, etc.           |

---

# 🏁 Summary (Short & Sweet)

* React me two-way binding → **Input ↔ State ↔ UI**
* Input me value aayegi **state se**
* Input ka change jayega **state me**
* `value` + `onChange` + `useState()` → 3 cheeze milkar two-way binding banati hain
* Saare inputs (text, checkbox, select) ko easily control kar sakte ho