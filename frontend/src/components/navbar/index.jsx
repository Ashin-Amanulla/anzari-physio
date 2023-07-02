import React from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Services",
    url: "/services",
  },
  {
    id: 3,
    title: "Contact",
    url: "/contact",
  },
];

export default function Navbar() {
  return (
    <div className=" d-flex justify-between items-center py-3">
      <Link href="/" className={styles.logo}>
        Action +
      </Link>

      <div className={styles.links}>
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}

        <button className={styles.logout} >
          Login
        </button>
      </div>
    </div>
  );
}
