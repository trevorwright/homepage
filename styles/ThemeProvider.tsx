import * as React from 'react';
import { ThemeProvider } from 'styled-components';

const APP_MAX_WIDTH = 1200;

const NAV_BAR_HEIGHT = 70;

/**
 * ! Warning
 *
 * This type is in `styled-components.d.ts`. It must be updated
 * there when changing it to get proper type safety for the theme
 * provider.
 */
const THEME = {
  colors: {
    red: '#E06c75',
    green: '#98c379',
    yellow: '#e5c07b',
    blue: '#61afef',
    purple: '#c678dd',
    cyan: '#56b6c2',
    grey: '#282c34',
    lightGrey: '#abb2bf',
    white: '#fff9f7',
    macRed: '#ED6251',
    macYellow: '#F6B841',
    macGreen: '#53BD47',
  },
  APP_MAX_WIDTH,
  NAV_BAR_HEIGHT,
};

type Props = {
  children: React.ReactNode;
};

const PopulatedThemeProvider = ({ children }: Props) => (
  <ThemeProvider theme={THEME}>{children}</ThemeProvider>
);

export default PopulatedThemeProvider;
