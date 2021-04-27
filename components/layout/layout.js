import MainHeader from './main-header';
import MainFooter from './main-footer';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  layoutContainer: {
    backgroundColor: theme.palette.common.white,
    padding: 0,
    // border: '1px solid #000',
    maxWidth: theme.breakpoints.width('xl'),
  },
  main: {
    paddingTop: 162,
    maxWidth: theme.breakpoints.width('lg'),
    minWidth: theme.breakpoints.width('sm'),
    // border: '1px solid #f00',
    margin: 'auto',
  },
}));

function Layout(props) {
  const classes = useStyles();
  return (
    <Container className={classes.layoutContainer}>
      <MainHeader />
      <Grid>
        <main className={classes.main}>{props.children}</main>
      </Grid>
      <MainFooter />
    </Container>
  );
}

export default Layout;
