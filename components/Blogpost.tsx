import React, { useState } from "react";
import styles from "../styles/Blogpost.module.scss";

const Blogpost = ({ post }) => {
  return (
    <div className={styles.blogpostContainer}>
      <h1 className={styles.blogpostTitle}>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
    </div>
  );
};

export default Blogpost;
