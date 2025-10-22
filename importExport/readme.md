## 📘 Import and Export in ReactJS (or JavaScript)

Hello!
Aaj hum seekhne wale hain **Import** aur **Export** ke bare mein.
Jab hum ReactJS ya JavaScript mein code ko alag–alag files mein likhte hain,
to humein un files ko ek–dusre se connect karne ke liye **Import** aur **Export** ka use karna padta hai.


### 🔹 Why We Use Import & Export

Jab hum chahte hain ki ek file ka code (variable, function, class, ya component)
dusri file mein use kar sakein — tab hum **Export** karte hain (send karne ke liye)
aur **Import** karte hain (receive karne ke liye).


### 🔸 Types of Export

1. **Named Export**
2. **Default Export**


### 🟢 Named Export

Named export tab use hota hai jab hum **multiple values export** karna chahte hain,
aur unke specific names ke sath unhe import bhi karna hota hai.


#### 📄 Example (export file)

```js
// student.js
export const name = "Atif";
export const age = 22;
export function enrollNum() {
  return "R-1023";
}
```

#### 📄 Example (import file)

```js
// app.js
import { name, age, enrollNum } from "./student.js";

console.log(name, age, enrollNum());
```

> 📝 **Note:**
> Curly braces `{}` ka use zaroori hai kyunki ye batata hai ki hum named values import kar rahe hain.
> Agar name galat likha, to error milta hai.

---

### 🟣 Default Export

Default export tab use hota hai jab hum ek file se **sirf ek hi value** export karna chahte hain.
Isme curly braces ka use nahi hota.

#### 📄 Example (export file)

```js
// message.js
export default function greet() {
  return "Hello from Default Export!";
}
```

#### 📄 Example (import file)

```js
// app.js
import greet from "./message.js";

console.log(greet());
```

> 📝 **Note:**
> Default export ke time hum import karte hue **koi bhi naam** de sakte hain —
> kyunki wo file ka default export automatically le aata hai.

---

### 🧩 Mix Example (Named + Default together)

```js
// utils.js
export const sum = (a, b) => a + b;
export const diff = (a, b) => a - b;
export default function multiply(a, b) {
  return a * b;
}
```

```js
// app.js
import multiply, { sum, diff } from "./utils.js";

console.log(sum(3, 4));      // 7
console.log(diff(8, 2));     // 6
console.log(multiply(2, 5)); // 10
```

---

### 💡 Key Takeaways

* `Named Export` → multiple values ke liye hota hai, `{}` lagta hai.
* `Default Export` → ek hi value ke liye hota hai, `{}` nahi lagta.
* Import karte time correct file path aur extension (`.js`, `.jsx`) ka dhyaan rakho.
* React components mostly **default export** hote hain.

---

### 🧠 Practice Tip

Try creating a small example with 2 files —
ek file mein function export karo aur doosri file mein usko import karke browser console me print karo.