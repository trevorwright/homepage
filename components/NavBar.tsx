import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import media from '../styles/media';

const NavContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${({ theme }) => theme.NAV_BAR_HEIGHT}px;
  padding: 0 16px;

  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.grey};

  z-index: 10;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0 auto;
  max-width: ${({ theme }) => theme.APP_MAX_WIDTH}px;
  height: 100%;
`;

const ProfileLayout = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  color: ${({ theme }) => theme.colors.red};

  .syntax {
    color: ${({ theme }) => theme.colors.blue};
  }
`;

const NavHamburger = styled(FontAwesomeIcon).attrs({
  // size: '2x',
  icon: faBars,
})`
  ${media.medium} {
    display: none;
  }
`;

const NavList = styled.ul`
  display: none;

  ${media.medium} {
    display: flex;
  }
`;

const NavItem = styled.li`
  &:not(:last-child) {
    margin-right: 32px;
  }
`;

const NavBar = () => (
  <NavContainer>
    <Nav>
      <ProfileLayout>
        <Logo>
          <span className="syntax">&lt;</span>
          <span>TW</span>
          <span className="syntax">&nbsp;/&gt;</span>
        </Logo>
      </ProfileLayout>
      <NavList>
        <NavItem>About</NavItem>
        <NavItem>Experience</NavItem>
        <NavItem>Skills</NavItem>
      </NavList>
      <NavHamburger></NavHamburger>
    </Nav>
  </NavContainer>
);

export default NavBar;
