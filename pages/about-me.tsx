import React from "react";
import Header from "../components/Header";
import styles from "../styles/AboutMe.module.scss";

const aboutMe = () => {
  return (
    <div>
      <Header></Header>
      <div className={styles.aboutMeContainer}>
        <h1 className={styles.aboutMeTitle}>About me</h1>
        <img src="/me.jpg" alt="me" className={styles.photo} />
        <p>
          Hello! I am a CS student currently learning everything about Machine
          Learning and Deep learning. <br />
          I hope you find something useful in my blogposts. <br />
          <br />
          Greetings from México &#127474;&#127485;
        </p>

        <p className={styles.contactTitle}>Contact</p>
        <ul>
          <li className={styles.contactElement}>
            <a href="https://github.com/Baltazar-Ortega">Github</a>
          </li>
          <li className={styles.contactElement}>
            <a href="https://www.linkedin.com/in/baltazar-ortega/">LinkedIn</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default aboutMe;
