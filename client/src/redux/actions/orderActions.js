import axios from 'axios';
import { shippingAddressAdd, setError } from '../slices/order';

export const setShippingAddress = (data) => (dispatch) => {
  dispatch(shippingAddressAdd(data));
};

export const setShippingAddressError = (value) => (dispatch) => {
  dispatch(setError(value));
};

export const createdOrder = (order) => async (dispatch, getState) => {
  const {
    order: { shippingAddress },
    user: { userInfo },
  } = getState();

  const preparedOrder = { ...order, shippingAddress };
  try {
    const config = {
      header: {
        Authorization: `Bearer ${userInfo.token}`,
        'Content=-Type': `application/json`,
      },
    };
    const { data } = await axios.post('api/orders', preparedOrder, config);
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
