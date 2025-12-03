import React from "react";

const App = () => {
  const getData = () => {
    console.log("data aa gaya");
  };
  return (
    <div className="p-4">
      <button
        onClick={getData}
        className="bg-blue-800 active:scale-95 text-white px-8 py-2 rounded"
      >
        Get Data
      </button>
    </div>
  );
};

export default App;
