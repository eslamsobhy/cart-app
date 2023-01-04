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
    const cartTemp = state.cart
      .map((item) => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount - 1 };
        }
        return item;
      })
      .filter((item) => item.amount !== 0); //
    return { ...state, cart: cartTemp };
  }

  if (action.type === "GET_TOTAL") {
    const { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        // calculating the total amount
        const { price, amount } = cartItem;
        cartTotal.amount += amount;

        // calculating the total
        const itemTotal = amount * price;
        cartTotal.total += itemTotal;
        return cartTotal;
      },
      {
        total: 0,
        amount: 0,
      }
    );

    return { ...state, amount, total };
  }
};

export default reducer;
