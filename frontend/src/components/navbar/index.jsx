import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./navbar.module.css";
import Logo from '../../../public/AP-Logo.png'
const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
    sectionId: "#homeSection",
  },
  {
    id: 2,
    title: "Services",
    url: "/services",
    sectionId: "#servicesSection",
  },
  {
    id: 3,
    title: "Contact",
    url: "/contact",
    sectionId: "#contactSection",
  },
];

export default function Navbar() {

 


  return (          
  <div className='container py-3'>

    <div className=" d-flex justify-between items-center pt-5">
      <Link href="/" className={styles.logo}>
        <Image
        src={Logo}
        alt="Logo"
        width={128}
        height={32}
        />
      </Link>

      <div className={styles.links}>
        {links.map((link) => (
          <Link key={link.id} href={link.sectionId} scroll={false}  className={styles.link}>
            {link.title}
          </Link>
        ))}

        {/* <button className={styles.logout} >
          Login
        </button> */}
      </div>
    </div>
    </div>
  );
}
