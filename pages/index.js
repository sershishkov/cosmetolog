import Head from 'next/head';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setNameOfPage } from '../reduxStore/actions/nameOfPage';

function Home({
  setNameOfPage,

  state__nameOfPage,
}) {
  useEffect(() => {
    setNameOfPage('this is main page from state redux');
  }, [setNameOfPage]);
  return (
    <div>
      <Head>
        <title>Cosmetolog</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {state__nameOfPage.pageName && <h2>{state__nameOfPage.pageName}</h2>}
    </div>
  );
}

Home.propTypes = {
  setNameOfPage: PropTypes.func.isRequired,

  state__nameOfPage: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  state__nameOfPage: state.nameOfPage,
});

export default connect(mapStateToProps, {
  setNameOfPage,
})(Home);
