import React from "react";
import styles from "../styles/Footer.module.scss";

function Footer(props) {
  return (
    <footer className={styles.footerContainer}>
      <div
        className={
          props.isBlogpost ? styles.footerTagBlogpost : styles.footerTag
        }
      >
        <hr />
        <p> © 2021 Baltazar Ortega. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
