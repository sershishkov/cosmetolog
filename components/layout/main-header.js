import { useState } from 'react';
import { useUser } from '@auth0/nextjs-auth0';
import Link from 'next/link';

import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import { green } from '@material-ui/core/colors';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#fff',
    color: '#000',
  },
  appBarContainer: {
    height: 176,
  },
  logoRow: {
    // border: '1px solid #ffff00',
    height: 130,
  },
  logoRow__Logo: {
    // border: '1px solid #00ff00',
  },
  logoRow__LogoImage: {
    height: 59,
    width: 391,
  },
  logoRow__Question: {},
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
  logoRow__Social: {},
  logoRow__Social_Links: {},
  logoRow__Social_Phone: {
    padding: '0.5rem',
  },
  logoRow__MenuButtonWrap: {},
  logoRow__MenuButton: {
    color: green[500],
  },
  logoRow__Authenticate: {},
  logoRow__AuthenticateButtons: {},
  logoRow__AuthenticateInfo: {},
  menuRow: {
    // border: '1px solid #ff0000',
    height: 44,
  },
}));

function MainHeader() {
  const { user, error, isLoading } = useUser();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>{error.message}</div>;

  // console.log(user);
  const classes = useStyles();

  return (
    <AppBar position='fixed' className={classes.appBar}>
      <Toolbar>
        <Grid
          container
          direction='column'
          justify='flex-start'
          className={classes.appBarContainer}
        >
          <Grid item className={classes.logoRow}>
            <Grid
              container
              justify='space-around'
              alignItems='center'
              direction='row'
              style={{ height: '100%' }}
            >
              <Grid item className={classes.logoRow__Logo}>
                <Grid
                  container
                  justify='center'
                  alignItems='center'
                  direction='row'
                >
                  <Grid item component={Link} href='/'>
                    <a>
                      <img
                        src='/images/logo/logo3x.png'
                        alt='logo'
                        className={classes.logoRow__LogoImage}
                      />
                    </a>
                  </Grid>
                </Grid>
              </Grid>
              {/* <Hidden mdDown> */}
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
              {/* </Hidden> */}
              {/* <Hidden mdDown> */}
              <Grid item className={classes.logoRow__Social}>
                <Grid container direction='column' justify='space-between'>
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
                    <Link href='/'>
                      <a>
                        <Icon
                          className='fab fa-vk'
                          style={{ fontSize: 28, color: green[600] }}
                        />
                      </a>
                    </Link>
                  </Grid>
                  <Grid item className={classes.logoRow__Social_Phone}>
                    <Link href='tel:+380679173017'>
                      <a>
                        <Grid container justify='center' alignItems='center'>
                          <Grid item>
                            <Icon
                              className='fab fa-whatsapp'
                              style={{ fontSize: 28, color: green[600] }}
                            />
                          </Grid>
                          <Grid item>(067) 917-30-17</Grid>
                        </Grid>
                      </a>
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
              {/* </Hidden> */}
              <Grid item className={classes.logoRowAuthenticate}>
                <Grid container>
                  {/* <Grid item className={classes.logoRowAuthenticateButtons}>
                    
                  </Grid> */}
                  <Grid item className={classes.logoRowAuthenticateInfo}>
                    {user && (
                      <div>
                        <Avatar src={user.picture} alt={user.name} />
                        <Typography variant='body1'>{user.name}</Typography>

                        <Link href='/api/auth/logout'>
                          <a>
                            <DirectionsRunIcon
                              style={{ fontSize: 20, color: green[600] }}
                            />
                          </a>
                        </Link>
                      </div>
                    )}
                    {!user && (
                      <Link href='/api/auth/login'>
                        <a>
                          <DirectionsRunIcon
                            style={{ fontSize: 20, color: green[600] }}
                          />
                        </a>
                      </Link>
                    )}
                  </Grid>
                </Grid>
              </Grid>
              {/* <Hidden mdUp> */}
              <Grid item className={classes.logoRow__MenuButtonWrap}>
                <IconButton
                  className={classes.logoRow__MenuButton}
                  aria-label='menu'
                >
                  <MenuIcon />
                </IconButton>
              </Grid>
              {/* </Hidden> */}
            </Grid>
          </Grid>

          <Grid item className={classes.menuRow}>
            <Grid
              container
              direction='row'
              justify='space-around'
              alignItems='center'
            >
              <Grid item>
                <Button
                  aria-controls='simple-menu'
                  aria-haspopup='true'
                  onClick={handleClick}
                  style={{ fontSize: '1.05rem', fontWeight: 700 }}
                >
                  Услуги
                </Button>
                <Menu
                  id='simple-menu'
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>
                    <Link href='/service1'>
                      <a>
                        <Typography variant='h6'>Услуга1</Typography>
                      </a>
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Link href='/service2'>
                      <a>
                        <Typography variant='h6'>Услуга2</Typography>
                      </a>
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Link href='/service3'>
                      <a>
                        <Typography variant='h6'>Услуга3</Typography>
                      </a>
                    </Link>
                  </MenuItem>
                </Menu>
              </Grid>
              <Grid item>
                <Link href='/teaching'>
                  <a>
                    <Typography variant='h6'>Обучение</Typography>
                  </a>
                </Link>
              </Grid>
              <Grid item>
                <Link href='/useful-info'>
                  <a>
                    <Typography variant='h6'>Полезная информация</Typography>
                  </a>
                </Link>
              </Grid>
              <Grid item>
                <Link href='/contacts'>
                  <a>
                    <Typography variant='h6'>Контакты</Typography>
                  </a>
                </Link>
              </Grid>
              <Grid item>
                <Link href='/map-of-site'>
                  <a>
                    <Typography variant='h6'>Карта сайта</Typography>
                  </a>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default MainHeader;
