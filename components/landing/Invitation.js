import React from 'react';

import { makeStyles, useTheme } from '@material-ui/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 30,
    backgroundColor: theme.palette.common.white,
    height: 918,
    overflow: 'hidden',
    maxWidth: theme.breakpoints.width('lg'),
  },
  Button: {
    backgroundColor: theme.palette.common.colorGreen,
    color: theme.palette.common.white,
    fontSize: '0.75rem',
    '&:hover': {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.colorGreen,
      border: `1px solid ${theme.palette.common.colorGreen}`,
    },
  },
  wrapInvite: {
    height: '100%',
  },
  contInvite: {
    height: '100%',
  },
  wrapPhoto: {
    position: 'relative',
    height: '100%',
    overflow: 'hidden',

    '& img': {
      width: '100%',
      height: 1029,
      borderRadius: '194px 194px 0px 0px',
    },
    '& div': {
      position: 'absolute',
      top: -20,
      left: 0,
      width: '100%',
      height: '110%',
      background:
        'radial-gradient( rgba(255, 255, 255, 0)  , rgba(255, 251, 244, 0.87) ) ',
    },
  },
}));

const Invitation = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid container className={classes.root}>
      <Grid item sm={12} md={6} className={classes.wrapInvite}>
        <Grid
          container
          direction='column'
          justify='center'
          alignItems='flex-start'
          spacing={2}
          className={classes.contInvite}
        >
          <Grid item>
            <Typography variant='h1'>Элла Тодосиенко</Typography>
          </Grid>
          <Grid item>
            <Typography variant='body1' component='p'>
              Частный косметолог с более чем 30 годами международного
              опыта,Частный косметолог с более чем 30 годами международного
              опыта
            </Typography>
          </Grid>
          <Grid item>
            <Button className={classes.Button}>Записаться на приём</Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item sm={12} md={6} className={classes.wrapPhoto}>
        <img src='/images/home/invitation.jpg' alt='invitation' />
        <div className={classes.wrapPhoto_Gradient}></div>
      </Grid>
    </Grid>
  );
};

export default Invitation;
