## ⚙️ React Setup Using Vite (Folder & File Structure Explained)

Jab hum React project create karte hain using **Vite**, to Vite ek structure ready bana deta hai jisme sab important folders aur files hoti hain.
Chalo step-by-step samajhte hain har folder aur file ka role kya hai 👇

---

### 📁 Folder Structure Overview

```
my-react-app/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

---

### 📦 `node_modules/`

Ye folder me wo **saari dependencies (libraries)** hoti hain jo hum npm ya yarn se install karte hain.
Basically, ye folder React ko chalane ke liye backend support deta hai.

> ⚠️ **Note:**
> Is folder me **kuch bhi manually edit ya delete** nahi karna hota.
> Ye automatic generate hota hai jab hum `npm install` run karte hain.

---

### 🗂️ `public/` Folder

Is folder me hum apni **static files** rakhte hain — jaise fonts, images, logos, etc.
Ye files directly browser me accessible hoti hain.

**Example:**
`public/logo.png` → accessible as `/logo.png` in browser.

---

### 💻 `src/` Folder

Ye sabse important folder hai jisme hum apna **actual React code** likhte hain.
Iske andar hoti hain hamari main files like `App.jsx`, `main.jsx`, aur sub-folders jaise `components/`, `assets/`, etc.

---

### 🧩 `assets/` Folder (Inside `src/`)

Is folder me hum apne app ke **extra files** rakhte hain jaise images, icons, or local fonts.
Basically ye bhi `public/` jaisa hota hai but ye files **React ke build ke sath bundle** hoti hain.

---

### ⚙️ File Details

#### 🧠 `App.jsx`

* Ye hamari main React component file hoti hai.
* Yahan hum UI likhte hain jo render hota hai browser me.
* Is file ko `main.jsx` ke through connect kiya jata hai.

#### 🚀 `main.jsx`

* Ye entry point file hoti hai.
* Ye `index.html` ke andar React app ko inject karti hai.
* Yahan se React app browser me render hoti hai.

**Example Flow:**

```
index.html → main.jsx → App.jsx
```

#### 🧱 `"<></>"` (Fragments)

Fragments React ke short syntax hote hain —
ye ek container ki tarah kaam karte hain bina extra `<div>` banaye.

```jsx
<>
  <h1>Hello</h1>
  <p>This is a fragment example.</p>
</>
```

---

### ⚒️ `eslint.config.js`

Ye file **code linting** ke liye hoti hai.
ESLint check karta hai ki code sahi likha gaya hai ya nahi (errors, unused vars, etc).
Team projects me ye bahut useful hota hai taaki sabka code ek standard format me ho.

> 📝 Example:
> Agar koi developer semicolon na lagaye (`;`), to ESLint warning ya error de sakta hai.

---

### 🚫 `.gitignore`

Ye file batati hai ki **Git** ko kaunse files ya folders ignore karne chahiye
(jinse related changes hum GitHub pe push nahi karna chahte).

**Example ignored files:**

```
node_modules/
dist/
.env
```

> 🧠 Iska main use hai unnecessary ya heavy files ko GitHub pe upload hone se rokna.

---

### 📦 `package.json`

Ye file project ka **heart** hoti hai.
Isme project ka name, version, dependencies, aur scripts sab defined hote hain.

**Example content:**

```json
{
  "name": "react-app",
  "version": "1.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

---

### 🧩 `package-lock.json`

Ye file automatically generate hoti hai jab hum npm packages install karte hain.
Isme har dependency ka exact version stored hota hai taaki project future me same version se chale.

---

### ⚙️ `vite.config.js`

Ye Vite ka configuration file hai.
Isme hum apne project ke custom settings likhte hain — jaise aliases, plugins, ya build options.

---

### 🧠 Summary

| Folder/File        | Purpose                                |
| ------------------ | -------------------------------------- |
| `node_modules`     | Stores all project dependencies        |
| `public`           | Holds static assets like fonts/logos   |
| `src`              | Contains main app logic and components |
| `assets`           | Stores internal app assets             |
| `App.jsx`          | Main React component                   |
| `main.jsx`         | Entry point connecting to HTML         |
| `.gitignore`       | Defines ignored files for Git          |
| `eslint.config.js` | Helps keep code clean and standard     |
| `package.json`     | Holds project info & dependencies      |
| `vite.config.js`   | Vite tool configuration file           |

---

### ✅ Conclusion

React app ka folder structure samajhna zaroori hai,
kyunki ye hi decide karta hai ki hum code ko organize kaise karenge.
Vite is process ko fast aur simple banata hai taaki hum sirf coding pe focus kar sakein 🚀