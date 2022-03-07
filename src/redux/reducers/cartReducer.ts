import { ActionTypes } from '../constants/action-types';

const initCart = {
  cart: {
    items: [] as any,
    grandTotal: 0,
    changed: false,
  },
  notification: {
    title: null,
    message: null,
  },
};

interface actionType {
  type: string;
  payload?: any;
}

export const cartReducer = (state = initCart, action: actionType) => {
  switch (action.type) {
    case ActionTypes.ADD_CART:
      const newItem = action?.payload;
      const existingItems = state.cart.items.find(
        (item: any) => item.id === newItem.id
      );
      if (!existingItems) {
        state.cart.items.push({
          id: newItem.id,
          category: newItem.category,
          title: newItem.title,
          image: newItem.image,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItems.quantity++;
        existingItems.totalPrice = existingItems.totalPrice + newItem.price;
      }
      state.cart.changed = true;
      state.cart.grandTotal = state.cart.grandTotal + newItem.price;
      return { ...state };

    case ActionTypes.SHOW_NOTIFICATION:
      state.notification = {
        title: action.payload.title,
        message: action.payload.message,
      };
      return { ...state };

    case ActionTypes.HIDE_NOTIFICATION:
      state.notification = {
        title: null,
        message: null,
      };
      return { ...state };

    default:
      return state;
  }
};
