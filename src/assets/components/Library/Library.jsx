import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Observer } from "gsap/Observer";
import styles from "./library.module.css";

import img1 from "../../images/Library/01.png";
import img2 from "../../images/Library/02.png";
import img3 from "../../images/Library/03.png";
import img4 from "../../images/Library/04.png";
import img5 from "../../images/Library/05.png";
import img6 from "../../images/Library/06.png";
import img7 from "../../images/Library/07.png";
import img8 from "../../images/Library/08.png";
import img9 from "../../images/Library/09.png";
import img10 from "../../images/Library/10.png";
import img11 from "../../images/Library/11.png";
import img12 from "../../images/Library/12.png";
import img13 from "../../images/Library/13.png";
import img14 from "../../images/Library/14.png";
import img15 from "../../images/Library/15.png";


gsap.registerPlugin(Observer);

const Library = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const container = containerRef.current;
    if (!container) return;

    const halfX = container.clientWidth / 2;
    const wrapX = gsap.utils.wrap(-halfX, 0);
    const xTo = gsap.quickTo(container, "x", {
      duration: 1.5,
      ease: "power4",
      modifiers: { x: gsap.utils.unitize(wrapX) },
    });

    const halfY = container.clientHeight / 2;
    const wrapY = gsap.utils.wrap(-halfY, 0);
    const yTo = gsap.quickTo(container, "y", {
      duration: 1.5,
      ease: "power4",
      modifiers: { y: gsap.utils.unitize(wrapY) },
    });

    let incrX = 0;
    let incrY = 0;

    Observer.create({
      target: window,
      type: "wheel,touch,pointer",
      onChangeX: (self) => {
        if (self.event.type === "wheel") incrX -= self.deltaX;
        else incrX += self.deltaX * 2;
        xTo(incrX);
      },
      onChangeY: (self) => {
        if (self.event.type === "wheel") incrY -= self.deltaY;
        else incrY += self.deltaY * 2;
        yTo(incrY);
      },
    });
  }, []);

  const images = [
    img1, img2, img3, img4, img5, img6,
    img7, img8, img9, img10, img11, img12,
    img13, img14, img15
  ];

  return (
    <section className={styles.libraryWrapper}>
      <div className={styles.container} ref={containerRef}>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((_, i) => (
          <div
            key={i}
            className={styles.content}
            aria-hidden={i > 0 ? "true" : "false"}
          >
            {images.map((img, index) => (
              <div key={index} className={styles.media}>
                <img src={img} alt="" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Library;
