import Head from 'next/head';
import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { setNameOfPage } from '../reduxStore/actions/nameOfPage';

import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Invitation from '../components/landing/Invitation';
import Services from '../components/landing/Services';
import Expertise from '../components/landing/Expertise';
import Reviews from '../components/landing/Reviews';
import Blog from '../components/landing/Blog';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#FFFDFA',
  },
}));

function Home() {
  const classes = useStyles();
  const dispatch = useDispatch();
  // const state__nameOfPage = useSelector((state) => state.nameOfPage.pageName);

  useEffect(() => {
    dispatch(setNameOfPage('Home page'));
  }, [dispatch]);
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
      <Services />
      <Expertise />
      <Reviews />
      <Blog />
    </Grid>
  );
}

export default Home;
