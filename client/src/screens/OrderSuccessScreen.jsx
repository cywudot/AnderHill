import {
  Button,
  Box,
  Heading,
  Alert,
  AlertTitle,
  AlertIcon,
  Divider,
  Wrap,
  useToast,
  Stack,
  HStack,
  VStack,
  Text,
  Link,
} from '@chakra-ui/react';
import { Link as ReactLink, useNavigate } from 'react-router-dom';
import { logout } from '../redux/actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import { getUserOrders } from '../redux/actions/userActions';
import { useEffect } from 'react';

const OrderSuccessScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast();
  const logoutHandler = () => {
    dispatch(logout());
    toast({ description: 'You have been logged out', status: 'success', isClosable: true });
    navigate('/');
  };

  const user = useSelector((state) => state.user);
  const { loading, error, orders, userInfo } = user;

  useEffect(() => {
    if (userInfo) {
      dispatch(getUserOrders());
    }
  }, []);

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
        <Box>
          <Heading color='brand.500' textTransform='uppercase'>
            Ander Hill Pottery
          </Heading>
        </Box>
        <Divider orientation='horizontal' py={3} />

        <VStack mt={2}>
          <Box p={5} mx={{ base: '0', md: '24' }}>
            <AlertTitle pt='8px' color='brand.500'>
              Thank you! Your order has been placed.
            </AlertTitle>

            <Text mt={2} textAlign='center'>
              An email receipt including the detail's about your order has been sent to your email. You can find your
              purchase information below
            </Text>
          </Box>

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
            <Button
              borderColor='brand.500'
              color='brand.500'
              variant='outline'
              rounded='2'
              as={ReactLink}
              to='/products'
            >
              Products
            </Button>
            <Button borderColor='brand.500' color='brand.500' variant='outline' rounded='2' onClick={logoutHandler}>
              Logout
            </Button>
          </Stack>
        </VStack>
      </Alert>

      <Stack w='full' backgroundColor='brand.500' p={5} boxShadow='base'>
        <Text fontSize='lg' fontWeight='bold' color='brand.100'>
          Questions?
        </Text>
        <Text color='brand.100'>Have any questions about your order? Feel free to contact us at 604-123-4567</Text>
      </Stack>
    </Wrap>
  );
};

export default OrderSuccessScreen;
