import React from 'react';
import styles from './navbar.module.css';
import Logo from '../../images/crate club logo.svg';
import Menu from '../../images/menu.svg';


function Navbar() {
  return (
    <>
      <div className={styles.navbarContainer}>
        <div className={styles.navbarWrapper}>
          <img src={Logo} alt="Crate Club logo" className={styles.logo}></img>
          <img src={Menu} alt="Menu" className={styles.menu}></img>
        </div>
      </div>
    </>
  )
}

export default Navbar
