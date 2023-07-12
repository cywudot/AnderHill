//Creating the store
//REDUCER
import { createSlice } from '@reduxjs/toolkit';

//Creating initial state.The Redux Store will hold before we actually start to fetch or manipulate data.
export const initialState = {
  loading: false,
  error: null,
  products: [],
  product: null,
  filteredProducts: [],
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
    resetProduct: (state, { payload }) => {
      state.product = null;
    },
    setError: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
    setFilterCategory: (state, { payload }) => {
      state.category = payload;
      const { category, products } = state;
      state.filteredProducts = category ? products.filter((product) => product.category === category) : products;
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
  setFilteredProducts,
  clearCategory,
  resetProduct,
  productReviewed,
  resetError,
} = productsSlice.actions;
export default productsSlice.reducer;

export const productsSelector = (state) => state.products;

//orginal
// setFilterCategory: (state, payload) => {
//   state.category = payload;
//   state.loading = false;
//   state.error = null;
// },

// In the setFilteredProducts reducer, it checks if a category is set in the state. If a category is set, it filters the products array based on the category and assigns the filtered products to filteredProducts state. If no category is set, it assigns the entire products array to filteredProducts.
// setFilteredProducts: (state, { payload }) => {
//   const { category, products } = state;
//   state.filteredProducts = category ? products.filter((product) => product.category === category) : products;
// },
