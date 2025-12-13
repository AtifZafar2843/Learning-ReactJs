import React from 'react'
import Navbar from './Components/Navbar'
import { useState } from 'react'

const App = () => {
  const [theme, setTheme] = useState('light')

  return (
    <div>
      <Navbar theme={theme} setTheme={setTheme} />
      <h1>Theme is {theme}</h1>
    </div>
  ) 
}

export default App