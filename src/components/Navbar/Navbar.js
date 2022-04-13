import React from 'react'
import Logo from './Logo/Logo'
import Menu from './Menu/Menu'
import Stats from './Stats/Stats'

import classes from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={classes.Navbar}>
        <Menu />
        <Logo />
        <Stats />
    </nav>
  )
}
