# 🖼️ React Gallery Project — Notes

## 🚀 Overview

Ye project ek **Image Gallery App** hai jo:

* `picsum.photos` API se random images fetch karta hai
* `axios` + `useEffect` ka use karke **API calls** karta hai
* `useState` se data aur page number handle karta hai
* **Pagination buttons (Prev / Next)** se pages switch karta hai
* **Loading state** show karta hai jab tak images load nahi ho jaati

UI Tailwind CSS se styled hai, black background ke saath **grid-style gallery** banayi gayi hai.

---

## 🧱 Main Concepts Used

* `useState` → state manage karne ke liye (`userdata`, `index`)
* `useEffect` → jab `index` change ho, tab API call karne ke liye
* `axios.get()` → images fetch karne ke liye
* Conditional rendering → “Loading…” vs images
* Pagination logic → Next / Prev buttons

---

## 📁 Component: `App.jsx`

### 🧠 State Variables

```jsx
const [userdata, setUserData] = useState([]);
const [index, setIndex] = useState(1);
```

* `userdata` → API se aane wali images ki list (array)
* `index` → current page number (1 se start)

---

## 🌐 API Call — `getData` Function

```jsx
const getData = async () => {
  const response = await axios.get(
    `https://picsum.photos/v2/list?page=${index}&limit=10`
  );
  setUserData(response.data);
};
```

* API URL: `https://picsum.photos/v2/list`
* Query params:

  * `page=${index}` → current page
  * `limit=10` → har page par 10 images
* `response.data` me images ka array milta hai → `setUserData` me set kar diya

---

## ⚛️ useEffect — Automatic Data Fetch on Page Change

```jsx
useEffect(
  function () {
    getData();
  },
  [index]
);
```

* `useEffect` tab chalega **jab bhi `index` change hoga**
* Page change hone par API call automatic ho jaati hai
* Initially `index = 1` → page 1 load ho jata hai

✅ Ye perfect pattern hai for **pagination-based API calls**.

---

## ⏳ Loading State Handling

```jsx
let printUserData = (
  <h1 className="text-gray-600 font-bold text-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    Loading...
  </h1>
);

if (userdata.length > 0) {
  printUserData = userdata.map(function (elem, idx) {
    ...
  });
}
```

* Default: `printUserData` = **“Loading…”**
* Jab `userdata` array me data aa jata hai (`length > 0`)
  → `printUserData` ko images list se replace kar dete hain
* Jab `Next`/`Prev` click karte ho, tum manual `setUserData([])` kar rahe ho
  → fir se “Loading…” dikhne lagta hai until new data arrives

✅ Smart trick: loading state without extra `loading` variable.

---

## 🖼️ Image Card Rendering

```jsx
printUserData = userdata.map(function (elem, idx) {
  return (
    <div key={idx}>
      <a href={elem.url} target="_blank">
        <div className="h-50 w-50 overflow-hidden bg-red-400 rounded-2xl">
          <img
            className="h-full w-full object-cover"
            src={elem.download_url}
          />
        </div>
        <h1 className="font-bold text-white">{elem.author}</h1>
      </a>
    </div>
  );
});
```

Har image ke liye:

* `<a>` tag → full image page pe le jata hai (`elem.url`)
* `<img>` → API se `download_url` use karke thumbnail display
* Author ka naam niche show ho raha hai

✅ `target="_blank"` se new tab me image page open hota hai.

---

## 🔁 Pagination Logic (Prev / Next Buttons)

```jsx
<button
  onClick={() => {
    if (index > 1) {
      setIndex(index - 1);
    }
    setUserData([]);
  }}
>
  Prev
</button>
...
<h2 className="text-white">page {index}</h2>
...
<button
  onClick={() => {
    if (index < 10) {
      setIndex(index + 1);
    }
    setUserData([]);
  }}
>
  Next
</button>
```

* `Prev`:

  * Agar `index > 1` hai tabhi decrement karega
  * `setIndex(index - 1)` → page peeche
* `Next`:

  * Agar `index < 10` hai tabhi increment karega
  * `setIndex(index + 1)` → page aage
* `setUserData([])` → jaisi hi click hota hai, data clear → “Loading…” show hota hai

✅ Simple & effective pagination.

---

## 🎨 Layout & Styling (Tailwind CSS)

```jsx
<div className="p-4 overflow-auto h-screen bg-black">
  <div className="flex h-[90%] flex-wrap gap-4 items-center justify-center">
    {printUserData}
  </div>
  <div className="flex items-center justify-center gap-6">
    {/* Prev, index, Next */}
  </div>
</div>
```

* Full page black background (`bg-black`)
* Gallery center aligned, `flex-wrap` + `gap-4` se cards grid jaisa dikhte hain
* Pagination controls bottom center me

---

## 🔍 What You Practiced / Learned in This Project

* ✅ `useState` + `useEffect` combo with **dependencies**
* ✅ API calling with **axios + async/await**
* ✅ Paginated API handling using `page` param
* ✅ Conditional rendering for **loading state**
* ✅ Dynamic list rendering `.map()` ke through
* ✅ Good UI layout using Tailwind CSS

Ye sab real-world React apps me use hote hain (gallery, product list, feed, etc.)

---

## 🧠 Summary

Ye Gallery Project:

* API + pagination ka solid example hai
* useEffect ke dependency array ka real use dikhata hai
* Loading UX handle karta hai
* Tailwind + React ka combo practice karata hai

Isko as a **portfolio mini-project** bhi easily use kar sakte ho 💼