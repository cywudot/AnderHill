//initize our redux store
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import products from './slices/products';

//In Redux, a reducer is a pure function that takes an action and the previous state of the application and returns the new state.The action describes what happened and it is the reducer's job to return the new state based on that action
const reducer = combineReducers({
  products,
});

export default configureStore({
  reducer,
});
