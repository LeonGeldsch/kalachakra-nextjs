import Head from 'next/head'
import Header from '../components/Header';
import Parallax from '../components/Parallax';
import DevBlog from '../components/DevBlog';
import LandingPage from '../components/LandingPage';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Kalachakra</title>
        <meta name="description" content="Kalachakra is a puzzle game with a focus on time" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Parallax />
      <LandingPage />
      <DevBlog />
    </>
  );
};