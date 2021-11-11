import type { NextPage } from 'next';
import styled from 'styled-components';
import Hero from '../components/Hero';
import PivotExample from '../components/PivotExample';

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
        <PivotExample></PivotExample>
        {/* <PlaceHolder></PlaceHolder> */}
      </section>
    </>
  );
};

export default Home;
