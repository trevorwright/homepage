import styled from 'styled-components';

import Title from '../Title';

const Layout = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  margin: 0 auto;
  margin-top: -180px;
  padding: 0 20px;
  max-width: 800px;

  margin-bottom: 800px;
`;

const Container = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  border-radius: 5px;
  box-shadow: 0px 2px 10px 2px rgba(0, 0, 0, 0.4);

  > *:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};
  }
`;

const Section = styled.div`
  padding: 20px;
`;

const Skills = () => (
  <Layout>
    <Title light>Experience</Title>
    <Container>
      <Section>{'// Put the experience here'}</Section>
    </Container>
  </Layout>
);

export default Skills;
