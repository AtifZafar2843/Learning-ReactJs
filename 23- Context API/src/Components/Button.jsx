import React, { useContext } from 'react'
import { themeDataContext } from '../Context/ThemeContext';

const Button = () => {
    const [theme,setTheme] = useContext(themeDataContext)
  return (
      <div>
          <button onClick={() => {
              console.log("Button Clicked");
              setTheme(theme === 'dark' ? 'light' : 'dark')
          }}
          >Change Theme</button>
    </div>
  )
}

export default Button