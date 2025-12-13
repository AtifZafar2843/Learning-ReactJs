import React from "react";

const Navbar = (props) => {
  const changeTheme = () => {
    console.log("button Clicked");

    props.setTheme("dark");
  };

  return (
    <div className="nav">
      <h1>Fabrooh</h1>
      <div className="nav-links">
        <h3>Home</h3>
        <h3>About</h3>
        <h3>Contact</h3>
        <button onClick={changeTheme}>Dark</button>
      </div>
    </div>
  );
};

export default Navbar;
