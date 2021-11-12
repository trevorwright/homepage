import { createGlobalStyle } from 'styled-components';
import reset from './reset';
import media from './media';

const GlobalStyle = createGlobalStyle`
  ${reset};

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    background: ${({ theme }) => theme.colors.white};
    font-size: 18px;

    ${media.medium} {
      font-size: 24px;
    }
  }
`;

export default GlobalStyle;
