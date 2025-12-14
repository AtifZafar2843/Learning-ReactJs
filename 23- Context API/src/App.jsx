import React, { useState } from 'react'
import Navbar from './Components/Navbar'

const App = () => {
  const [theme, setTheme] = useState('light')
  return (
    <div>
      <Navbar theme={theme}>
        <h2>this is navbar</h2>
        <h2>bohot acha navbar</h2>
        </Navbar>
    </div>
  )
}

export default App