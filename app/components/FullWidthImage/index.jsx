"use client";
import React from "react";
import styles from "./styles.module.css";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";

function FullWidthImage() {
  gsap.registerPlugin(ScrollTrigger);

  const fullImageSection = useRef(null);
  const fullImage = useRef(null);
  const fullOverlay = useRef(null);
  const fullText = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        paused: true,
        scrollTrigger: {
          trigger: fullImageSection.current,
          start: "top top",
          end: "1040 top",
          scrub: true,
          pin: true,
        },
      });

      tl.to(fullOverlay.current, {
        opacity: 0.4,
      })
        .to(
          fullImageSection.current,
          {
            "clip-path": " polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          },
          0
        )
        .to(
          fullImage.current,
          {
            scale: 1,
          },
          0
        )
        .to(fullText.current, {
          y: 0,
          opacity: 1,
        });
    }, fullImageSection);

    return () => ctx.revert();
  });

  return (
    <section className={styles.fullwidth_image} ref={fullImageSection}>
      <div className={styles.fullwidth_image__overlay} ref={fullOverlay}></div>
      <div className={styles.fullwidth_image__text} ref={fullText}>
        <h2>2023 collection</h2>
        <p>
          Our new collection is everything you need for your next adventure.
          Made to be flexible, breathable and long lasting so you can enjoy more
          of the #OutdoorLiving.
        </p>
      </div>
      <img src="./images/full_width.jpg" ref={fullImage} loading="lazy" />
    </section>
  );
}

export default FullWidthImage;
