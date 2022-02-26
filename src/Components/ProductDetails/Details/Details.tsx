import Button from '@mui/material/Button';
import { ProductStyled } from './DetailsStyled';
import { useParams } from 'react-router-dom';

type props = {
  productDetail: {
    id: string;
    category: string;
    image: string;
    title: string;
    description: string;
    price: number;
  };
  onClick?: () => void;
};

const Details: React.FC<props> = (props) => {
  console.log('productDetail details==>', props);
  const { category, description, title, image, price } =
  props.productDetail;

  return (
    <>
      <ProductStyled>
        <div className='productImg'>
          <img src={image} />
        </div>
        <div className='productDesc'>
          <div className='productCategory'>{category}</div>
          <div className='productName'>{title}</div>
          <div className='productPrice'>₹{price}</div>
          <div className='productDetails'>{description}</div>
          <Button size='small'>WhishList</Button>
          <Button
            size='small'
            onClick={props.onClick}
          >
            Add to Cart
          </Button>
        </div>
      </ProductStyled>
    </>
  );
};

export default Details;
