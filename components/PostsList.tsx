import React from "react";
import styles from "../styles/PostsList.module.scss";
import Link from "next/link";
import Footer from "./Footer";

const PostsList = (props) => {
  return (
    <div className={styles.postsContainer}>
      {props.es === false ? (
        <div>
          <Link href="/es">
            <a className={styles.languageLink}>See blogposts in Spanish</a>
          </Link>
        </div>
      ) : (
        <div>
          <Link href="/">
            <a className={styles.languageLink}>Ver blogposts en ingles</a>
          </Link>
        </div>
      )}

      <ul className={styles.postsUl}>
        {props.posts.map((post, index) => {
          return (
            <li key={post.slug} className={styles.postContainer}>
              <Link href="/post/[slug]" as={`/post/${post.slug}`}>
                <a className={styles.postTitle}>{post.title}</a>
              </Link>
              <div>
                {props.es === false ? (
                  <p>
                    {new Date(post.published_at).toLocaleDateString("en")} -{" "}
                    {post.reading_time} minute read
                  </p>
                ) : (
                  <p>
                    {new Date(post.published_at).toLocaleDateString("es")} -{" "}
                    {post.reading_time} minutos de lectura
                  </p>
                )}
                <p>{post.excerpt}</p>
              </div>
            </li>
          );
        })}
      </ul>

      <Footer></Footer>
    </div>
  );
};

export default PostsList;
