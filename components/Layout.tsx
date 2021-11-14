import * as React from 'react';
import styled from 'styled-components';

import NavBar from './NavBar';

const Container = styled.div`
  > *:first-child {
    padding-top: ${({ theme }) => theme.NAV_BAR_HEIGHT}px;
  }
`;

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => (
  <>
    <NavBar />
    <Container>{children}</Container>
  </>
);

export default Layout;
