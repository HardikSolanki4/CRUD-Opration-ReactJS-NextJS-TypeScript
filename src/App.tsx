import { Container } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import NoFound from './pages/NotFound/index';
import HeaderNavBar from './component/NavBar/NavBar';
import ShopHome from './pages/ShopHome/index';
import CheckOutCart from './pages/CheckOutCart/index';
import ProductDetails from './pages/ProductDetails/index';

function App() {
  const itemLists = [
    {
      id: 1,
      category: 'electronic',
      picture: 'https://dummyimage.com/600x400',
      name: 'Computer',
      description: 'Gaming Computer',
      price: 25000,
    },
    {
      id: 2,
      category: 'electronic',
      picture: 'https://dummyimage.com/600x400',
      name: 'Camera',
      description: 'Sony Camera',
      price: 5000,
    },
  ];

  return (
    <div>
      <header>
        <HeaderNavBar />
      </header>
      <Container fixed>
        <Routes>
          {/* <Route path='*' element={<NoFound />} /> */}
          <Route path='/' element={<ShopHome CategoryLists={itemLists} />} />
          <Route path='/cart' element={<CheckOutCart />} />
          <Route path='/detail/:id' element={<ProductDetails />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
