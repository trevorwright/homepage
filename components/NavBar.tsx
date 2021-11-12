import Image from 'next/image';
import styled from 'styled-components';
import profileSm from '../public/images/profile-small.png';
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

const ProfilePicture = styled.div`
  display: none;
  border-radius: 50%;
  margin-right: 16px;
  overflow: hidden;

  ${media.medium} {
    display: initial;
  }
`;

const Name = styled.div`
  em {
    color: ${({ theme }) => theme.colors.red};
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
        <ProfilePicture>
          <Image src={profileSm} height="50" width="50" alt=""></Image>
        </ProfilePicture>
        <Name>
          Trevor <em>Wright</em>
        </Name>
      </ProfileLayout>
      <NavList>
        <NavItem>About</NavItem>
        <NavItem>Experience</NavItem>
        <NavItem>Skills</NavItem>
      </NavList>
    </Nav>
  </NavContainer>
);

export default NavBar;
