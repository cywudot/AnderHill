//Creating the store

import { createSlice } from '@reduxjs/toolkit';

//Creating initial state.The Redux Store will hold before we actually start to fetch or manipulate data.
export const initialState = {
  loading: false,
  error: null,
  //Checking if userinfo already exist in localStorage
  userInfo: JSON.parse(localStorage.getItem('userInfo')) ?? null,
  updateSuccess: false,
  orders: [],
};

//createSlices: A function that accepts an initial state, an object of reducer functions, and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state.
export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
    userLogin: (state, { payload }) => {
      state.userInfo = payload;
      state.error = null;
      state.loading = false;
    },
    userLogout: (state) => {
      state.userInfo = false;
      state.error = null;
      state.loading = null;
    },
    setError: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
    updateUserProfile: (state, { payload }) => {
      state.userInfo = payload;
      state.updateSuccess = true;
      state.loading = false;
      state.error = null;
    },
    resetUpdate: (state) => {
      state.updateSuccess = false;
    },
    setUserOrders: (state, { payload }) => {
      state.error = null;
      state.orders = payload;
      state.loading = false;
    },
  },
});

//Wrapping/binding them all together
//TO DELETE //setFilterCategory inside productSlices
export const { setLoading, setError, userLogin, userLogout, updateUserProfile, resetUpdate, setUserOrders } =
  userSlice.actions;
export default userSlice.reducer;

export const userSelector = (state) => state.user;
