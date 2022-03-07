import { styled } from '@mui/material/styles';

export const ProductStyled = styled('div')`
  display: flex;
  .productImg {
    img {
      width: 480px;
      object-fit: contain;
      height: 300px;
    }
  }
  .productDesc {
    padding-left: 30px;
    .productCategory {
      color: #34495e;
      font-size: 14px;
    }
    .productName {
      font-size: 28px;
      font-weight: 600;
      margin-bottom: 10px;
      color: #2c3e50;
    }
    .productPrice {
      font-size: 20px;
      font-weight: 500;
    }
    .productDetails {
      margin-bottom: 20px;
    }
  }
`;
