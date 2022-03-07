import { styled } from '@mui/material/styles';

export const NotificationStyled = styled('div')`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #3a3ca0;
  color: #fff;
  &:empty {
    display: none;
  }
  h6 {
    font-size: 16px;
    font-weight: 400;
  }
  p {
    font-size: 14px;
  }
`;
