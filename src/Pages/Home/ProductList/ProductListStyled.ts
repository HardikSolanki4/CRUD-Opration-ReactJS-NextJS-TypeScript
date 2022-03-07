import { styled } from '@mui/material/styles';

export const PageStyle = styled('div')`
  display: flex;
  flex-wrap: wrap;
  .MuiCardMedia-img {
    width: 100%;
    object-fit: contain;
    height: 300px;
  }
  .productCard {
    flex: 1 1 250px;
    margin: 15px;
  }
  .productTitle {
    font-size: 18px;
  }
`;
