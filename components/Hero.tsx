import styled, { css } from 'styled-components';
import CodeCard from './CodeCard';
import vector from '../public/images/vector.jpg';

const Container = styled.div`
  position: relative;
  background: url(${vector.src});
  background-size: cover;
  background-attachment: fixed;
  height: calc(100vh - ${({ theme }) => theme.NAV_BAR_HEIGHT}px);
  z-index: 0;
  color: ${({ theme }) => theme.colors.white};

  &::after {
    position: absolute;
    content: '';
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    background: black;
    opacity: 0.5;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;

  height: 100%;
  max-width: ${({ theme }) => theme.APP_MAX_WIDTH}px;
  margin: 0 auto;
`;

const Intro = styled.div`
  > *:not(:last-child) {
    margin-bottom: 20px;
  }

  em {
    color: ${({ theme }) => theme.colors.red};
  }
`;

const Greeting = styled.h2`
  text-transform: uppercase;
`;

const Name = styled.h2`
  font-size: 42px;
  text-transform: uppercase;
`;

const Blurb = styled.h4`
  max-width: 400px;
  line-height: 1.5;
`;

const Hero = () => (
  <Container>
    <Content>
      <Intro>
        <Greeting>Hi there! 👋 I&apos;m</Greeting>
        <Name>
          Trevor <em>Wright</em>
        </Name>
        <Blurb>
          I&apos;m a <em>web developer</em> passionate about growing teams and
          individuals
        </Blurb>
      </Intro>
      <CodeCard />
    </Content>
  </Container>
);

export default Hero;
