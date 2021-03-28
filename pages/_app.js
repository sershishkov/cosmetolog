import { UserProvider } from '@auth0/nextjs-auth0';
import Head from 'next/head';

import Layout from '../components/layout/layout';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const { user } = pageProps;
  return (
    <UserProvider user={user}>
      <Layout>
        <Head>
          <title>Cosmetolog</title>
          <meta name='description' content='Cosmetolog - the best solution' />
          <meta
            name='viewport'
            content='initial-scale=1.0, width=device-width'
          />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  );
}

export default MyApp;
