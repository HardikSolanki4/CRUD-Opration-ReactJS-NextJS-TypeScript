import { ADD_TO_CART, REMOVE_CART } from './Cart.types';

interface initCartValue {
  products: productType[],
}

interface productType {
  id: any;
  category: string;
  picture: string;
  name: string;
  description: string;
  price: number;
}

const initCartValue:initCartValue = {
  products: [],
};
const cartReducer = (state = initCartValue, action:any) => {
  switch (action) {
    case ADD_TO_CART:
      return { ...state, products: [...state.products, action.payload] };
    case REMOVE_CART:
      const products = state.products.filter(
        (product) => product.id !== action.payload
      );
      return products;
    default:
      return state;
  }
};
export default cartReducer;
