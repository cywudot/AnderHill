//createSlices: A function that accepts an initial state, an object of reducer functions, and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state.

import { createSlice } from '@reduxjs/toolkit';

//Creating initial state.The Redux Store will hold before we actually start to fetch or manipulate data.
export const initialState = {
  loading: false,
  error: null,
  products: [],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
    setProducts: (state, { payload }) => {
      state.loading = false;
      state.error = null;
      state.products = payload;
    },
    setError: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
  },
});

export const { setLoading, setError, setProducts } = productsSlice.actions;
export default productsSlice.reducer;

export const productsSelector = (state) => state.products;
