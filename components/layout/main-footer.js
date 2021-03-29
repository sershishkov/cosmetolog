import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import { green } from '@material-ui/core/colors';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from 'next/link';

import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: '#fff',
    color: '#000',
    height: 182,
  },
  logoRow__Question_Link: {
    color: '#ffffff',
    padding: '0.5rem',
    borderRadius: '20px',
    width: '185px',
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[400],
    },
  },
}));

function MainFooter() {
  const classes = useStyles();
  return (
    <footer>
      <Grid
        container
        direction='row'
        justify='space-around'
        alignItems='center'
        className={classes.footer}
      >
        <Grid item className={classes.logoRow__Logo}>
          <Grid
            container
            justify='center'
            alignItems='left'
            direction='column'
            style={{ height: '100%' }}
          >
            <Grid item>
              <Typography variant='h3' style={{ color: green[600] }}>
                Ella *{' '}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant='h3' style={{ color: green[600] }}>
                Todosienko{' '}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant='body1'>
                блог о красоте эстетической и духовной{' '}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          component={Link}
          href='/questions'
          className={classes.logoRow__Question}
        >
          <Button
            variant='contained'
            className={classes.logoRow__Question_Link}
          >
            Задать вопрос
          </Button>
        </Grid>
        <Grid item className={classes.logoRow__Social}>
          <Grid
            container
            justify='center'
            alignItems='center'
            direction='column'
            style={{ height: '100%' }}
          >
            <Grid item className={classes.logoRow__Social_Links}>
              <Link href='/'>
                <a>
                  <Icon
                    className='fab fa-facebook-square'
                    style={{ fontSize: 28, color: green[600] }}
                  />
                </a>
              </Link>
              <Link href='/'>
                <a>
                  <Icon
                    className='fab fa-viber'
                    style={{ fontSize: 28, color: green[600] }}
                  />
                </a>
              </Link>
              <Link href='/'>
                <a>
                  <Icon
                    className='fab fa-telegram-plane'
                    style={{ fontSize: 28, color: green[600] }}
                  />
                </a>
              </Link>

              <Link href='/'>
                <a>
                  <Icon
                    className='fab fa-whatsapp'
                    style={{ fontSize: 28, color: green[600] }}
                  />
                </a>
              </Link>
            </Grid>
            <Grid item className={classes.logoRow__Social_Email}>
              <Typography variant='h6'>todosienko@gmail.com</Typography>
            </Grid>
            <Grid item className={classes.logoRow__Social_Phone}>
              <Typography variant='h6'>(067) 917-30-17</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </footer>
  );
}

export default MainFooter;
