import React from "react";
import styles from "../styles/Header.module.scss";
import Link from "next/link";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.header}>
        <Link href="/">
          <h1 className={styles.blogName}>
            {" "}
            <span className={styles.logo}> {">"} </span> baltazar ortega
          </h1>
        </Link>
        <div>
          <Link href="/about-me">
            <p className={styles.aboutMe}>About me</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
