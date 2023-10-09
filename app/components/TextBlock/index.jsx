"use client";
import React, { useEffect } from "react";
import { useRef } from "react";
import styles from "./styles.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function TextBlock() {
  gsap.defaults({
    duration: 2,
    ease: "expo.out",
  });

  const textRefs = useRef([]);
  const overlays = useRef([]);
  const block = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: block.current,
        start: "top center",
        end: "bottom top+=10%",
        scrub: true,
      },
    });

    overlays.current.forEach((el, index) => {
      tl.to(el, {
        scaleX: 0,
        // stagger: index * 0.2,
      });
    });
  }, []);

  return (
    <section className={styles.text_block} ref={block}>
      <div className={styles.container}>
        <div className={styles.text__effect}>
          <div
            ref={(overlay) => overlays.current.push(overlay)}
            className={styles.text__overlay}
          ></div>
          <p ref={(text) => textRefs.current.push(text)}>
            Outdoor Beat is committed to motivating everyone to embrace
          </p>
        </div>
        <div className={styles.text__effect}>
          <div
            ref={(overlay) => overlays.current.push(overlay)}
            className={styles.text__overlay}
          ></div>
          <p ref={(text) => textRefs.current.push(text)}>
            the outdoors. We believe that seeking the thrill of outdoor
          </p>
        </div>
        <div className={styles.text__effect}>
          <div
            ref={(overlay) => overlays.current.push(overlay)}
            className={styles.text__overlay}
          ></div>
          <p ref={(text) => textRefs.current.push(text)}>
            exploration is key to our health. That's why we're
          </p>
        </div>
        <div className={styles.text__effect}>
          <div
            ref={(overlay) => overlays.current.push(overlay)}
            className={styles.text__overlay}
          ></div>
          <p ref={(text) => textRefs.current.push(text)}>
            empowering you to feel confident, vibrant, and primed for
          </p>
        </div>
        <div className={styles.text__effect}>
          <div
            ref={(overlay) => overlays.current.push(overlay)}
            className={styles.text__overlay}
          ></div>
          <p ref={(text) => textRefs.current.push(text)}>
            #OutdoorLiving at its finest.
          </p>
        </div>
      </div>
    </section>
  );
}

export default TextBlock;
