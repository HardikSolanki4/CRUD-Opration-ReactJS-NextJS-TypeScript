import { ActionTypes } from '../constants/action-types';

export const addCart = (product: any) => {
  return {
    type: ActionTypes.ADD_CART,
    payload: product,
  };
};

export const removeCart = (productId: number) => {
  return {
    type: ActionTypes.REMOVE_CART,
    payload: productId,
  };
};

export const showNotification = (info: any) => {
  return {
    type: ActionTypes.SHOW_NOTIFICATION,
    payload: info,
  };
};

export const hideNotification = () => {
  return {
    type: ActionTypes.HIDE_NOTIFICATION,
  };
};
