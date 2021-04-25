import MainHeader from './main-header';
import MainFooter from './main-footer';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  layoutContainer: {
    // border: '1px solid #00ff00',
    padding: 0,
  },
  main: {
    paddingTop: 162,
    // border: '1px solid #000',
    margin: 'auto',
  },
}));

function Layout(props) {
  const classes = useStyles();
  return (
    <Container maxwidth='xl' className={classes.layoutContainer}>
      <MainHeader />
      <Grid maxwidth='md'>
        <main className={classes.main}>{props.children}</main>
      </Grid>
      <MainFooter />
    </Container>
  );
}

export default Layout;
