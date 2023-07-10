import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero.svg";
import Button from "@/components/button";
import Feature from "@/components/featureLayout";
import Services from "@/components/serviceLayout";
import CTA from "@/components/CTA";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contactSection";
import { FaWhatsapp } from "react-icons/fa";




export default function Home() {
  return (
    <div className="pageLayout">
       
      <div className={`${styles.heroContainer} py-24 sm:py-24 px-6 sm:px-24 md:px-24 `}>
        <div className= { `${styles.item} `}>
          <h1
            className={`${styles.title} text-5xl sm:text-7xl font-bold leading-tight`}
          >
            Your path to pain-free living starts here.
          </h1>
          <p className={`${styles.desc} text-lg sm:text-xl `}>
            Experience Pain-Free Living Through Personalized Physiotherapy
            Solutions
          </p>
          <Button
            txtColor="#00BAFF"
            bgColor="#faf7f7"
            url="#contactSection"
            text="Book Appoinment"
          />
        </div>
        <div className={styles.item}>
          <Image src={Hero} alt="" className={styles.img} />
        </div>
      </div>

      <div className="container">
        <section id="servicesSection">
          <Feature />
        </section>

        <Services />
        <CTA />

        <Testimonials />
        <section id="contactSection">
          <Contact />
        </section>
      </div>
      {/* WhatsApp icon */}
      <a
        href="https://wa.me/message/6BPAMDRGWJ26F1"
        class="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp color="white" className="whatsapp-icon"/>
      </a>
    </div>
  );
}
