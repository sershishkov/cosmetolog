import Head from 'next/head';
import { useEffect } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setNameOfPage } from '../reduxStore/actions/nameOfPage';

import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import { green } from '@material-ui/core/colors';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#fff',
    color: '#000',
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
      <Grid item className={classes.invitation}></Grid>
      <Grid item className={classes.shortInformation}></Grid>
      <Grid item className={classes.description}></Grid>
      <Grid item className={classes.articles}></Grid>
      <Grid item className={classes.sertifications}></Grid>
      <Grid item className={classes.achievments}></Grid>
      <Grid item className={classes.usefulArticles}></Grid>
      <Grid item className={classes.clientReviews}></Grid>

      {/* {state__nameOfPage.pageName && <h2>{state__nameOfPage.pageName}</h2>} */}
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
