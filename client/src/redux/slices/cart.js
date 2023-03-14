import { createSlice } from '@reduxjs/toolkit';

//Creating initial state.The Redux Store will hold before we actually start to fetch or manipulate data.
export const initialState = {
  loading: false,
  error: null,
  cart: [],
  expressShipping: false,
  subtotal: 0,
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
    },
    setError: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
  },
});

//Wrapping/binding them all together
export const { setLoading, setError, cartItemAdd } = cartSlice.actions;
export default cartSlice.reducer;

export const cartSelector = (state) => state.cart;
