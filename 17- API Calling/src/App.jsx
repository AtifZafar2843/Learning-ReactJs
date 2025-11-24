import React from "react";
import axios from "axios";
import { useState } from "react";

const App = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setData(response.data);
  };

  return (
    <div>
      <button onClick={getData}>Get Data</button>
      {data.map((elem) => {
        return <h1>{elem.email}</h1>;
      })}
    </div>
  );
};

export default App;
