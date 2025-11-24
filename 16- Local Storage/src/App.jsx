import React from "react";

const App = () => {
  // localStorage.clear() Ye Local storage ko clear karta hai
  // sessionStorage.clear() Ye Session storage ko clear karta hai

  localStorage.setItem("user", "Atif"); //ye local storage me value set karne ka kaam ho raha hai
  localStorage.setItem("age", "18");

  const user = localStorage.getItem("user");
  const age = localStorage.getItem("age");

  console.log(user);
  console.log(age);

  // localStorage.removeItem('user') ye item remove karne ke kaam aata hai

  
  
  localStorage.getItem()
  return <div>App</div>;
};

export default App;
