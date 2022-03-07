import { combineReducers } from 'redux';
import { cartReducer } from './redux/reducers/cartReducer';
import {
  productReducer,
  selectedProductReducer,
} from './redux/reducers/productReducer';

const rootReducer = combineReducers({
  allProducts: productReducer,
  setSelectedProduct: selectedProductReducer,
  cartProducts: cartReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>