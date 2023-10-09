import Image from "next/image";
import styles from "./page.module.css";
import Hero from "./components/Hero";
import TextBlock from "./components/TextBlock";
import FullWidthImage from "./components/FullWidthImage";
import JoinUs from "./components/JoinUs";

export default function Home() {
  return (
    <div>
      <Hero />
      <TextBlock />
      <FullWidthImage />
      <JoinUs />
    </div>
  );
}
