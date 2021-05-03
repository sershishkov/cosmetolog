import React, { useEffect } from 'react';

import { makeStyles, useTheme } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Button from '@material-ui/core/Button';

import CarouselSwiper, { mySwiper } from './CarouselSwiper';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.white,
    padding: '3rem 1rem',
    display: 'flex',
    flexDirection: 'column',
  },
  rootItem: {
    marginBottom: '2rem',
  },
  rootItem__main: {},
  contMain: {
    width: '100%',
  },
  mainItem: {},
  mainItem_slider: {
    height: 700,
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      height: 700,
    },
  },

  mainItem_statistics: {
    height: 700,
    [theme.breakpoints.down('sm')]: {
      height: 300,
    },
  },
  cont_statistics: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  statistic_row: {
    width: '100%',
  },
  cont_Description: {
    height: '100%',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  description_wrap: {},
  cont_Content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  content_item_header: {
    '& h3': {
      fontWeight: '700',
    },
  },
  content_item_description: {
    '& h6': {
      fontWeight: '600',
    },
  },

  contAction: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const Expertise = () => {
  const classes = useStyles();
  useEffect(() => {
    mySwiper.init();
  }, [mySwiper]);
  return (
    <Grid container className={classes.root}>
      <Grid item className={`${classes.rootItem} ${classes.rootItem__header}`}>
        <Typography variant='h1'>Экспертиза</Typography>
      </Grid>

      <Grid item className={`${classes.rootItem} ${classes.rootItem__main}`}>
        <Grid container className={classes.contMain}>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            className={`${classes.mainItem} ${classes.mainItem_slider}`}
          >
            <CarouselSwiper />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            className={`${classes.mainItem} ${classes.mainItem_statistics}`}
          >
            <Grid container className={`${classes.cont_statistics}`}>
              <Grid item className={`${classes.statistic_row}`}>
                <Grid container className={`${classes.cont_Description}`}>
                  <Grid item className={`${classes.description_wrap}`}>
                    <Grid container className={`${classes.cont_Content}`}>
                      <Grid
                        item
                        className={`${classes.content_item} ${classes.content_item_header}`}
                      >
                        <Typography variant='h3'>30 лет</Typography>
                      </Grid>
                      <Grid
                        item
                        className={`${classes.content_item} ${classes.content_item_description}`}
                      >
                        <Typography variant='h6'>Стаж работы</Typography>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item className={`${classes.description_wrap}`}>
                    <Grid container className={`${classes.cont_Content}`}>
                      <Grid
                        item
                        className={`${classes.content_item} ${classes.content_item_header}`}
                      >
                        <Typography variant='h3'>253</Typography>
                      </Grid>
                      <Grid
                        item
                        className={`${classes.content_item} ${classes.content_item_description}`}
                      >
                        <Typography variant='h6'>Учеников</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item className={`${classes.statistic_row}`}>
                <Grid container className={`${classes.cont_Description}`}>
                  <Grid item className={`${classes.description_wrap}`}>
                    <Grid container className={`${classes.cont_Content}`}>
                      <Grid
                        item
                        className={`${classes.content_item} ${classes.content_item_header}`}
                      >
                        <Typography variant='h3'>1 000+</Typography>
                      </Grid>
                      <Grid
                        item
                        className={`${classes.content_item} ${classes.content_item_description}`}
                      >
                        <Typography variant='h6'>Клиентских визитов</Typography>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item className={`${classes.description_wrap}`}>
                    <Grid container className={`${classes.cont_Content}`}>
                      <Grid
                        item
                        className={`${classes.content_item} ${classes.content_item_header}`}
                      >
                        <Typography variant='h3'>1 000+</Typography>
                      </Grid>
                      <Grid
                        item
                        className={`${classes.content_item} ${classes.content_item_description}`}
                      >
                        <Typography variant='h6'>Красивых губ</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid item className={`${classes.rootItem} ${classes.rootItem__action}`}>
        <Grid container className={classes.contAction}>
          <Grid item className={classes.actionMore}>
            <Button>
              Смотреть все сертификаты <ArrowRightAltIcon />{' '}
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Expertise;
