import React from 'react'

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 px-8 bg-amber-800">
      <h2 className="font-bold text-2xl">Fabrooh</h2>
      <div className="flex gap-6">
        <a className="font-semibold text-lg" href="/">Home</a>
        <a className="font-semibold text-lg" href="/about">About</a>
        <a className="font-semibold text-lg" href="/Contact">Contact</a>
        <a className="font-semibold text-lg" href="/Products">Products</a>
      </div>
    </div>
  );
}

export default Navbar