import { useState } from "react";
import "./App.css";

function App() {
  const [num, setNum] = useState(10);

  const btnClicked = () => {
    setNum((prev) => prev + 1);
    setNum((prev) => prev + 1);
    setNum((prev) => prev + 1);
  };
  return (
    <>
      <h1>{num}</h1>
      <button onClick={btnClicked}>Click me</button>
    </>
  );
}

export default App;
