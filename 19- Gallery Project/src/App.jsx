import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [userdata, setUserData] = useState([]);
  const getData = async () => {
    const response = await axios.get("https://picsum.photos/v2/list");
    setUserData(response.data);
  };

  let printUserData = "No user Available";
  if (userdata.length > 0) {
    printUserData = userdata.map(function (elem, idx) {
      return (
        <div>
          <div className="h-50 w-50 overflow-hidden bg-red-400 rounded-2xl">
            <img className="h-full w-full object-cover" src={elem.download_url} />
          </div>
          <h1
            className="font-bold"
          >{elem.author}</h1>
        </div>
      );
    });
  }
  return (
    <div className="p-4 overflow-auto">
      <button
        onClick={getData}
        className="bg-blue-800 active:scale-95 text-white px-8 py-2 rounded"
      >
        Get Data
      </button>
      <div className="mt-4 flex flex-wrap gap-4 items-center justify-center">{printUserData}</div>
    </div>
  );
};

export default App;
