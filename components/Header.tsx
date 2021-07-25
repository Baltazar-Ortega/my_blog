import React from "react";
import styles from "../styles/Header.module.scss";
import Link from "next/link";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.header}>
        <Link href="/">
          <a>
            <h1 className={styles.blogName}>
              {" "}
              <span className={styles.logo}> {">"} </span> baltazar ortega
            </h1>
          </a>
        </Link>
        <div>
          <Link href="/about-me">
            <a>
              <p className={styles.aboutMe}>About me</p>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
