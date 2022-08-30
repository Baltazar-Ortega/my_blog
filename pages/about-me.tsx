import React from "react";
import Image from "next/image";
import Head from "next/head";
import Header from "../components/Header";
import styles from "../styles/AboutMe.module.scss";
import Footer from "../components/Footer";

const aboutMe = () => {
  return (
    <div>
      <Head>
        <title>About me</title>
      </Head>
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
          Hello! <br />I am a Fullstack Engineer
          currently learning more about React and Javascript. <br />
          I hope you find something useful in my blogposts. <br />
          <br />
          Greetings from México &#127474;&#127485;
        </p>

        <p className={styles.contactTitle}>Contact</p>
        <ul>
          <li className={styles.contactElement}>
            <a rel="noreferrer">baltazargtzortega@gmail.com</a>
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

      <Footer isBlogpost={false}></Footer>
    </div>
  );
};

export default aboutMe;
