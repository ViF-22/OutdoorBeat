"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Hero from "./components/Hero";
import TextBlock from "./components/TextBlock";
import FullWidthImage from "./components/FullWidthImage";
import JoinUs from "./components/JoinUs";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div>
      <Hero />
      <TextBlock />
      <FullWidthImage />
      <JoinUs />
    </div>
  );
}
