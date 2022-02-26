import { Container } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import NoFound from './Components/404Page/index';
import HeaderNavBar from './Common/NavBar/NavBar';
import ShopHome from './Components/Home/index';
import CheckOutCart from './Components/CheckOutCart/index';
import ProductDetails from './Components/ProductDetails/index';

function App() {
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
      </Container>
    </div>
  );
}

export default App;
