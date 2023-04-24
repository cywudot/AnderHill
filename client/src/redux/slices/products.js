//Creating the store
//REDUCER
import { createSlice } from '@reduxjs/toolkit';

//Creating initial state.The Redux Store will hold before we actually start to fetch or manipulate data.
export const initialState = {
  loading: false,
  error: null,
  products: [],
  category: null,
  reviewSend: null,
};

//createSlices: A function that accepts an initial state, an object of reducer functions, and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state.
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
    setProduct: (state, { payload }) => {
      state.product = payload;
      state.loading = false;
      state.error = null;
    },
    setError: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
    setFilterCategory: (state, { payload }) => {
      state.category = payload;
      // state.products = state.products.filter((product) => product.category === payload);
      state.loading = false;
      state.error = null;
    },
    clearCategory: (state) => {
      state.category = null;
    },
    productReviewed: (state) => {
      state.loading = false;
      state.error = null;
      state.reviewSend = true;
    },
    resetError: (state) => {
      state.error = null;
      state.reviewSend = false;
    },
  },
});

//Wrapping/binding them all together
//TO DELETE //setFilterCategory inside productSlices
export const {
  setLoading,
  setError,
  setProducts,
  setProduct,
  setFilterCategory,
  clearCategory,
  productReviewed,
  resetError,
} = productsSlice.actions;
export default productsSlice.reducer;

export const productsSelector = (state) => state.products;
