import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero.svg";
import Button from "@/components/button";
import Feature from "@/components/featureLayout";
import Services from "@/components/serviceLayout";
import CTA from "@/components/CTA";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <div className="pageLayout">

    <div className={`${styles.heroContainer} py-24 sm:py-32`}>
      <div className={styles.item}>
        <h1 className={`${styles.title} text-5xl sm:text-7xl font-bold leading-tight`}>
        Your path to pain-free living starts here.
        </h1>
        <p className={`${styles.desc} text-lg sm:text-xl `}>
        Experience Pain-Free Living Through Personalized Physiotherapy Solutions
        </p>
        <Button url="/contact" text="Book Appoinment"/>
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="" className={styles.img} />
      </div>
    </div>

    <Feature/>
    <Services/>
    <CTA/>

    <Testimonials/>
    </div>

  );
}
