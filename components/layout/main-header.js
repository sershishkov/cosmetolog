import React, { useState, useEffect } from 'react';
import { useUser } from '@auth0/nextjs-auth0';
import Link from 'next/link';

import Image from 'next/image';

import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
// import Hidden from '@material-ui/core/Hidden';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
// import SVG_LogoColor from '../../assets/svg/SVG_LogoColor';

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import InfoIcon from '@material-ui/icons/Info';
import InboxIcon from '@material-ui/icons/Inbox';
import WorkIcon from '@material-ui/icons/Work';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import RateReviewIcon from '@material-ui/icons/RateReview';
import ContactsIcon from '@material-ui/icons/Contacts';
import MoreIcon from '@material-ui/icons/More';
import PhoneIcon from '@material-ui/icons/Phone';

// import Icon from '@material-ui/core/Icon';

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.white,
    padding: 0,
  },
  Toolbar: {
    padding: 0,
  },
  appBarContainer: {
    backgroundColor: theme.palette.common.white,
  },
  rowTop: {
    backgroundColor: 'rgba(255, 253, 250, 0.24)',
    height: 88,
  },
  rowTop_wrapLeft: {
    height: '100%',
  },
  rowTop_containerLeft: {
    height: '100%',
  },

  logo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo_menu_container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo_img: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '& a': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    '& img': {},
  },

  logo_menu_drower_icon: {
    display: 'none',
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      width: 60,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  logo_menu__button: {
    fontSize: 28,
    color: theme.palette.common.colorGreen,
  },

  nav: {
    display: 'flex',

    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  nav_containerLink: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  nav_wrapLink: {},
  rowTop_wrapRight: {
    display: 'flex',
  },
  rowTop_containerRight: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  auth_logout: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  auth_login: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  auth_button: {
    fontSize: 20,
    color: theme.palette.common.colorGreen,
  },

  phoneMe: {},
  phoneMeContainer: {},
  phoneMe_phone: {
    '& span': {
      fontSize: 20,
      color: theme.palette.common.colorGreen,
    },
  },
  phoneMe_phoneSelect: {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  phoneMe_phoneSelect__Select: {
    height: 30,
    fontSize: '1rem',
    border: `1px solid ${theme.palette.common.colorGreen}`,

    '&:hover, &:focus': {
      border: `2px solid ${theme.palette.common.colorGreen}`,
      backgroundColor: theme.palette.common.colorGreen,
      color: theme.palette.common.white,
    },
  },
  phoneMe_phoneWrap: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  phoneMe_phoneButton: {
    backgroundColor: theme.palette.common.colorGreen,
    color: theme.palette.common.white,
    fontSize: '0.75rem',
    '&:hover': {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.colorGreen,
      border: `1px solid ${theme.palette.common.colorGreen}`,
    },
  },

  rowBottom: {
    backgroundColor: 'transparent',
    height: 80,
  },

  listDrawer: {},
  drawerItem: {},
  drawerItem_wrapIcon: {},
  drawerItem_icon: {
    fontSize: 28,
    color: theme.palette.common.colorGreen,
  },
  drawerItem_text: {},
}));

function MainHeader() {
  const classes = useStyles();
  const { user, error, isLoading } = useUser();
  const [selectedPhone, setSelectedPhone] = useState('380679173017');
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [fullSizeLogo, setFullSizeLogo] = useState(true);

  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>{error.message}</div>;
  // console.log(user);

  const phoneChangeHandler = (event) => {
    setSelectedPhone(event.target.value);
  };

  const my_drawer = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
      >
        <List disablePadding className={classes.listDrawer}>
          <ListItem
            divider
            button
            onClick={() => {
              setOpenDrawer(false);
            }}
            className={classes.drawerItem}
            // style={{
            //   display: state_auth.isAuthenticated ? 'none' : undefined,
            // }}
          >
            {/* <Link href='/api/auth/login'> */}
            <Link href='/'>
              <a>
                <Grid container justify='flex-start' alignItems='center'>
                  <Grid item>
                    <ListItemIcon className={classes.drawerItem_wrapIcon}>
                      <ExitToAppIcon className={classes.drawerItem_icon} />
                    </ListItemIcon>
                  </Grid>
                  <Grid item>
                    <ListItemText
                      disableTypography
                      className={classes.drawerItem_text}
                    >
                      Вход
                    </ListItemText>
                  </Grid>
                </Grid>
              </a>
            </Link>
          </ListItem>

          <ListItem
            divider
            button
            onClick={() => {
              setOpenDrawer(false);
            }}
            className={classes.drawerItem}
            // style={{
            //   display: state_auth.isAuthenticated ? 'none' : undefined,
            // }}
          >
            {/* <Link href='/api/auth/logout'> */}
            <Link href='/'>
              <a>
                <Grid container justify='flex-start' alignItems='center'>
                  <Grid item>
                    <ListItemIcon className={classes.drawerItem_wrapIcon}>
                      <DirectionsRunIcon className={classes.drawerItem_icon} />
                    </ListItemIcon>
                  </Grid>
                  <Grid item>
                    <ListItemText
                      disableTypography
                      className={classes.drawerItem_text}
                    >
                      Выход
                    </ListItemText>
                  </Grid>
                </Grid>
              </a>
            </Link>
          </ListItem>

          <ListItem
            divider
            button
            onClick={() => {
              setOpenDrawer(false);
            }}
            className={classes.drawerItem}
          >
            <Link href='/services'>
              <a>
                <Grid container justify='flex-start' alignItems='center'>
                  <Grid item>
                    <ListItemIcon className={classes.drawerItem_wrapIcon}>
                      <WorkIcon className={classes.drawerItem_icon} />
                    </ListItemIcon>
                  </Grid>
                  <Grid item>
                    <ListItemText
                      disableTypography
                      className={classes.drawerItem_text}
                    >
                      Услуги
                    </ListItemText>
                  </Grid>
                </Grid>
              </a>
            </Link>
          </ListItem>

          <ListItem
            divider
            button
            onClick={() => {
              setOpenDrawer(false);
            }}
            className={classes.drawerItem}
          >
            <Link href='/teaching'>
              <a>
                <Grid container justify='flex-start' alignItems='center'>
                  <Grid item>
                    <ListItemIcon className={classes.drawerItem_wrapIcon}>
                      <MoreIcon className={classes.drawerItem_icon} />
                    </ListItemIcon>
                  </Grid>
                  <Grid item>
                    <ListItemText
                      disableTypography
                      className={classes.drawerItem_text}
                    >
                      Обучение
                    </ListItemText>
                  </Grid>
                </Grid>
              </a>
            </Link>
          </ListItem>

          <ListItem
            divider
            button
            onClick={() => {
              setOpenDrawer(false);
            }}
            className={classes.drawerItem}
          >
            <Link href='/about-me'>
              <a>
                <Grid container justify='flex-start' alignItems='center'>
                  <Grid item>
                    <ListItemIcon className={classes.drawerItem_wrapIcon}>
                      <InboxIcon className={classes.drawerItem_icon} />
                    </ListItemIcon>
                  </Grid>
                  <Grid item>
                    <ListItemText
                      disableTypography
                      className={classes.drawerItem_text}
                    >
                      Обо мне
                    </ListItemText>
                  </Grid>
                </Grid>
              </a>
            </Link>
          </ListItem>

          <ListItem
            divider
            button
            onClick={() => {
              setOpenDrawer(false);
            }}
            className={classes.drawerItem}
          >
            <Link href='/reviews'>
              <a>
                <Grid container justify='flex-start' alignItems='center'>
                  <Grid item>
                    <ListItemIcon className={classes.drawerItem_wrapIcon}>
                      <RateReviewIcon className={classes.drawerItem_icon} />
                    </ListItemIcon>
                  </Grid>
                  <Grid item>
                    <ListItemText
                      disableTypography
                      className={classes.drawerItem_text}
                    >
                      Отзывы
                    </ListItemText>
                  </Grid>
                </Grid>
              </a>
            </Link>
          </ListItem>

          <ListItem
            divider
            button
            onClick={() => {
              setOpenDrawer(false);
            }}
            className={classes.drawerItem}
          >
            <Link href='/useful-info'>
              <a>
                <Grid container justify='flex-start' alignItems='center'>
                  <Grid item>
                    <ListItemIcon className={classes.drawerItem_wrapIcon}>
                      <InfoIcon className={classes.drawerItem_icon} />
                    </ListItemIcon>
                  </Grid>
                  <Grid item>
                    <ListItemText
                      disableTypography
                      className={classes.drawerItem_text}
                    >
                      Полезная информация
                    </ListItemText>
                  </Grid>
                </Grid>
              </a>
            </Link>
          </ListItem>

          <ListItem
            divider
            button
            onClick={() => {
              setOpenDrawer(false);
            }}
            className={classes.drawerItem}
          >
            <Link href='/contacts'>
              <a>
                <Grid container justify='flex-start' alignItems='center'>
                  <Grid item>
                    <ListItemIcon className={classes.drawerItem_wrapIcon}>
                      <ContactsIcon className={classes.drawerItem_icon} />
                    </ListItemIcon>
                  </Grid>
                  <Grid item>
                    <ListItemText
                      disableTypography
                      className={classes.drawerItem_text}
                    >
                      Контакты
                    </ListItemText>
                  </Grid>
                </Grid>
              </a>
            </Link>
          </ListItem>
        </List>
      </SwipeableDrawer>

      <Tooltip title='Меню'>
        <IconButton
          className={classes.drawerIconContainer}
          onClick={() => setOpenDrawer(!openDrawer)}
          disableRipple
        >
          <MenuIcon className={classes.logo_menu__button} />
        </IconButton>
      </Tooltip>
    </React.Fragment>
  );

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setFullSizeLogo(false);
    });
  }, []);

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position='fixed' className={classes.root}>
          <Toolbar className={classes.Toolbar}>
            <Grid container className={classes.appBarContainer}>
              <Grid item container className={classes.rowTop}>
                <Grid
                  item
                  lg={9}
                  md={9}
                  sm={8}
                  xs={8}
                  className={classes.rowTop_wrapLeft}
                >
                  <Grid container className={classes.rowTop_containerLeft}>
                    <Grid
                      item
                      lg={2}
                      md={2}
                      sm={12}
                      xs={12}
                      className={classes.logo}
                    >
                      <Grid container className={classes.logo_menu_container}>
                        <Grid
                          item
                          container
                          className={classes.logo_menu_drower_icon}
                          sm={6}
                          xs={6}
                        >
                          {my_drawer}
                        </Grid>
                        <Grid
                          item
                          className={classes.logo_img}
                          lg={12}
                          md={12}
                          sm={6}
                          xs={6}
                        >
                          <Link href='/' className={classes.logo_Link}>
                            <a>
                              <img
                                src='/images/logo/t_logo.png'
                                alt='logo'
                                style={{
                                  height: fullSizeLogo ? 120 : 88,
                                  width: fullSizeLogo ? 120 : 88,
                                }}
                              />
                            </a>
                          </Link>
                        </Grid>
                      </Grid>
                    </Grid>

                    <Grid item lg={10} md={10} className={classes.nav}>
                      <Grid container className={classes.nav_containerLink}>
                        <Grid item className={classes.nav_wrapLink}>
                          <Link href='/services'>
                            <a>
                              <Typography variant='h5'>Услуги</Typography>
                            </a>
                          </Link>
                        </Grid>

                        <Grid item className={classes.nav_wrapLink}>
                          <Link href='/teaching'>
                            <a>
                              <Typography variant='h5'>Обучение</Typography>
                            </a>
                          </Link>
                        </Grid>

                        <Grid item className={classes.nav_wrapLink}>
                          <Link href='/about-me'>
                            <a>
                              <Typography variant='h5'>Обо мне</Typography>
                            </a>
                          </Link>
                        </Grid>
                        <Grid item className={classes.nav_wrapLink}>
                          <Link href='/reviews'>
                            <a>
                              <Typography variant='h5'>Отзывы</Typography>
                            </a>
                          </Link>
                        </Grid>
                        <Grid item className={classes.nav_wrapLink}>
                          <Link href='/useful-info'>
                            <a>
                              <Typography variant='h5'>
                                Полезная информация
                              </Typography>
                            </a>
                          </Link>
                        </Grid>
                        <Grid item className={classes.nav_wrapLink}>
                          <Link href='/contacts'>
                            <a>
                              <Typography variant='h5'>Контакты</Typography>
                            </a>
                          </Link>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid
                  item
                  lg={3}
                  md={3}
                  sm={4}
                  xs={4}
                  className={classes.rowTop_wrapRight}
                >
                  <Grid container className={classes.rowTop_containerRight}>
                    {!user && (
                      <Grid item className={classes.auth_login}>
                        <Link href='/api/auth/login'>
                          <a>
                            <DirectionsRunIcon
                              className={classes.auth_button}
                            />
                          </a>
                        </Link>
                      </Grid>
                    )}

                    {user && (
                      <Grid item className={classes.auth_logout}>
                        <div>
                          <Avatar src={user.picture} alt={user.name} />
                          <Typography variant='body1'>{user.name}</Typography>

                          <Link href='/api/auth/logout'>
                            <a>
                              <DirectionsRunIcon
                                className={classes.auth_button}
                              />
                            </a>
                          </Link>
                        </div>
                      </Grid>
                    )}

                    <Grid item className={classes.phoneMe_phone}>
                      <Link href={`tel:+${selectedPhone}`}>
                        <a>
                          <PhoneIcon className={classes.drawerItem_icon} />
                        </a>
                      </Link>
                    </Grid>

                    <Grid item className={classes.phoneMe_phoneSelect}>
                      <Select
                        variant='outlined'
                        labelId='phone-select-label'
                        id='phone-select'
                        value={selectedPhone}
                        onChange={phoneChangeHandler}
                        className={classes.phoneMe_phoneSelect__Select}
                      >
                        <MenuItem value={380679173017}>
                          (067) 917-30-17
                        </MenuItem>
                        <MenuItem selected value={380679173030}>
                          (067) 917-30-30
                        </MenuItem>
                        <MenuItem selected value={380679173040}>
                          (067) 917-30-40
                        </MenuItem>
                      </Select>
                    </Grid>

                    <Grid item className={classes.phoneMe_phoneWrap}>
                      <Button className={classes.phoneMe_phoneButton}>
                        Позвони мне
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

              <Grid
                item
                container
                className={classes.rowBottom}
                style={{ display: fullSizeLogo ? 'block' : 'none' }}
              ></Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </React.Fragment>
  );
}

export default MainHeader;
