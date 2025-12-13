import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 px-8 bg-amber-800">
      <h2 className="font-bold text-2xl">Fabrooh</h2>
      <div className="flex gap-6">
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/products'>Products</Link>
      </div>
    </div>
  );
}

export default Navbar