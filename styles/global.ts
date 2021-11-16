import { createGlobalStyle } from 'styled-components';
import reset from './reset';

const FONT_FAMILY = `'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`;

const GlobalStyle = createGlobalStyle`
  ${reset};

  body {
    font-family: ${FONT_FAMILY};
    background: ${({ theme }) => theme.colors.white};
    font-size: 18px;
  }

  button {
    font-family: ${FONT_FAMILY};
  }
`;

export default GlobalStyle;
