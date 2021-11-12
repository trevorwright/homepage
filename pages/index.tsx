import type { NextPage } from 'next';
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';

const Home: NextPage = () => {
  return (
    <>
      <Hero></Hero>
      <AboutMe></AboutMe>
      <Skills></Skills>
    </>
  );
};

export default Home;
