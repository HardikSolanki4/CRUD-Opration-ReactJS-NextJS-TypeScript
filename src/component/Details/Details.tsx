import Button from '@mui/material/Button';
import { ProductStyled } from './DetailsStyled';
import { useParams } from 'react-router-dom';

type props = {
  productDetail: {
    id: string;
    category: string;
    picture: string;
    name: string;
    description: string;
    price: number;
  };
  addToCart: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Details: React.FC<props> = (productDetail, addToCart) => {
  console.log('productDetail details==>', productDetail);
  const { category, description, name, picture, price } =
    productDetail.productDetail;

  return (
    <>
      <ProductStyled>
        <div className='productImg'>
          <img src={picture} />
        </div>
        <div className='productDesc'>
          <div className='productCategory'>{category}</div>
          <div className='productName'>{name}</div>
          <div className='productPrice'>₹{price}</div>
          <div className='productDetails'>{description}</div>
          <Button size='small'>WhishList</Button>
          <Button size='small' onClick={addToCart}>
            Add to Cart
          </Button>
        </div>
      </ProductStyled>
    </>
  );
};

export default Details;
