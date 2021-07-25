import Header from "../components/Header";
import PostsList from "../components/PostsList";

const { BLOG_URL, CONTENT_API_KEY } = process.env;

async function getPosts() {
  const res = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&fields=excerpt,title,slug,published_at,reading_time&formats=html,plaintext&filter=tag:-hash-es`
  ).then((res) => res.json());

  const posts = res.posts;

  return posts;
}

type Post = {
  title: string;
  slug: string;
  excerpt: string;
  published_at: string;
  reading_time: number;
};

const Home: React.FC<{ posts: Post[] }> = (props) => {
  const { posts } = props;

  return (
    <div>
      <Header></Header>
      <PostsList posts={posts} es={false}></PostsList>
    </div>
  );
};

export const getStaticProps = async ({ params }) => {
  const posts = await getPosts();
  return {
    props: { posts },
    revalidate: 10,
  };
};

export default Home;
