"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./navbar.module.css";
import Logo from "../../../public/AP-Logo.png";
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="container py-3">
      <div
        className={`d-flex justify-between items-center  ${styles.navbar}`}
      >
        <Link href="/" className={styles.logo}>
          <Image src={Logo} alt="Logo" width={128} height={32} />
        </Link>

        <button
          className={`${styles.mobileMenuButton} ${
            isMobileMenuOpen ? styles.open : ""
          }`}
          onClick={toggleMobileMenu}
        >
          <div class="space-y-2">
            <span class="block w-8 h-0.5 bg-gray-600"></span>
            <span class="block w-8 h-0.5 bg-gray-600"></span>
            <span class="block w-5 h-0.5 bg-gray-600"></span>
          </div>
        </button>

        <div
          className={`${styles.links} ${isMobileMenuOpen ? styles.open : ""}`}
        >
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.sectionId}
              scroll={false}
              className={styles.link}
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className={styles.mobileMenu}>
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.sectionId}
              scroll={false}
              className={styles.mobileLink}
              onClick={toggleMobileMenu}
              >
              {link.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
