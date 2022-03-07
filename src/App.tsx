import { Container } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import NoFound from './Pages/404Page/index';
import HeaderNavBar from './Common/NavBar/NavBar';
import ShopHome from './Pages/Home/index';
import CheckOutCart from './Pages/CheckOutCart/index';
import ProductDetails from './Pages/ProductDetails/index';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './rootReducer';
import { useEffect } from 'react';
import Notification from './Common/Notification/Notification';
import { showNotification } from './redux/actions/cartActions';

function App() {
  // const cartChanged = useSelector(
  //   (state: RootState) => state?.cartProducts.cart.changed
  // );
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   console.log('out');
  //   if (cartChanged) {
  //     console.log('in');

  //     dispatch(
  //       showNotification({
  //         title: 'Cart Updated',
  //         message: 'Complete',
  //       })
  //     );
  //   }
  // }, [cartChanged]);

  return (
    <div>
      <header>
        <HeaderNavBar />
      </header>
      <Container fixed>
        <Routes>
          <Route path='*' element={<NoFound />} />
          <Route path='/' element={<ShopHome />} />
          <Route path='/cart' element={<CheckOutCart />} />
          <Route path='/detail/:id' element={<ProductDetails />} />
        </Routes>
        <Notification />
      </Container>
    </div>
  );
}

export default App;
