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


  const customerDetail = {
    name: "Atif",
    age: 18,
    city: "Aligarh"
  }

  // yaha hum dekh rahe hain kaise kisi object ya array ko local storage me save karte hain.
  localStorage.setItem("customer", JSON.stringify(customerDetail));

  // ab yaha hum dekhenge k kisi object ya array ko local storage kaise get karenge

  const customer = JSON.parse(localStorage.getItem("customer"))
  // kyu ki ye data string ke form me tha to is liye isko dubar parse use karke object form me convert kara hai
  console.log(customer);
  
  
  localStorage.getItem()
  return <div>App</div>;
};

export default App;
