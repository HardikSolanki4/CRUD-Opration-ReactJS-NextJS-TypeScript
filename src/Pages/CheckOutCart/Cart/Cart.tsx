import { Button, TextField } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../../../rootReducer';
import { ShopCartStyled } from './CartStyled';

const ShopCart = () => {
  const cartState = useSelector((state: RootState) => state.cartProducts.cart);
  const { items: cartItems, grandTotal } = cartState;

  console.log('cartState', cartState);
  if (cartItems.length === 0) {
    return <div>Your Cart Empty... Please add some items</div>;
  }

  const removeHandler = (id: number) => {
    console.log('remove', id);
  };

  return (
    <ShopCartStyled>
      <h2>Shopping Items</h2>
      <div className='cartBlock'>
        <ul className='cartItems'>
          {cartItems.map((item: any) => (
            <li key={item.id}>
              <div className='itemCategory'>{item.category}</div>
              <div className='itemName'>{item.title}</div>
              <div className='itemPriceModule'>
                {/* <div className='quantityModule'>
          <Button variant='text'>+</Button>
          <TextField
            label='Quantity'
            variant='outlined'
            defaultValue='1'
            className='quantityInput'
            type='number'
            InputProps={{
              readOnly: true,
            }}
          />
          <Button variant='text'>-</Button>
        </div> */}
                <div className='price'>
                  {item.price}
                  <small>x{item.quantity}</small>
                </div>
                <div className='delete'>
                  <button onClick={() => removeHandler(item.id)}>Remove</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className='totalPrice'>{grandTotal}</div>
      </div>
    </ShopCartStyled>
  );
};

export default ShopCart;
