import { ActionTypes } from '../constants/action-types';

const initState = {
  products: [],
};

interface actionType {
  type: string;
  payload: any;
}

export const productReducer = (state = initState, action: actionType) => {
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: action.payload };

    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, action: actionType) => {
  switch (action.type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...action.payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};
