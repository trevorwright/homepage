import type { NextPage } from 'next';
import Head from 'next/head';
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
import Footer from '../components/Footer';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Trevor Wright</title>
        <meta property="og:type" content="profile"></meta>
        <meta property="og:title" content="Leader and Web Developer"></meta>
        <meta property="og:url" content="https://trevorwright.ca"></meta>
        <meta property="og:image" content="/images/profile.png"></meta>
        <meta property="profile:first_name" content="Trevor"></meta>
        <meta property="profile:last_name" content="Wright"></meta>
      </Head>
      <Hero></Hero>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Footer></Footer>
    </>
  );
};

export default Home;
