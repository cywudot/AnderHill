import { createSlice } from '@reduxjs/toolkit';

const calulateSubtotal = (cartState) => {
  let result = 0;
  cartState.map((item) => (result += item.qty * item.price));
  return Number(result).toFixed(2);
};

//Creating initial state.The Redux Store will hold before we actually start to fetch or manipulate data.
export const initialState = {
  loading: false,
  error: null,
  cart: JSON.parse(localStorage.getItem('cartItems')) ?? [],
  expressShipping: JSON.parse(localStorage.getItem('expressShipping')) ?? false,
  subtotal: localStorage.getItem('cartItems') ? calulateSubtotal(JSON.parse(localStorage.getItem('cartItems'))) : 0,
};

const updateLocalStorage = (cart) => {
  localStorage.setItem('cartItems', JSON.stringify(cart));
  localStorage.setItem('subtotal', JSON.stringify(calulateSubtotal(cart)));
};

//createSlices: A function that accepts an initial state, an object of reducer functions, and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state.
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
    cartItemAdd: (state, { payload }) => {
      //Find with cart if there's an item that is same as the new item
      const existingItem = state.cart.find((item) => item.id === payload.id);
      //If exisitingItem exist, do a double check and if true, put payload in, else put item
      if (existingItem) {
        state.cart = state.cart.map((item) => (item.id === existingItem.id ? payload : item));
      } else {
        //else, redefined state.cart with new item.
        state.cart = [...state.cart, payload];
      }
      state.loading = false;
      state.error = null;
      updateLocalStorage(state.cart);
      state.subtotal = calulateSubtotal(state.cart);
    },
    setError: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },

    cartItemRemoval: (state, { payload }) => {
      state.cart = [...state.cart].filter((item) => item.id !== payload);
      updateLocalStorage(state.cart);
      state.subtotal = calulateSubtotal(state.cart);
      state.loading = false;
      state.error = null;
    },
    setExpressShipping: (state, { payload }) => {
      state.expressShipping = payload;
      localStorage.setItem('expressShipping', payload);
    },
    clearCart: (state) => {
      localStorage.removeItem('cartItems');
      state.cart = [];
    },
  },
});

//Wrapping/binding them all together
export const { setLoading, setError, cartItemAdd, cartItemRemoval, setExpressShipping, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

export const cartSelector = (state) => state.cart;
