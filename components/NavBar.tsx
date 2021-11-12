import Image from 'next/image';
import styled from 'styled-components';
import profileSm from '../public/images/profile-small.png';

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

const ProfilePicture = styled(Image).attrs({
  src: profileSm,
  height: '50',
  width: '50',
})`
  border-radius: 50%;
`;

const Name = styled.div`
  margin-left: 16px;

  em {
    color: ${({ theme }) => theme.colors.red};
  }
`;

const NavList = styled.ul`
  display: flex;
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
        <ProfilePicture />
        <Name>
          Trevor <em>Wright</em>
        </Name>
      </ProfileLayout>
      <NavList>
        <NavItem>About</NavItem>
        {/* <NavItem>Experience</NavItem>
        <NavItem>Skills</NavItem> */}
      </NavList>
    </Nav>
  </NavContainer>
);

export default NavBar;
