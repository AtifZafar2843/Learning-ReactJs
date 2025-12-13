import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Products = () => {
  return (
    <div>
      <div className='flex gap-5 items-center justify-center p-4'>
      <Link className='font-semibold text-lg px-2' to='/products/mens'>Mens</Link>
      <Link className='font-semibold text-lg px-2' to='/products/womens'>Womens</Link>
      <Link className='font-semibold text-lg px-2' to='/products/kids'>Kids</Link>
      </div>
      <Outlet/>
    </div>
  )
}

export default Products