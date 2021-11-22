import * as React from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';
import media from '../../styles/media';

const Layout = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const MobileMenu = styled.div`
  ${media.medium} {
    display: none;
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

const HamburgerIconAnimation = styled.div<{ open: boolean }>`
  display: grid;
  height: 100%;
  justify-items: center;
  align-items: center;

  > * {
    transition: opacity 300ms cubic-bezier(0.075, 0.82, 0.165, 1);
    grid-row: 1;
    grid-column: 1;
  }

  .open {
    opacity: 0;
    ${(props) =>
      !props.open &&
      css`
        opacity: 1;
      `}
  }

  .close {
    opacity: 0;
    ${(props) =>
      props.open &&
      css`
        opacity: 1;
      `}
  }
`;

const MenuList = styled.ul<{ open: boolean }>`
  position: fixed;
  top: ${({ theme }) => theme.NAV_BAR_HEIGHT}px;
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.colors.grey};
  opacity: 0;
  transform: scaleY(0);
  transition: all 300ms ease-in-out;
  transform-origin: top;

  ${(props) =>
    props.open &&
    css`
      transform: scaleY(1);
      opacity: 1;
    `};
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
  display: none;
  cursor: pointer;

  ${media.medium} {
    display: flex;
  }
`;

const NavItem = styled.li`
  position: relative;

  &:not(:last-child) {
    margin-right: 32px;
  }

  &:hover::after {
    transform: scaleX(1);
    opacity: 1;
  }

  &::after {
    position: absolute;
    content: '';
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 2px;
    background: ${({ theme }) => theme.colors.blue};
    transition: all 300ms ease;
    transform: scaleX(0);
    opacity: 0;
    transform-origin: center;
  }
`;

const NAV_ITEMS = [
  { title: 'About', to: 'about' },
  { title: 'Experience', to: 'experience' },
];

const MobileNavMenu = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <Layout>
      <MobileMenu>
        <NavHamburger onClick={() => setOpen(!open)}>
          <HamburgerIconAnimation open={open}>
            <>
              <FontAwesomeIcon
                className="close"
                icon={faTimes}
              ></FontAwesomeIcon>
              <FontAwesomeIcon className="open" icon={faBars}></FontAwesomeIcon>
            </>
          </HamburgerIconAnimation>
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
      </MobileMenu>
      <NavList>
        {NAV_ITEMS.map((item) => (
          <NavItem key={item.title}>
            <Link to={item.to} offset={-100} duration={500} smooth={true}>
              {item.title}
            </Link>
          </NavItem>
        ))}
      </NavList>
    </Layout>
  );
};

export default MobileNavMenu;
