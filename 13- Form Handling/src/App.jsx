import React from "react";

const App = () => {
  const sibmitHandler = () => {
    console.log(submitted);
  };
  return (
    <div>
      <form onSubmit={sibmitHandler}>
        <input type="text" placeholder="Enter your name" />
        <button>submit</button>
      </form>
    </div>
  );
};

export default App;
