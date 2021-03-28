import { UserProvider } from '@auth0/nextjs-auth0';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/styles';
import theme from '../components/layout/Theme';

import Layout from '../components/layout/layout';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const { user } = pageProps;
  return (
    <UserProvider user={user}>
      <ThemeProvider theme={theme}>
        <Layout>
          <Head>
            <title>Cosmetolog</title>
            <meta name='description' content='Cosmetolog - the best solution' />
            <meta
              name='viewport'
              content='initial-scale=1.0, width=device-width'
            />
            <link
              rel='stylesheet'
              href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
            />
            <link
              rel='stylesheet'
              href='https://use.fontawesome.com/releases/v5.12.0/css/all.css'
            ></link>
          </Head>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </UserProvider>
  );
}

export default MyApp;
