import Container from '@mui/material/Container';
import { Button, Link } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { grey } from '@mui/material/colors';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const useStyles = makeStyles({
  header: {
    background: grey[200],
    marginBottom: '30px',
  },
  headerContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  headerLeft: {
    opacity: '1',
  },
  logo: {
    fontSize: '28px',
    textDecoration: 'none !important',
    color: '#FFFFFF',
  },
  headerRight: {
    opacity: '1',
  },
});

const HeaderNavBar = () => {
  const classes = useStyles();
  const navigation = useNavigate();
  const cartClickHandler = (event: React.MouseEvent) => {
    event.stopPropagation();
    navigation('/cart');
  };

  const wishListClickHandler = (event: React.MouseEvent) => {
    event.stopPropagation();
    navigation('/wishlist');
  };

  return (
    <div className={classes.header}>
      <Box>
        <AppBar position='static'>
          <Toolbar>
            <div className={classes.headerContent}>
              <div className={classes.headerLeft}>
                <NavLink to='/' className={classes.logo}>
                  <Typography variant='h6' component='div'>
                    iLead
                  </Typography>
                </NavLink>
              </div>
              <div className={classes.headerRight}>
                {/* <Button
                color='secondary'
                variant='contained'
                onClick={wishListClickHandler}
              >
                <FavoriteIcon /> WishList
              </Button> */}
                <Button
                  color='secondary'
                  variant='contained'
                  onClick={cartClickHandler}
                >
                  <ShoppingCartIcon /> Cart
                </Button>
              </div>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default HeaderNavBar;
