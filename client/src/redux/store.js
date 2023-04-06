//initize our redux store
import { combineReducers, configureStore } from '@reduxjs/toolkit';
//The configureStore here replaces the original createStore from Redux. Unlike createStore, configureStore from Redux Toolkit not only creates a store but can also accept reducer functions as arguments and automatically sets up the Redux DevTools Extension for easy debugging.
//The combineReducers helper function turns an object whose values are different reducing functions into a single reducing function you can pass to createStore.
import products from './slices/products';
import cart from './slices/cart';
import user from './slices/user';
import order from './slices/order';

//In Redux, a reducer is a pure function that takes an action and the previous state of the application and returns the new state.The action describes what happened and it is the reducer's job to return the new state based on that action

//Reducer is the banker (redux example video) or store manager(my example)....taking the order request and change the store
const reducer = combineReducers({
  //this has all the reducers and initiate states of the store
  products,
  cart,
  user,
  order,
});

export default configureStore({
  reducer,
});
