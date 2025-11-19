import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Submitted");
    console.log(title, detail);
    setTitle("");
    setDetail("")
  };

  return (
    <>
      <div className="text-center p-5">
        <h1 className="font-bold text-6xl">Add your Daily Task</h1>
      </div>
      <div className=" h-1/2 flex gap-20 py-10 px-20">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex gap-4 flex-col w-1/2"
        >
          {/* Task input */}
          <input
            type="text"
            placeholder="Enter your note."
            className="border-2 w-full outline-none py-2 px-6 rounded-lg font-medium "
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          {/* Detail Input */}
          <textarea
            placeholder="Enter details."
            className="border-2 w-full h-30 outline-none py-2 px-6 rounded-lg font-medium"
            value={detail}
            onChange={(e) => {
              setDetail(e.target.value);
            }}
          ></textarea>
          <button className="bg-black text-white py-2 w-full px-6 rounded-lg">
            Add Note
          </button>
        </form>
        <img
          className="h-50"
          src="https://cdn-icons-png.flaticon.com/512/4021/4021693.png"
        />
      </div>
      <div className="h-1/2 flex gap-10 py-10 px-20">
        <div className="h-40 w-40 bg-gray-500"></div>
        <div className="h-40 w-40 bg-gray-500"></div>
        <div className="h-40 w-40 bg-gray-500"></div>
      </div>
    </>
  );
};

export default App;
