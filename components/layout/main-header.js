import React, { useState } from 'react';
import { useUser } from '@auth0/nextjs-auth0';
import Link from 'next/link';
import Image from 'next/image';

import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

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

import Icon from '@material-ui/core/Icon';

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
  },
  appBarContainer: {
    backgroundColor: theme.palette.common.white,
    // border: '1px solid #ff0000',
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
    // border: '1px solid #ff0000',
    height: '100%',
    width: 200,
    [theme.breakpoints.down('md')]: {
      width: 80,
    },
  },
  logo_menu_container: {
    height: '100%',
  },
  logo_img: {
    height: '100%',
    // border: '1px solid #ff0000',
    [theme.breakpoints.down('md')]: {
      position: 'absolute',
      top: 10,
      left: 'calc(50% - 60px)',
    },
    '& img': {
      height: 120,
      width: 120,
    },
  },
  logo_menu: {
    // border: '1px solid #ff00ff',
    height: '100%',
    [theme.breakpoints.down('md')]: {
      width: 60,
    },
  },
  logo_menu__button: {
    marginTop: 20,
    fontSize: 28,
    color: theme.palette.common.colorGreen,
  },

  nav: {
    marginLeft: 0,
    // border: '1px solid #ff00ff',
    height: '100%',
    width: 700,
  },
  nav_containerLink: {
    height: '100%',
  },
  nav_wrapLink: {
    // border: '1px solid #00ff00',
  },
  rowTop_wrapRight: {
    height: '100%',
  },
  rowTop_containerRight: {
    height: '100%',
  },

  auth: {},
  auth_button: {
    fontSize: 20,
    color: theme.palette.common.colorGreen,
  },

  phoneMe: {
    height: '100%',
    marginRight: 5,
  },
  phoneMeContainer: {
    // border: '1px solid #ff00ff',
    height: '100%',
    // width: 400,
  },
  phoneMe_phone: {
    '& span': {
      fontSize: 20,
      color: theme.palette.common.colorGreen,
    },
  },
  phoneMe_phoneSelect: {},
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
  phoneMe_phoneWrap: {},
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
    // border: '1px solid #000',
  },

  listDrawer: {},
  drawerItem: {
    border: '1px solid #000',
  },
  drawerItem_wrapIcon: {
    // border: '1px solid #ff0000',
    // width: 28,
    // paddingRight: 0,
  },
  drawerItem_icon: {
    fontSize: 28,
    // marginRight: 0,
    color: theme.palette.common.colorGreen,
  },
  drawerItem_text: {
    // display: 'inline',
    // margin: 'auto 3',
  },
}));

function MainHeader() {
  const classes = useStyles();
  const { user, error, isLoading } = useUser();
  const [selectedPhone, setSelectedPhone] = useState('380679173017');
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const [openDrawer, setOpenDrawer] = useState(false);

  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>{error.message}</div>;
  // console.log(user);

  const phoneChangeHandler = (event) => {
    setSelectedPhone(event.target.value);
  };

  const onScrollHandler = (event) => {
    console.log(event);
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

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar
          position='fixed'
          className={classes.root}
          onScroll={onScrollHandler}
        >
          <Toolbar>
            <Grid
              container
              direction='column'
              justify='flex-start'
              className={classes.appBarContainer}
            >
              <Grid
                item
                container
                className={classes.rowTop}
                direction='row'
                justify='space-between'
                alignItems='center'
              >
                <Grid item className={classes.rowTop_wrapLeft}>
                  <Grid
                    container
                    className={classes.rowTop_containerLeft}
                    direction='row'
                    justify='flex-start'
                    alignItems='center'
                  >
                    <Grid item className={classes.logo}>
                      <Grid
                        container
                        direction='row'
                        justify='center'
                        alignItems='center'
                        className={classes.logo_menu_container}
                      >
                        <Hidden mdUp>
                          <Grid item container className={classes.logo_menu}>
                            {my_drawer}
                          </Grid>
                        </Hidden>

                        {/* <Hidden mdDown> */}
                        <Grid item className={classes.logo_img}>
                          <Link href='/'>
                            <a>
                              <img src='/images/logo/Logo.png' alt='logo' />
                            </a>
                          </Link>
                        </Grid>
                        {/* </Hidden> */}
                      </Grid>
                    </Grid>

                    <Hidden mdDown>
                      <Grid item className={classes.nav}>
                        <Grid
                          container
                          direction='row'
                          justify='space-between'
                          alignItems='center'
                          className={classes.nav_containerLink}
                        >
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
                    </Hidden>
                  </Grid>
                </Grid>
                <Grid item className={classes.rowTop_wrapRight}>
                  <Grid
                    container
                    className={classes.rowTop_containerRight}
                    direction='row'
                    justify='flex-end'
                    alignItems='center'
                  >
                    <Grid item className={classes.auth}>
                      {/* {user && (
                <div>
                  <Avatar src={user.picture} alt={user.name} />
                  <Typography variant='body1'>{user.name}</Typography>

                  <Link href='/api/auth/logout'>
                    <a>
                      <DirectionsRunIcon className={classes.auth_button} />
                    </a>
                  </Link>
                </div>
              )}
              {!user && (
                <Link href='/api/auth/login'>
                  <a>
                    <DirectionsRunIcon className={classes.auth_button} />
                  </a>
                </Link>
              )} */}
                    </Grid>
                    <Grid item className={classes.phoneMe}>
                      <Grid
                        container
                        className={classes.phoneMeContainer}
                        direction='row'
                        justify='space-between'
                        alignItems='center'
                        spacing={1}
                      >
                        <Grid item className={classes.phoneMe_phone}>
                          <Link href={`tel:+${selectedPhone}`}>
                            <a>
                              <Icon className='fab fa-viber' />
                            </a>
                          </Link>
                        </Grid>
                        <Hidden mdDown>
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
                        </Hidden>
                        <Hidden mdDown>
                          <Grid item className={classes.phoneMe_phoneWrap}>
                            <Button className={classes.phoneMe_phoneButton}>
                              Позвони мне
                            </Button>
                          </Grid>
                        </Hidden>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item container className={classes.rowBottom}></Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </React.Fragment>
  );
}

export default MainHeader;
