"use client";
import React, { useEffect } from "react";
import { useRef } from "react";
import { gsap } from "gsap";
import styles from "./styles.module.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Hero() {
  const heroTitleRef = useRef(null);
  const heroTitleLetterRef = useRef([]);
  const picsRef = useRef([]);
  const spansRef = useRef([]);
  const hero = useRef(null);

  useEffect(() => {
    gsap.set(heroTitleLetterRef.current, {
      y: 32,
      opacity: 0,
    });

    gsap.set(picsRef.current, {
      opacity: 0,
      y: 50, //random number between 50 and 100 for every img
    });

    const tl = gsap.timeline();

    gsap.registerPlugin(ScrollTrigger);
    tl.to(spansRef.current, {
      opacity: 1,
    })
      .to(heroTitleLetterRef.current, {
        opacity: 1,
        y: 0,
        ease: "expo.out",
        stagger: 0.01,
      })
      .to(
        picsRef.current,
        {
          opacity: 1,
          y: 0,
          ease: "power3.out",
          duration: 2,
          stagger: 0.04,
        },
        0.5
      )
      .to(picsRef.current, {
        scrollTrigger: {
          trigger: hero.current,
          start: "top 60vh", //when the top of the hero reaches the CENTER of viewport
          end: "bottom top",
          scrub: true,
        },
        yPercent: gsap.utils.random(-100, -50),
        ease: "none",
      });
  }, []);

  return (
    <section className={styles.hero} ref={hero}>
      <h1 className={styles.hero__title} ref={heroTitleRef}>
        <div data-hidden ref={(span) => spansRef.current.push(span)}>
          <span ref={(text) => heroTitleLetterRef.current.push(text)}>O</span>
          <span ref={(text) => heroTitleLetterRef.current.push(text)}>u</span>
          <span ref={(text) => heroTitleLetterRef.current.push(text)}>t</span>
          <span ref={(text) => heroTitleLetterRef.current.push(text)}>d</span>
          <span ref={(text) => heroTitleLetterRef.current.push(text)}>o</span>
          <span ref={(text) => heroTitleLetterRef.current.push(text)}>o</span>
          <span ref={(text) => heroTitleLetterRef.current.push(text)}>r</span>
        </div>
        <div data-hidden ref={(span) => spansRef.current.push(span)}>
          <span ref={(text) => heroTitleLetterRef.current.push(text)}>B</span>
          <span ref={(text) => heroTitleLetterRef.current.push(text)}>e</span>
          <span ref={(text) => heroTitleLetterRef.current.push(text)}>a</span>
          <span ref={(text) => heroTitleLetterRef.current.push(text)}>t</span>
        </div>
      </h1>

      <div className={styles.hero__images}>
        <img
          ref={(pic) => picsRef.current.push(pic)}
          src="./images/Photo_8.jpg"
          data-hidden
          loading="lazy"
        />
        <img
          ref={(pic) => picsRef.current.push(pic)}
          src="./images/Photo12.jpg"
          data-hidden
          loading="lazy"
        />
        <img
          ref={(pic) => picsRef.current.push(pic)}
          src="./images/Photo11.jpg"
          data-hidden
          loading="lazy"
        />
        <img
          ref={(pic) => picsRef.current.push(pic)}
          src="./images/Photo14.jpg"
          data-hidden
          loading="lazy"
        />
        <img
          ref={(pic) => picsRef.current.push(pic)}
          src="./images/Photo5.jpg"
          data-hidden
          loading="lazy"
        />
        <img
          ref={(pic) => picsRef.current.push(pic)}
          src="./images/Photo17.jpg"
          data-hidden
          loading="lazy"
        />
        <img
          ref={(pic) => picsRef.current.push(pic)}
          src="./images/fullwidth.jpg"
          data-hidden
          loading="lazy"
        />
      </div>
    </section>
  );
}

export default Hero;
