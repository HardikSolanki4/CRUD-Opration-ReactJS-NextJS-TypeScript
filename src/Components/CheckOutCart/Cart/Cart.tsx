import { Button, TextField } from '@mui/material';
import { ShopCartStyled } from './CartStyled';

const ShopCart = () => {
  return (
    <ShopCartStyled>
      <h2>Shopping Items</h2>
      <div className='cartBlock'>
        <ul className='cartItems'>
          <li>
            <div className='itemCategory'>Electronic</div>
            <div className='itemName'>Computer</div>
            <div className='itemPriceModule'>
              <div className='quantityModule'>
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
              </div>
              <div className='price'>23500</div>
            </div>
          </li>
          <li>
            <div className='itemCategory'>Electronic</div>
            <div className='itemName'>Computer</div>
            <div className='itemPriceModule'>
              <div className='quantityModule'>
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
              </div>
              <div className='price'>23500</div>
            </div>
          </li>
        </ul>
        <div className='totalPrice'>50000</div>
      </div>
    </ShopCartStyled>
  );
};

export default ShopCart;
