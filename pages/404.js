import { makeStyles } from '@material-ui/styles';
import Image from 'next/image';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '400px',
  },
  wrapImg: {},
}));

function My404Page() {
  const classes = useStyles();
  return (
    <Grid
      container
      className={classes.root}
      justify='center'
      alignItems='center'
    >
      <Grid item>
        <Image src='/images/404/404_2.jpg' width={300} height={300} />
      </Grid>
    </Grid>
  );
}

export default My404Page;
