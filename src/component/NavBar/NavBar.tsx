import Container from '@mui/material/Container';
import { Button, Link } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { grey } from '@mui/material/colors';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
  header: {
    background: grey[200],
    marginBottom: '30px',
    padding: '5px',
  },
  headerContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerLeft: {
    opacity: '1',
  },
  logo: {
    fontSize: '28px',
    textDecoration: 'none !important',
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
      <Container fixed>
        <div className={classes.headerContent}>
          <div className={classes.headerLeft}>
            <NavLink to='/' className={classes.logo}>
              iLead
            </NavLink>
          </div>
          <div className={classes.headerRight}>
            <Button
              color='secondary'
              variant='contained'
              onClick={wishListClickHandler}
            >
              <FavoriteIcon /> WishList
            </Button>
            <Button
              color='primary'
              variant='contained'
              onClick={cartClickHandler}
            >
              <ShoppingCartIcon /> Cart
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeaderNavBar;
