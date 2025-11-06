import React from 'react'
import style from './NavBar.module.css'

const NavBar = () => {
  return (
    <div className={style.nav}>
        <h3>Atif</h3>
        <button className={style.btn}>Login</button>
    </div>
  )
}

export default NavBar