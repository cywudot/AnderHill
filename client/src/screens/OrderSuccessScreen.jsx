import { Button, Alert, AlertTitle, AlertIcon, Wrap, useToast, Stack, Text, Link } from '@chakra-ui/react';
import { Link as ReactLink, useNavigate } from 'react-router-dom';
import { logout } from '../redux/actions/userActions';
import { useDispatch } from 'react-redux';

const OrderSuccessScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast();
  const logoutHandler = () => {
    dispatch(logout());
    toast({ description: 'You have been logged out', status: 'success', isClosable: true });
    navigate('/');
  };

  return (
    <Wrap
      justify='center'
      direction='column'
      align='center'
      minH='100vh'
      maxW={{ base: '3xl', lg: '6xl' }}
      mx='auto'
      p={10}
    >
      <Alert
        status='success'
        variant='subtle'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        textAlign='center'
        height='auto'
        backgroundColor='white'
        boxShadow='base'
        rounded='2'
        p={10}
      >
        <AlertIcon boxSize='55px' />
        <AlertTitle pt='8px' fontSize='2xl' fontFamily='heading'>
          Thank you! Your order has been placed.
        </AlertTitle>

        <Stack>
          <Text mt={2}>An email receipt including the detail's about your order has been sent to your email</Text>
        </Stack>

        <Stack mt='20px' minW='200px'>
          <Button
            borderColor='brand.500'
            color='brand.500'
            variant='outline'
            rounded='2'
            as={ReactLink}
            to='/your-orders'
          >
            Your Orders
          </Button>
          <Button borderColor='brand.500' color='brand.500' variant='outline' rounded='2' as={ReactLink} to='/products'>
            Products
          </Button>
          <Button borderColor='brand.500' color='brand.500' variant='outline' rounded='2' onClick={logoutHandler}>
            Logout
          </Button>
        </Stack>
      </Alert>

      <Stack w='full' backgroundColor='brand.700' p={5} boxShadow='base'>
        <Text fontSize='lg' fontWeight='semibold' color='brand.500'>
          Questions?
        </Text>
        <Text>Have any questions about your order? Feel free to contact us at 604-123-4567</Text>
      </Stack>
    </Wrap>
  );
};

export default OrderSuccessScreen;
