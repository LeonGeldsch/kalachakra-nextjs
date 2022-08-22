import Head from 'next/head'
import Header from '../components/Header';
import Parallax from '../components/Parallax';
import DevBlog from '../components/DevBlog';
import LandingPage from '../components/LandingPage';
import Footer from '../components/Footer';
import fs from 'fs';
import matter from 'gray-matter';

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Kalachakra</title>
        <meta name="description" content="Kalachakra is a puzzle game with a focus on time" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Parallax />
      <LandingPage />
      <DevBlog posts={posts} />
      <Footer />
    </>
  );
};

export async function getStaticProps() {
  const files = fs.readdirSync('posts');

  const posts = files.map((fileName) => {
    const slug = fileName.replace('.md', '');
    const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
    const { data: frontmatter, content } = matter(readFile);
    return {
      slug,
      frontmatter,
      content
    };
  });

  return {
    props: {
      posts,
    },
  };
}

