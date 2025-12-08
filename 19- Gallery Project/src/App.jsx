import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [userdata, setUserData] = useState([]);
  const [index, setIndex] = useState(1);

  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=10`
    );
    setUserData(response.data);
  };

  useEffect(
    function () {
      getData();
    },
    [index]
  );

  let printUserData = (
    <h1 className="text-gray-600 font-bold text-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      Loading...
    </h1>
  );
  if (userdata.length > 0) {
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
  }
  return (
    <div className="p-4 overflow-auto h-screen bg-black">
      <div className="flex h-[90%] flex-wrap gap-4 items-center justify-center">
        {printUserData}
      </div>
      <div className="flex items-center justify-center gap-6">
        <button
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1);
            }
            setUserData([]);
          }}
          className="py-2 px-4 bg-amber-400 text-black active:scale-95 rounded font-semibold text-sm"
        >
          Prev
        </button>
        <h2 className="text-white">page {index}</h2>
        <button
          onClick={() => {
            if (index < 10) {
              setIndex(index + 1);
            }
            setUserData([]);
          }}
          className="py-2 px-4 bg-amber-400 text-black active:scale-95 rounded font-semibold text-sm"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;