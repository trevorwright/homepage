import type { AppProps } from 'next/app';
import ThemeProvider from '../styles/ThemeProvider';
import GlobalStyle from '../styles/global';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Layout>
        <GlobalStyle />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
