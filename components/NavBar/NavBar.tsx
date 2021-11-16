import styled from 'styled-components';
import media from '../../styles/media';
import Navigation from './Navigation';

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
      <Navigation></Navigation>
    </Nav>
  </NavContainer>
);

export default NavBar;
