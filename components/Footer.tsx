import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faTwitterSquare,
} from '@fortawesome/fontawesome-free-brands';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import media from '../styles/media';

const Container = styled.div`
  background: ${({ theme }) => theme.colors.grey};
  color: ${({ theme }) => theme.colors.white};
`;

const Layout = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 30px 20px;
  max-width: ${({ theme }) => theme.APP_MAX_WIDTH}px;
  margin: 0 auto;

  ${media.small} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const CraftedBy = styled.h4`
  margin-bottom: 12px;
  text-align: center;

  > *:not(:last-child) {
    margin-bottom: 8px;
  }

  .highlight-red {
    color: ${({ theme }) => theme.colors.red};
  }

  .highlight-blue {
    color: ${({ theme }) => theme.colors.blue};
  }

  ${media.medium} {
    display: flex;

    > *:not(:last-child) {
      margin-right: 8px;
    }
  }
`;

const ContactLayout = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(3, auto);
`;

const ContactIcon = styled(FontAwesomeIcon).attrs({ size: '2x' })`
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.blue};
  }
`;

const Footer = () => (
  <Container>
    <Layout>
      <CraftedBy>
        <div>
          Handcrafted by Trevor <span className="highlight-red">Wright</span>
        </div>
        <div>
          <span className="highlight-blue">©</span>&nbsp;2021
        </div>
      </CraftedBy>
      <ContactLayout>
        <ContactIcon icon={faLinkedin as IconProp}></ContactIcon>
        <ContactIcon icon={faTwitterSquare as IconProp} size="2x"></ContactIcon>
        <ContactIcon icon={faEnvelopeSquare} size="2x"></ContactIcon>
      </ContactLayout>
    </Layout>
  </Container>
);

export default Footer;
