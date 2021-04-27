import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from 'next/link';

import Icon from '@material-ui/core/Icon';
import PhoneIcon from '@material-ui/icons/Phone';

const useStyles = makeStyles((theme) => ({
  footer: {
    maxWidth: theme.breakpoints.width('xl'),
    // border: '1px solid #f00',
    backgroundColor: theme.palette.common.white,
    height: 264,
  },
  footer_Item: {},
  footer_contContacts_phones: {},
  footer_contContacts_phonesCont: {},
  footer_contContacts_phonesCont_item: {
    '& img': {
      width: 20,
      height: 20,
      marginRight: 5,
      marginLeft: 5,
    },
  },
  drawerItem_icon: {
    fontSize: 20,
    color: theme.palette.common.colorGreen,
  },
  footer_contMap_wrapImg_img: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    '& img': {
      width: '100%',
      height: '100%',
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
        justify='space-between'
        alignItems='center'
        className={classes.footer}
      >
        <Grid
          item
          sm={6}
          className={classes.footer_Item}
          style={{ height: '100%' }}
        >
          <Grid
            container
            direction='column'
            justify='space-around'
            alignItems='flex-start'
            className={classes.footer_contContacts}
            style={{ height: '100%' }}
          >
            <Grid item>
              <Typography variant='h1'>Контакты</Typography>
            </Grid>
            <Grid item>
              <Typography variant='body1'>
                Адрес:г.Запорожье,ул. Лесная,33б, оф.45
              </Typography>
            </Grid>
            <Grid item className={classes.footer_contContacts_phones}>
              <Grid
                container
                className={classes.footer_contContacts_phonesCont}
              >
                <Grid
                  item
                  className={classes.footer_contContacts_phonesCont_item}
                >
                  <img src='/images/footer/kievstar.png' alt='kievstar' />
                  <Typography variant='body1' component='span'>
                    380679173017
                  </Typography>
                </Grid>
                <Grid
                  item
                  className={classes.footer_contContacts_phonesCont_item}
                >
                  <img src='/images/footer/lifecell_logo.png' alt='lifecell' />
                  <Typography variant='body1' component='span'>
                    380639173017
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item className={classes.footer_contContacts_phones}>
              <Grid
                container
                className={classes.footer_contContacts_phonesCont}
              >
                <Grid
                  item
                  className={classes.footer_contContacts_phonesCont_item}
                >
                  <PhoneIcon className={classes.drawerItem_icon} />
                  <Typography variant='body1' component='span'>
                    380679173017
                  </Typography>
                </Grid>
                <Grid
                  item
                  className={classes.footer_contContacts_phonesCont_item}
                >
                  <img src='/images/footer/vodafone-sim.png' alt='lifecell' />
                  <Typography variant='body1' component='span'>
                    380639173017
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item style={{ width: '100%' }}>
              <Grid
                container
                justify='flex-start'
                spacing={2}
                style={{ width: '100%' }}
              >
                <Grid item>
                  <Link href='/'>
                    <a>
                      <Icon
                        className={`fab fa-facebook-square ${classes.drawerItem_icon}`}
                      />
                    </a>
                  </Link>
                </Grid>
                <Grid item>
                  <Link href='/'>
                    <a>
                      <Icon
                        className={`fab fa-viber ${classes.drawerItem_icon}`}
                      />
                    </a>
                  </Link>
                </Grid>
                <Grid item>
                  <Link href='/'>
                    <a>
                      <Icon
                        className={`fab fa-telegram-plane ${classes.drawerItem_icon}`}
                      />
                    </a>
                  </Link>
                </Grid>
                <Grid item>
                  <Link href='/'>
                    <a>
                      <Icon
                        className={`fab fa-whatsapp ${classes.drawerItem_icon}`}
                      />
                    </a>
                  </Link>
                </Grid>
                <Grid item>
                  <Link href='/'>
                    <a>
                      <Icon
                        className={`fab fa-vk ${classes.drawerItem_icon}`}
                      />
                    </a>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sm={6} className={classes.footer_Item}>
          <Grid
            container
            direction='column'
            justify='center'
            alignItems='center'
            className={classes.footer_contMap}
          >
            <Grid item className={classes.footer_contMap_wrapImg}>
              <img
                src='/images/footer/map.png'
                alt='map'
                className={classes.footer_contMap_wrapImg_img}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </footer>
  );
}

export default MainFooter;
