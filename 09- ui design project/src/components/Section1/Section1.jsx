import React from 'react'
import NavBar from './NavBar'
import { MainContent } from './MainContent'

const Section1 = (props) => {
  return (
    <div className='h-screen w-full py-2 px-4'>
      <NavBar />
      <MainContent user={props.user}/>
    </div>
  )
}

export default Section1