import React from 'react'
import styles from './navbar.css'
import Logo from '../../images/crate club logo.svg'
import Menu from '../../images/menu.svg'


function Navbar() {

  return (
    <>
      <div className={styles.NavigationContainer}>
        <img src={Logo} alt="Crate Club logo"></img>
        <img src={Menu} alt="Menu"></img>
      </div>
    </>
  )
}

export default Navbar
