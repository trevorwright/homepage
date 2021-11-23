import styled from 'styled-components';
import Title from './Title';

const Section = styled.section`
  padding: 60px 20px 300px 20px;
  font-size: 18px;
  background: ${({ theme }) => theme.colors.grey};
  color: ${({ theme }) => theme.colors.white};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    line-height: 1.5;
    max-width: 800px;
  }

  p:not(:last-child) {
    margin-bottom: 24px;
  }
`;

const AboutMe = () => {
  return (
    <Section>
      <Title light id="about">
        About
      </Title>
      <Content>
        <p>
          I have been developing modern software solutions for the last decade
          on multiple platforms using a wide variety of technologies. Mentoring
          and leadership play a huge part in my career, helping team members
          fine tune and advance their skill set. Learning is a massive passion
          as there is always a new approach, point of view, or technology to
          improve the work we do.
        </p>

        <p>
          I aim to continually push our industry forward by enabling teams to do
          amazing work more efficiently than ever and find new solutions for the
          problems we face. The world of web technologies is rapidly evolving
          and I strive to stay on the cutting edge of it.
        </p>
      </Content>
    </Section>
  );
};

export default AboutMe;
