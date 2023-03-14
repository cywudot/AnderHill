// It is a library which is used to make requests to an API, return data from the API, and then do things with that data in our React application.
import axios from 'axios';
import { setProducts, setLoading, setError } from '../slices/products';

export const getProducts = () => async (dispatch) => {
  dispatch(setLoading(true));

  try {
    const { data } = await axios.get('/api/products');

    dispatch(setProducts(data));
  } catch (error) {
    dispatch(
      setError(
        error.response && error.reponse.data.message
          ? error.response.data.message
          : error.message
          ? error.message
          : 'An unexpected error has occured. Please try again later'
      )
    );
  }
};
