import React from 'react';
import PropTypes from 'prop-types';

import { UserProvider } from '@auth0/nextjs-auth0';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/styles';
import theme from '../components/layout/Theme';
import { Provider as ReduxProvider } from 'react-redux';
import store from '../reduxStore/store';

import Layout from '../components/layout/layout';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const { user } = pageProps;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <UserProvider user={user}>
      <ReduxProvider store={store}>
        <ThemeProvider theme={theme}>
          <Layout>
            <Head>
              <title>Cosmetolog</title>
              <meta
                name='description'
                content='Cosmetolog - the best solution'
              />
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
      </ReduxProvider>
    </UserProvider>
  );
}
MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
