import { Box, Heading, Stack, Flex } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import CheckoutOrderSummary from '../components/CheckoutOrderSummary';

const CheckoutScreen = () => {
  const user = useSelector((state) => state.user);
  const { userInfo } = user;
  const location = useLocation();

  return userInfo ? (
    <Box
      minH='100vh'
      maxW={{ base: '3xl', lg: '7xl' }}
      mx='auto'
      px={{ base: '4', md: '8', lg: '12' }}
      py={{ base: '6', md: '8', lg: '12' }}
    >
      <Stack direction={{ base: 'column', lg: 'row' }} align={{ lg: 'flex-start' }}>
        <Stack spacing={{ base: '8', md: '10' }} flex='1.5' mb={{ base: '12', md: 'none' }}>
          <Heading size='lg' fontWeight='extrabold'>
            Shipping Information
          </Heading>
          <Stack spacing='6'>{/* <ShippingInfo/> */}</Stack>
        </Stack>
        <Flex direction='column' align='center' flex='1'>
          <CheckoutOrderSummary />
        </Flex>
      </Stack>
    </Box>
  ) : (
    <Navigate to='/login' replace={true} state={{ from: location }} />
  );
};

export default CheckoutScreen;
