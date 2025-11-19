import React from 'react'

const App = () => {
  return (
    <div className="bg-gray-600 h-screen flex gap-18 items-center px-40">
      <div className="flex flex-col gap-4 text-white w-full">
        <input
          type="text"
          placeholder="Enter your task."
          className="border-2 w-full py-2 px-4 rounded-lg outline-none"
        />
        <textarea
          placeholder="Enter details."
          name=""
          id=""
          className="border-2 h-30 w-full py-2 px-4 rounded-lg outline-none"
        ></textarea>
        <button className=" w-full py-2 px-4 rounded-lg outline-none bg-white text-black">
          Add Task
        </button>
      </div>
      <img
        className='h-50'
        src="https://cdn-icons-png.flaticon.com/512/4021/4021693.png" />
    </div>
  );
}

export default App