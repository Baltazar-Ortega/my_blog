import React from "react";
import Image from "next/image";
import Header from "../components/Header";
import styles from "../styles/AboutMe.module.scss";

const aboutMe = () => {
  return (
    <div>
      <Header></Header>
      <div className={styles.aboutMeContainer}>
        <h1 className={styles.aboutMeTitle}>About me</h1>
        <div className={styles.photoContainer}>
          <Image
            src="/me.jpg"
            alt="me"
            width="220"
            height="200"
            className={styles.photo}
          />
        </div>
        <p>
          Hello! <br />I am a Computer Science student at{" "}
          <a
            href="https://uanl.mx"
            target="_blank"
            style={{ textDecoration: "underline" }}
          >
            UANL
          </a>{" "}
          currently learning everything about Machine Learning and Deep
          learning. <br />
          I hope you find something useful in my blogposts. <br />
          <br />
          Greetings from México &#127474;&#127485;
        </p>

        <p className={styles.contactTitle}>Contact</p>
        <ul>
          <li className={styles.contactElement}>
            <a>baltazargtzortega@gmail.com</a>
          </li>
          <li className={styles.contactElement}>
            <a
              href="https://www.linkedin.com/in/baltazar-ortega/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li className={styles.contactElement}>
            <a
              href="https://github.com/Baltazar-Ortega"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default aboutMe;
