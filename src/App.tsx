import { Container } from '@mui/material';
import './App.scss';
import HeaderNavBar from './component/NavBar/NavBar';
import ShopHome from './pages/ShopHome/index';

function App() {
  const itemLists = [
    {
      category: 'electronic',
      picture: 'https://dummyimage.com/600x400',
      name: 'Computer',
      description: 'Gaming Computer',
      price: 25000,
    },
    {
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
        <ShopHome CategoryLists={itemLists} />
      </Container>
    </div>
  );
}

export default App;
