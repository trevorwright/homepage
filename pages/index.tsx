import type { NextPage } from 'next';
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
import Footer from '../components/Footer';

const Home: NextPage = () => {
  return (
    <>
      <Hero></Hero>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Footer></Footer>
    </>
  );
};

export default Home;
