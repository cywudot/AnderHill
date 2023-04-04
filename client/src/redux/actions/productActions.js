// It is a library which is used to make requests to an API, return data from the API, and then do things with that data in our React application.
import axios from 'axios';

import { setProducts, setLoading, setError, setProduct, setFilterCategory, clearCategory } from '../slices/products';

//PREVIOUS CODE
// export const getProducts =
//   (category = '') =>
//   async (dispatch) => {
//     dispatch(setLoading(true));

//     try {
//       const url = category ? `/api/products?category=${category}` : '/api/products';
//       const { data } = await axios.get(url);
//       dispatch(setProducts(data));
//     } catch (error) {
//       dispatch(
//         setError(
//           error.response && error.response.data.message
//             ? error.response.data.message
//             : error.message
//             ? error.message
//             : 'An unexpected error has occured. Please try again later'
//         )
//       );
//     }
//   };
export const getProducts = () => async (dispatch) => {
  dispatch(clearCategory());
  dispatch(setLoading(true));
  try {
    const { data } = await axios.get('/api/products');
    dispatch(setProducts(data));
  } catch (error) {
    dispatch(
      setError(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
          ? error.message
          : 'An unexpected error has occured. Please try again later.'
      )
    );
  }
};

export const getProduct = (id) => async (dispatch) => {
  dispatch(setLoading(true));

  try {
    const { data } = await axios.get(`/api/products/${id}`);
    dispatch(setProduct(data));
  } catch (error) {
    dispatch(
      setError(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
          ? error.message
          : 'An unexpected error has occured. Please try again later'
      )
    );
  }
};

//TESTING OUT FILTERED FUNCTION
export const getFilteredProducts =
  (category = '') =>
  async (dispatch) => {
    try {
      // First fetch all products
      await dispatch(getProducts());
      // Then filter products by category
      if (category) {
        dispatch(setFilterCategory(category));
      }
    } catch (error) {
      dispatch(
        setError(
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
            ? error.message
            : 'An unexpected error has occured. Please try again later'
        )
      );
    }
  };
