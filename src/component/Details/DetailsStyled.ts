import { styled } from "@mui/material/styles";

export const ProductStyled = styled('div')`
  display:flex;
  .productDesc{
      padding-left:30px;
      .productName{
          font-size:20px;
          font-weight:600;
          margin-bottom:20px;
      }
      .productDetails{
        margin-bottom:20px;
      }
  }
`;