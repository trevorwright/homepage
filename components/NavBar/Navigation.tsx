import * as React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';
import media from '../../styles/media';

const DisplayOnMobile = styled.div`
  ${media.medium} {
    display: none;
  }
`;

const DisplayOnDesktop = styled.div`
  display: none;

  ${media.medium} {
    display: initial;
  }
`;

const NavHamburger = styled.button`
  font-size: 24px;
  height: 44px;
  width: 44px;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;

  ${media.medium} {
    display: none;
  }
`;

const MenuList = styled.ul<{ open: boolean }>`
  position: fixed;
  top: ${({ theme }) => theme.NAV_BAR_HEIGHT}px;
  left: 0;
  right: 0;
  display: ${(props) => (props.open ? 'block' : 'none')};
  background: ${({ theme }) => theme.colors.grey};
`;

const MenuItem = styled.li`
  display: flex;
  background: ${({ theme }) => theme.colors.grey};
  padding: 20px;
  cursor: pointer;

  > * {
    text-align: center;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
    font-size: 18px;
    flex: 1;

    &:hover {
      color: ${({ theme }) => theme.colors.blue};
    }
  }

  button {
    border: none;
    background: transparent;
  }
`;

const NavList = styled.ul`
  display: flex;
`;

const NavItem = styled.li`
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 32px;
  }
`;

const NAV_ITEMS = [
  { title: 'About', to: 'about' },
  { title: 'Experience', to: 'experience' },
];

const MobileNavMenu = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <DisplayOnMobile>
        <NavHamburger onClick={() => setOpen(!open)}>
          {open ? (
            <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
          ) : (
            <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
          )}
        </NavHamburger>
        <MenuList open={open}>
          {NAV_ITEMS.map((item) => (
            <MenuItem key={item.title}>
              <Link
                to={item.to}
                offset={-100}
                duration={500}
                smooth={true}
                onClick={() => setOpen(false)}
              >
                {item.title}
              </Link>
            </MenuItem>
          ))}
        </MenuList>
      </DisplayOnMobile>
      <DisplayOnDesktop>
        <NavList>
          {NAV_ITEMS.map((item) => (
            <NavItem key={item.title}>
              <Link to={item.to} offset={-100} duration="500" smooth={true}>
                {item.title}
              </Link>
            </NavItem>
          ))}
        </NavList>
      </DisplayOnDesktop>
    </div>
  );
};

export default MobileNavMenu;
