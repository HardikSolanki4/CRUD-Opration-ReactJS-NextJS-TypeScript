import Button from '@mui/material/Button';
import { ProductStyled } from './DetailsStyled';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addCart, showNotification } from '../../../redux/actions/cartActions';

type props = {
  productDetail: {
    id: string;
    category: string;
    image: string;
    title: string;
    description: string;
    price: number;
  };
};

const Details: React.FC<props> = (props) => {
  const dispatch = useDispatch();

  // console.log('productDetail details==>', props);
  const { productDetail } = props;
  const { category, description, title, image, price } = productDetail;

  const addCartHandler = () => {
    dispatch(addCart(productDetail));
    dispatch(
      showNotification({
        title: 'Cart Updated',
        message: 'Complete',
      })
    );
  };

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
          <Button size='small' onClick={addCartHandler}>
            Add to Cart
          </Button>
        </div>
      </ProductStyled>
    </>
  );
};

export default Details;
