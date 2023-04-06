import { Box, Heading, Stack, Flex } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const CheckoutScreen = () => {
  const user = useSelector((state) => state.user);
  const { userInfo } = user;
  const location = useLocation();

  return <div>CheckoutScreen</div>;
};

export default CheckoutScreen;
