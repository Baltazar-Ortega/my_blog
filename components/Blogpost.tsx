import React from "react";
import styles from "../styles/Blogpost.module.scss";

const Blogpost = ({ post }) => {
  return (
    <div>
      <div className={styles.blogpostContainer}>
        <h1 className={styles.blogpostTitle}>{post.title}</h1>
        <div
          dangerouslySetInnerHTML={{ __html: post.html }}
          className={styles.innerHtml}
        ></div>
      </div>
    </div>
  );
};

export default Blogpost;
