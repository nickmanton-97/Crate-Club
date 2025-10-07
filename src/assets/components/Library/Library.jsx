import React from 'react';
import styles from './library.module.css';
import img1 from '../../images/Library/01.png';
import img2 from '../../images/Library/02.png';
import img3 from '../../images/Library/03.png';
import img4 from '../../images/Library/04.png';
import img5 from '../../images/Library/05.png';
import img6 from '../../images/Library/06.png';
import img7 from '../../images/Library/07.png';
import img8 from '../../images/Library/08.png';
import img9 from '../../images/Library/09.png';
import img10 from '../../images/Library/10.png';
import img11 from '../../images/Library/11.png';
import img12 from '../../images/Library/12.png';


function Library() {
  return (
    <section className={styles.libraryWrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.media}><img src={img1} alt=""></img></div>
          <div className={styles.media}><img src={img2} alt=""></img></div>
          <div className={styles.media}><img src={img3} alt=""></img></div>
          <div className={styles.media}><img src={img4} alt=""></img></div>
          <div className={styles.media}><img src={img5} alt=""></img></div>
          <div className={styles.media}><img src={img6} alt=""></img></div>
          <div className={styles.media}><img src={img7} alt=""></img></div>
          <div className={styles.media}><img src={img8} alt=""></img></div>
          <div className={styles.media}><img src={img9} alt=""></img></div>
          <div className={styles.media}><img src={img10} alt=""></img></div>
          <div className={styles.media}><img src={img11} alt=""></img></div>
          <div className={styles.media}><img src={img12} alt=""></img></div>
        </div>

        {/* Duplicates */}
        <div className={styles.content} aria-hidden="true">
          <div className={styles.media}><img src={img1} alt=""></img></div>
          <div className={styles.media}><img src={img2} alt=""></img></div>
          <div className={styles.media}><img src={img3} alt=""></img></div>
          <div className={styles.media}><img src={img4} alt=""></img></div>
          <div className={styles.media}><img src={img5} alt=""></img></div>
          <div className={styles.media}><img src={img6} alt=""></img></div>
          <div className={styles.media}><img src={img7} alt=""></img></div>
          <div className={styles.media}><img src={img8} alt=""></img></div>
          <div className={styles.media}><img src={img9} alt=""></img></div>
          <div className={styles.media}><img src={img10} alt=""></img></div>
          <div className={styles.media}><img src={img11} alt=""></img></div>
          <div className={styles.media}><img src={img12} alt=""></img></div>
        </div>
        <div className={styles.content} aria-hidden="true">
          <div className={styles.media}><img src={img1} alt=""></img></div>
          <div className={styles.media}><img src={img2} alt=""></img></div>
          <div className={styles.media}><img src={img3} alt=""></img></div>
          <div className={styles.media}><img src={img4} alt=""></img></div>
          <div className={styles.media}><img src={img5} alt=""></img></div>
          <div className={styles.media}><img src={img6} alt=""></img></div>
          <div className={styles.media}><img src={img7} alt=""></img></div>
          <div className={styles.media}><img src={img8} alt=""></img></div>
          <div className={styles.media}><img src={img9} alt=""></img></div>
          <div className={styles.media}><img src={img10} alt=""></img></div>
          <div className={styles.media}><img src={img11} alt=""></img></div>
          <div className={styles.media}><img src={img12} alt=""></img></div>
        </div>


      </div>
    </section>
  );
}

export default Library;
