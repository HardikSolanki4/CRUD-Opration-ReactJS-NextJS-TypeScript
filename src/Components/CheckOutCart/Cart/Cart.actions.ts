import { ADD_TO_CART, REMOVE_CART } from './Cart.types';

export const addToCart = (data:any) => ({
  type: ADD_TO_CART,
  payload: data,
});

export const removeToCart = (data:any) => ({
  type: REMOVE_CART,
  payload: data,
});
