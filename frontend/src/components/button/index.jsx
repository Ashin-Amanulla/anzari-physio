import React from "react";
import styles from "./button.module.css";
import Link from "next/link";

const Button = ({bgColor,txtColor, text, url }) => {
  return (
    <Link href={url}>
      <button style={{  backgroundColor: bgColor, color:txtColor }} className={styles.buttonContainer}>{text}</button>
    </Link>
  );
};

export default Button;