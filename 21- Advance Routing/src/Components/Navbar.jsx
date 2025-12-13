import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 px-8 bg-amber-800">
      <h2 className="font-bold text-2xl">Fabrooh</h2>
      <div className="flex gap-6">
        <Link className='font-semibold text-lg px-2' to='/'>Home</Link>
        <Link className='font-semibold text-lg px-2' to='/about'>About</Link>
        <Link className='font-semibold text-lg px-2' to='/contact'>Contact</Link>
        <Link className='font-semibold text-lg px-2' to='/products'>Products</Link>
        <Link className='font-semibold text-lg px-2' to='/courses'>Courses</Link>
      </div>
    </div>
  );
}

export default Navbar