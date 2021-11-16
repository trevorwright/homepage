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

  ${media.small} {
    margin-bottom: 0;
  }
`;

const ContactLayout = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(3, auto);
`;

const ContactIcon = styled(FontAwesomeIcon).attrs({ size: '2x' })`
  transition: color 0.3s ease;
  color: ${({ theme }) => theme.colors.white};

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
        <a
          href="https://www.linkedin.com/in/trevor-d-wright/"
          aria-label="Visit Trevor's LinkedIn profile"
        >
          <ContactIcon icon={faLinkedin as IconProp}></ContactIcon>
        </a>
        <a
          href="https://twitter.com/tdwright_"
          aria-label="Visit Trevor's Twitter profile"
        >
          <ContactIcon
            icon={faTwitterSquare as IconProp}
            size="2x"
          ></ContactIcon>
        </a>
        <a
          href="mailto:wright22@gmail.com"
          aria-label="Send an e-mail to Trevor"
        >
          <ContactIcon icon={faEnvelopeSquare} size="2x"></ContactIcon>
        </a>
      </ContactLayout>
    </Layout>
  </Container>
);

export default Footer;
