import React from 'react'
import Logo from './Logo/Logo'
import Menu from './Menu/Menu'
import Stats from './Stats/Stats'

import classes from './Navbar.module.css'

export default function Navbar(props) {

  // const [sidebar, toggleSidebar] = useState()
  // const [message, setMessage] = useState()
  // const [showModal, setShowModal] = useState()
  return (
    <nav className={classes.Navbar}>
        <Menu sidebar={props.sidebar} toggleSidebar={props.toggleSidebar} showModal={props.showModal} setShowModal={props.setShowModal} setMessage={props.setMessage} message={props.message} />
        <Logo />
        <Stats />
    </nav>
  )
}
