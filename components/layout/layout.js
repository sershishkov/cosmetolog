import MainHeader from './main-header';
import MainFooter from './main-footer';

import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  layoutContainer: {
    // border: '1px solid #00ff00',
  },
  main: {
    marginTop: 176,
  },
}));

function Layout(props) {
  const classes = useStyles();
  return (
    <Container maxWidth='lg' className={classes.layoutContainer}>
      <MainHeader />
      <main className={classes.main}>{props.children}</main>
      <MainFooter />
    </Container>
  );
}

export default Layout;
