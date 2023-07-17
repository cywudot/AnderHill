import { Box, Heading, Stack, Flex } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import CheckoutOrderSummary from '../components/CheckoutOrderSummary';
import ShippingInformation from '../components/ShippingInformation';

const CheckoutScreen = () => {
  const user = useSelector((state) => state.user);
  const { userInfo } = user;
  const location = useLocation();

  return userInfo ? (
    <Box
      maxW={{ base: '3xl', lg: '7xl' }}
      px={{ base: '4', md: '8', lg: '12' }}
      py={{ base: '6', md: '8', lg: '12' }}
      mx='auto'
    >
      <Stack direction={{ base: 'column', lg: 'row' }} align={{ lg: 'flex-start' }} gap={{ lg: '5' }} minH='100vh'>
        <Stack spacing={{ base: '8', md: '5' }} flex='1.5' mb={{ base: '5', md: 'none' }} as='section'>
          <Heading
            size={['md', 'lg']}
            fontWeight='extrabold'
            backgroundColor='white'
            p={5}
            boxShadow='base'
            textTransform='uppercase'
          >
            Shipping Information
          </Heading>
          <Stack spacing='5' as='section'>
            <ShippingInformation />
          </Stack>
        </Stack>
        <Flex direction='column' align='center' flex='1' as='section'>
          <CheckoutOrderSummary />
        </Flex>
      </Stack>
    </Box>
  ) : (
    <Navigate to='/login' replace={true} state={{ from: location }} />
  );
};

export default CheckoutScreen;
