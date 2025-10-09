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

      <div className={styles.aboutContainer}>
        <div className={styles.aboutHeader}>
          <h4>About</h4>
          <div className={styles.closeButtonContainer}>
            <a href="">Close</a>
          </div>
        </div>

        <div className={styles.aboutContent}>
          <h3>Crate Club reimagines your Spotify library as a digital crate-digging experience. Instead of scrolling lists or algorithmic feeds, you explore your music visually - album by album, cover by cover - just like flipping through records in a store.</h3>

          <div className={styles.aboutSection}>
            <div className={styles.divider}><hr></hr></div>
            <div className={styles.aboutGrid}>
              <h4>How to use</h4>
              <p>Browse, search, and rediscover forgotten favourites. Each album is part of a stack - a living archive of what you’ve listened to, collected, and loved. Just click/tap on a stack to browse albums and hit play. </p>
            </div>
          </div>

          <div className={styles.aboutSection}>
            <div className={styles.divider}><hr></hr></div>
            <div className={styles.aboutGrid}>
              <h4>Built by</h4>
              <p>Design and Code by Nick Manton</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.backgroundBlur}></div>
    </>
  )
}

export default Navbar
