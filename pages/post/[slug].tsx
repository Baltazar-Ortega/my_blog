import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from "next/head";
import Header from "../../components/Header";
import Blogpost from "../../components/Blogpost";
import Footer from "../../components/Footer";

const prism = require("prismjs");
require("prismjs/components/prism-python");

const { BLOG_URL, CONTENT_API_KEY } = process.env;

async function getPost(slug: string) {
  const res = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/posts/slug/${slug}/?key=${CONTENT_API_KEY}&fields=title,slug,html`
  ).then((res) => res.json());

  const post = res.posts[0];
  return post;
}

type Post = {
  title: string;
  html: string;
  slug: string;
};

const Post: React.FC<{ post: Post }> = (props) => {
  const { post } = props;

  useEffect(() => {
    prism.highlightAll();
    setATags();
  }, []);

  const router = useRouter();
  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  function setATags() {
    let aTags = document.querySelectorAll("a");
    for (let i = 0; i < aTags.length; i++) {
      if (aTags[i].className === "") {
        aTags[i].setAttribute("target", "_blank");
      }
    }
  }

  return (
    <div>
      <Head>
        <title>{post.title}</title>
      </Head>
      <Header></Header>
      <Blogpost post={post}></Blogpost>
      <Footer isBlogpost={true} />
    </div>
  );
};

export const getStaticProps = async ({ params }) => {
  const post = await getPost(params.slug);
  return {
    props: { post },
  };
};

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: true,
  };
};

export default Post;
