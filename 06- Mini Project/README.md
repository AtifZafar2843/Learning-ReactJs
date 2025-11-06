# 💼 React Job Listing Cards — Mini Project

## 🚀 Overview

Ye mini project ek **Job Listing UI** banata hai jisme alag-alag companies ke job cards dynamically display hote hain.
Har card me **company logo, job post, job type, pay rate, aur location** dikhayi jaati hai.

Is project me humne mainly 3 React concepts use kiye hain:

1. **Components** (Card component banaya)
2. **Props** (Data pass kiya from parent → child)
3. **Array Mapping** (Multiple cards render kiye using `map()`)

---

## 🧱 Folder Structure

```
src/
├── components/
│   └── Card.jsx
├── App.jsx
├── main.jsx
└── index.css
```

---

## ⚙️ Project Explanation

### 1️⃣ App.jsx — Main Component

**Purpose:**
App.jsx ka kaam poore project ko control karna hai.
Yahan humne ek **array of job objects** banaya jisme har company ka data store hai.

```jsx
const jobOpenings = [
  {
    brandLogo: "https://pngimg.com/uploads/meta/meta_PNG12.png",
    companyName: "Meta",
    datePosted: "5 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$65/hour",
    location: "Menlo Park, USA"
  },
  ...
];
```

**Kaam kya hua yahan:**

* Har object ek job opening ko represent karta hai.
* Har card ke liye humne details rakhi hain — jaise company ka naam, pay rate, aur location.
* Phir humne `map()` function se har job ke liye ek **Card component** render kiya.

```jsx
{jobOpenings.map(function(elem){
  return (
    <Card 
      brandLogo={elem.brandLogo}
      company={elem.companyName}
      post={elem.post}
      datePosted={elem.datePosted}
      tag1={elem.tag1}
      tag2={elem.tag2}
      pay={elem.pay}
      location={elem.location}
    />
  );
})}
```

**👉 Key Learning:**

* `map()` use karke dynamically multiple components render karna sikha.
* Har Card ke andar data pass karne ke liye **props** ka use kiya.

---

### 2️⃣ Card.jsx — Reusable Component

**Purpose:**
Card.jsx ek **child component** hai jo ek single job ke liye UI banata hai.
Ye props se data receive karta hai aur UI me show karta hai.

```jsx
function Card(props) {
  return (
    <div className="card">
      <div className="upper">
        <div className="logo">
          <img src={props.brandLogo} alt="company logo" />
        </div>
        <div className="sv-btn">
          <button>Save</button>
          <i className="ri-bookmark-line"></i>
        </div>
      </div>

      <div className="center">
        <div className="center-top">
          <h3>{props.company}</h3><span>{props.datePosted}</span>
        </div>
        <h2>{props.post}</h2>
        <div className="tag">
          <h4>{props.tag1}</h4>
          <h4>{props.tag2}</h4>
        </div>
      </div>

      <div className="bottom">
        <div className="bottom-left">
          <h5>{props.pay}</h5>
          <h6>{props.location}</h6>
        </div>
        <div className="bottom-right">
          <button>Apply Now</button>
        </div>
      </div>
    </div>
  );
}
```

**👉 Key Learning:**

* Props ke through parent se child me data bhejna.
* Ek single Card design karna aur use bar-bar use karna (reusability).
* Icon add karne ke liye `"remixicon"` library ka use kiya.

---

### 3️⃣ Styling (CSS)

Styling ke through humne cards ko attractive aur professional look diya hai.
Har card ek proper **job card layout** jaisa dikhta hai —
Top part me logo aur save button,
Center part me post details,
Bottom part me pay aur location details.

---

## 🧩 Concepts Covered

| Concept     | Description                                   |
| ----------- | --------------------------------------------- |
| Components  | Reusable UI blocks (like Card.jsx)            |
| Props       | Parent (App) → Child (Card) data passing      |
| Array Map   | Multiple items ko render karne ke liye        |
| Dynamic UI  | Data ke basis par components change hote hain |
| CSS Styling | Layout aur design ke liye                     |

---

## 🧠 Project Flow Diagram

```
App.jsx
  ↓
  jobOpenings[] → map() → Card Component (for each job)
                           ↓
                      Displays props data
```

---

## 💡 Output Preview (Conceptually)

```
----------------------------------------
|  [Meta Logo]     Save  🔖             |
|  Meta        •  5 days ago           |
|  Frontend Engineer                   |
|  Full Time   |   Junior Level        |
|  $65/hour     Menlo Park, USA        |
|                [Apply Now]           |
----------------------------------------
```

(Repeated for every job with different data)

---

## 🧠 Learnings from this Project

* React me **data-driven UI** banana sikha
* `props` ke through **data transfer** ka real-world use samjha
* **map() function** ke sath **dynamic rendering** practice ki
* UI ko reusable aur scalable banana seekha