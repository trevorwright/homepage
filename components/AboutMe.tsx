import styled from 'styled-components';
import Image from 'next/image';
import profileImg from '../public/images/profile.png';

import Title from './Title';

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
`;

const PositionedTitle = styled(Title)`
  grid-column: 1 / span 2;
`;

const ProfileContainer = styled.div`
  justify-self: center;
  align-self: start;
  height: 200px;
  width: 200px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
`;

const ProfileImage = styled(Image).attrs({ height: 200, width: 200 })`
  border-radius: 8px;
`;

const Content = styled.div`
  p {
    line-height: 1.3;
  }

  p:not(:last-child) {
    margin-bottom: 24px;
  }
`;

const AboutMe = () => {
  return (
    <Layout>
      <PositionedTitle>About Me</PositionedTitle>
      <ProfileContainer>
        <ProfileImage src={profileImg} alt="Head shot of Trevor"></ProfileImage>
      </ProfileContainer>
      <Content>
        <p>
          I have been developing modern software solutions for the last decade
          on multiple platforms using a wide variety of technologies. Mentoring
          and leadership play a huge part in my career, helping team members
          fine tune and advance their skill set. Learning is a massive passion
          as there is always a new approach, point of view, or technology to
          improve the work you do.
        </p>

        <p>
          I aim to continually push our industry forward by enabling teams to do
          amazing work more efficiently than ever and find new solutions for the
          problems we face. The world of web technologies is rapidly evolving
          and I strive to stay on the cutting edge of it.
        </p>

        <p>
          Outside of work I love spending time with my beautiful wife, embarking
          on any adventure we can find together. I enjoy the Canadian summers on
          the golf course, and the winters on the ski slopes. I also love
          cooking as a hobby and as a means of avoiding starvation.
        </p>
      </Content>
    </Layout>
  );
};

export default AboutMe;
