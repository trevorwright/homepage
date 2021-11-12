import styled from 'styled-components';
import CodeCard from './CodeCard';
import geo from '../public/images/geometric.jpg';
import media from '../styles/media';

const Container = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  background: url(${geo.src});
  background-size: cover;
  background-attachment: fixed;
  height: calc(100vh - ${({ theme }) => theme.NAV_BAR_HEIGHT}px);
  max-height: 800px;
  z-index: 0;
  color: ${({ theme }) => theme.colors.grey};

  &::after {
    position: absolute;
    content: '';
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    background: ${({ theme }) => theme.colors.white};
    opacity: 0.6;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-gap: 20px;
  max-width: ${({ theme }) => theme.APP_MAX_WIDTH}px;
  margin: 0 auto;
  padding: 20px;

  ${media.large} {
    grid-template-rows: initial;
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
`;

const Intro = styled.div`
  > *:not(:last-child) {
    margin-bottom: 20px;
  }

  em {
    color: ${({ theme }) => theme.colors.red};
  }
`;

const Greeting = styled.h2``;

const Name = styled.h2`
  font-size: 32px;

  ${media.medium} {
    font-size: 42px;
  }
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
