import Head from 'next/head';
import { useEffect } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setNameOfPage } from '../reduxStore/actions/nameOfPage';

import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Invitation from '../components/landing/Invitation';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#FFFDFA',
  },
}));

function Home({
  setNameOfPage,

  state__nameOfPage,
}) {
  const classes = useStyles();
  useEffect(() => {
    setNameOfPage('this is main page from state redux');
  }, [setNameOfPage]);
  return (
    <Grid
      container
      direction='column'
      justify='flex-start'
      className={classes.root}
    >
      <Head>
        <title>Cosmetolog</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Invitation />
    </Grid>
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
