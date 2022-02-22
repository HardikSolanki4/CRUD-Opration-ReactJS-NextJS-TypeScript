import Button from '@mui/material/Button';
import { ProductStyled } from './DetailsStyled';
import { useParams } from 'react-router-dom';

const Details = () => {
  return (
    <>
      <ProductStyled>
        <div className='productImg'>
          <img src='https://dummyimage.com/600x400' />
        </div>
        <div className='productDesc'>
          <div className='productName'>Computer</div>
          <div className='productDetails'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </div>
          <Button size='small'>WhishList</Button>
          <Button size='small'>Buy</Button>
        </div>
      </ProductStyled>
    </>
  );
};

export default Details;
