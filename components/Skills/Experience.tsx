import styled from 'styled-components';
import Image from 'next/image';
import media from '../../styles/media';

const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 8px;
  grid-template-areas:
    'image header'
    'content content';
  padding: 12px;

  ${media.small} {
    grid-column-gap: 20px;
    padding: 20px;
  }

  ${media.medium} {
    grid-template-areas:
      'image header'
      'image content';
  }
`;

const LogoWrapper = styled.div`
  position: relative;
  grid-area: image;
  height: 35px;
  width: 35px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.4);

  ${media.small} {
    height: 50px;
    width: 50px;
  }
`;

const Header = styled.div`
  grid-area: header;
`;

const ContentLayout = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: content;
`;

const RoleTitle = styled.h2`
  font-size: 20px;
  line-height: 1.3;
  font-weight: 500;
  margin-bottom: 12px;

  ${media.small} {
    font-size: 24px;
  }
`;

const Employer = styled.h3`
  font-size: 16px;
  margin-bottom: 4px;

  ${media.small} {
    font-size: 18px;
  }
`;

const DateRange = styled.div`
  font-size: 14px;
  opacity: 0.6;

  ${media.small} {
    font-size: 16px;
  }
`;

const RoleInformation = styled.div`
  font-size: 14px;
  margin-top: 16px;
  line-height: 1.5;

  p {
    margin-bottom: 16px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 8px;
    font-weight: 700;
  }

  li {
    list-style-type: disc;
    list-style-position: inside;
  }

  > *:last-child {
    margin-bottom: 0;
  }

  ${media.small} {
    font-size: 18px;
  }
`;

type Props = {
  roleTitle: string;
  employer: string;
  startDate: string;
  endDate: string;
  logo: StaticImageData;
  children?: any;
};

const Experience = ({
  roleTitle,
  employer,
  startDate,
  endDate,
  logo,
  children,
}: Props) => (
  <Container>
    <LogoWrapper>
      <Image src={logo} alt="" layout="fill"></Image>
    </LogoWrapper>
    <Header>
      <RoleTitle>{roleTitle}</RoleTitle>
      <Employer>{employer}</Employer>
      <DateRange>{`${startDate} - ${endDate}`}</DateRange>
    </Header>
    <ContentLayout>
      <RoleInformation>{children}</RoleInformation>
    </ContentLayout>
  </Container>
);

export default Experience;
