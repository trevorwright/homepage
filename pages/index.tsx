import type { NextPage } from 'next';
import styled from 'styled-components';
import Hero from '../components/Hero';

const PlaceHolder = styled.div`
  height: 1200px;
`;

const Home: NextPage = () => {
  return (
    <>
      <section>
        <Hero></Hero>
      </section>
      <section>
        <PlaceHolder></PlaceHolder>
      </section>
    </>
  );
};

export default Home;
