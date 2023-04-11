import { createSlice } from '@reduxjs/toolkit';

//Creating initial state.The Redux Store will hold before we actually start to fetch or manipulate data.
export const initialState = {
  loading: false,
  error: null,
  shippingAddress: null,
  orderInfo: null,
};

//createSlices: A function that accepts an initial state, an object of reducer functions, and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state.
export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
    setError: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
    shippingAddressAdd: (state, { payload }) => {
      state.shippingAddress = payload;
      state.loading = false;
    },
    clearOrder: (state) => {
      state = initialState;
    },
  },
});

//Wrapping/binding them all together
//TO DELETE //setFilterCategory inside productSlices
export const { setLoading, setError, shippingAddressAdd, clearOrder } = orderSlice.actions;
export default orderSlice.reducer;

export const orderSelector = (state) => state.order;
