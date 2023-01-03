const reducer = (state, action) => {
  if (action.type === "CLEAR_CART") {
    return { ...state, cart: [] };
  }

  if (action.type === "CLEAR_ITEM") {
    const newCart = state.cart.filter((item) => item.id !== action.payload);
    return { ...state, cart: newCart };
  }

  if (action.type === "INCREASE") {
    const tempCart = state.cart.map((item) => {
      if (item.id === action.payload) {
        return { ...item, amount: item.amount + 1 };
      }
      return item;
    });
    return { ...state, cart: tempCart };
  }

  if (action.type === "DECREASE") {
    const cartTemp = state.cart.map((item) => {
      if (item.id === action.payload) {
        if (item.amount > 0) {
          return { ...item, amount: item.amount - 1 };
        } else {
          return item;
        }
      }
      return item;
    });
    return { ...state, cart: cartTemp };
  }
};

export default reducer;
