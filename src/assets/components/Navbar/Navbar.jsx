import React from 'react';
import styles from './navbar.module.css';
import Logo from '../../images/crate club logo.svg';
import Menu from '../../images/menu.svg';


function Navbar() {
  return (
    <>
      <div className={styles.NavbarContainer}>
         <img src={Logo} alt="Crate Club logo"></img>
        <img src={Menu} alt="Menu"></img>
      </div>
    </>
  )
}

export default Navbar
