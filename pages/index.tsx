import type { NextPage } from 'next';
import styled, { css } from 'styled-components';
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';

const Section = styled.section<{ fullWidth?: boolean }>`
  ${(props) =>
    !props.fullWidth &&
    css`
      max-width: ${({ theme }) => theme.APP_MAX_WIDTH}px;
      margin: 0 auto;
    `}

  margin-bottom: 60px;
`;

const Home: NextPage = () => {
  return (
    <>
      <Section fullWidth>
        <Hero></Hero>
      </Section>
      <Section>
        <AboutMe></AboutMe>
      </Section>
    </>
  );
};

export default Home;
