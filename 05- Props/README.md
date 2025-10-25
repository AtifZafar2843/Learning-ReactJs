## ⚛️ React Props (Properties)

### 🧠 Basic Idea:

**Props** ka full form hota hai **Properties**.
React me props ka use **parent component se child component** me **data pass** karne ke liye hota hai.

👉 Simple words me:
Props = Function ke parameters jaisa hi concept hai.

---

### 🔹 Example Without Props

```jsx
function Welcome() {
  return <h1>Hello, Atif!</h1>;
}

export default Welcome;
```

Yahan par text “Atif” **hardcoded** hai — agar hum chahen ki naam dynamic aaye,
to hume props use karne padenge.

---

### 🔹 Example With Props

```jsx
// Child Component
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

export default Welcome;
```

```jsx
// Parent Component
import Welcome from "./Welcome";

function App() {
  return (
    <>
      <Welcome name="Atif" />
      <Welcome name="Zafar" />
      <Welcome name="React Learner" />
    </>
  );
}

export default App;
```

#### 🧩 Output:

```
Hello, Atif!
Hello, Zafar!
Hello, React Learner!
```

💡 **Explanation:**

* Parent component (`App`) ne `Welcome` component ko `name` prop diya.
* Child component (`Welcome`) ne us prop ko receive karke `{props.name}` me use kar liya.
* Har call me different value pass hui, isliye output dynamic bana!

---

### 🧠 Props = Parameters of Components

Agar hum compare karein:

```js
function add(a, b) {
  return a + b;
}
```

Aur

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

👉 Dono me ek hi pattern hai —
`a, b` ya `props` — dono input data receive karte hain.

---

### 🔹 Destructuring Props

Props ko directly object ke form me access karne ke bajaye
hum destructuring use karte hain (zyada clean syntax ke liye).

#### 📄 Example:

```jsx
function Welcome({ name, age }) {
  return (
    <h2>
      Hello {name}, you are {age} years old!
    </h2>
  );
}

export default Welcome;
```

```jsx
// App.jsx
import Welcome from "./Welcome";

function App() {
  return (
    <>
      <Welcome name="Atif" age="21" />
      <Welcome name="Zoya" age="19" />
    </>
  );
}

export default App;
```

#### 🧩 Output:

```
Hello Atif, you are 21 years old!
Hello Zoya, you are 19 years old!
```

---

### 🧩 Props Are **Read-Only**

Props ko **change nahi** kar sakte.
Agar hum kisi component me prop ki value modify karne ki koshish karein,
React error de dega.

#### ❌ Example (wrong):

```jsx
function Welcome(props) {
  props.name = "Changed"; // ❌ Not allowed
  return <h1>Hello {props.name}</h1>;
}
```

👉 React me props immutable (not changeable) hote hain.
Agar data change karna hai, to **state** use karte hain (state hum next topic me seekhenge).

---

### 🧱 Passing Multiple Props

Ek component me ek se zyada props bhi pass kar sakte ho:

```jsx
function Card({ title, description }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default Card;
```

```jsx
// App.jsx
import Card from "./Card";

function App() {
  return (
    <>
      <Card title="React Props" description="Props are used to pass data between components." />
      <Card title="React Components" description="Components are reusable UI blocks." />
    </>
  );
}
```

---

### 🧠 Props Flow Direction

React me **data always top-to-bottom (parent → child)** flow karta hai.
Isko **unidirectional data flow** kehte hain.

📊 **Diagram:**

```
App (Parent)
 ├── Welcome (Child)
 ├── Card (Child)
 └── Footer (Child)
```

---

### 🧩 Props with Functions

Props me hum function bhi bhej sakte hain —
jisse child component parent ko notify kar sakta hai (callback concept).

```jsx
function Button({ onClick }) {
  return <button onClick={onClick}>Click Me!</button>;
}

function App() {
  function handleClick() {
    alert("Button clicked!");
  }

  return <Button onClick={handleClick} />;
}
```

---

### 🏁 Summary

| Concept | Description                                        |
| ------- | -------------------------------------------------- |
| Props   | Data pass karne ka system hai (Parent → Child)     |
| Syntax  | `<Component propName="value" />`                   |
| Access  | `props.propName` ya `{ propName }` (destructuring) |
| Nature  | Read-only                                          |
| Flow    | One-way (Top → Bottom)                             |