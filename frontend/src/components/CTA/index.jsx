import Image from "next/image";
import styles from './cta.module.css'
import Button from "@/components/button";

export default function CTA() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl ">
        <div className={`${styles.bgImg} relative isolate overflow-hidden bg-img px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0`}>
          
          <div className="mx-auto  text-center lg:mx-0 lg:flex-auto lg:py-16 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Transform your well-being.
              <br />
              Start your journey to a pain-free life.
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
            Experience personalized physiotherapy solutions tailored to your needs. Our expert team is here to help you regain mobility, reduce pain, and improve your overall quality of life.
            </p>
            <div className="m-10 flex items-center justify-center  ">
            <Button 
            txtColor='#174EE2'
            bgColor='#ffff'
             url="/contact" text="Book Appoinment"/>

             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
