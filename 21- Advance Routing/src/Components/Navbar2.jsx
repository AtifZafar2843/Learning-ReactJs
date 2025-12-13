import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar2 = () => {
    const navigate = useNavigate()
  return (
    <div className="bg-amber-900">
      <button 
      onClick={()=>{
        navigate('/')
      }}
      className="py-2 px-4 rounded m-2 bg-amber-200 text-black">
        Back to home
      </button> 
      <button 
      onClick={()=>{
        navigate(-1)
      }}
      className="py-2 px-4 rounded m-2 bg-amber-200 text-black">
        Go Back
      </button>
    </div>
  );
};

export default Navbar2;
