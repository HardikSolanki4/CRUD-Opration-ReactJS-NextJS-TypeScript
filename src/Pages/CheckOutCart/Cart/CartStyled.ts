import { styled } from '@mui/material/styles';

export const ShopCartStyled = styled('div')`
  color: #333;
  .cartItems {
    margin-top: 15px;
    background: #f1f1f1;
    padding: 20px;
    border-radius: 10px;
    li,
    .itemPriceModule {
      display: flex;
      align-items: center;
      justify-content: space-between;
      + li {
        border-top: 3px solid white;
        padding-top: 15px;
        margin-top: 15px;
      }
    }
    .quantityModule {
      display: flex;
      align-items: center;
    }
    .quantityInput {
      max-width: 80px;
    }
    .price {
      font-size: 18px;
      small {
        font-size: 14px;
        margin-left: 5px;
      }
    }
  }
  .totalPrice {
    margin-top: 15px;
    padding: 10px 20px;
    text-align: right;
    font-size: 18px;
    font-weight: 600;
  }
`;
