import {
  Flex,
  Heading,
  HStack,
  Link,
  Stack,
  Spinner,
  Alert,
  AlertIcon,
  AlertDescription,
  AlertTitle,
  Wrap,
  Text,
  VStack,
  Image,
} from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem';
import CartOrderSummary from '../components/CartOrderSummary';
import FreeDeliveryIcon from '../sourced-icons/free-delivery.png';

const CartScreen = () => {
  const cartInfo = useSelector((state) => state.cart);
  const { loading, error, cart } = cartInfo;

  const cartItemsTotalCalc = (cartState) => {
    let total = 0;
    cartState.map((item) => (total += Number(item.qty)));
    return total;
  };

  const getHeadingContent = () => (cartItemsTotalCalc === 1 ? '(1 item)' : `(${cartItemsTotalCalc(cart)} items)`);

  return (
    <Wrap spacing='30px' justify='center' minHeight='100vh' backgroundColor='brand.100' className='main-content'>
      {loading ? (
        <Stack direction='row' spacing={4}>
          <Spinner mt={20} thinkness='2px' speed='0.65s' emptyColor='gray.200' color='brand.400' size='xl' />
        </Stack>
      ) : error ? (
        <Alert status='error'>
          <AlertIcon />
          <AlertTitle>We are sorry!</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      ) : cart.length <= 0 ? (
        <Alert status='warning'>
          <AlertIcon />
          <AlertTitle>Your cart is empty!</AlertTitle>
          <AlertDescription>
            <Link as={ReactLink} to='/products'>
              Click here to see products.
            </Link>
          </AlertDescription>
        </Alert>
      ) : (
        <Stack
          direction={{ base: 'column', lg: 'row' }}
          align={{ lg: 'flex-start' }}
          spacing={{ base: '8', md: '10' }}
          maxW={{ base: '2xl', lg: '8xl' }}
          mx='auto'
          px={{ base: '4', md: '10', lg: '12' }}
          py={{ base: '6', md: '10', lg: '12' }}
        >
          <Stack spacing={{ base: '8', md: '5' }} flex='1' as='section'>
            <Heading
              fontSize={['lg', 'xl']}
              fontWeight='regular'
              fontFamily='body'
              color='brand.500'
              backgroundColor='white'
              p={5}
              boxShadow='base'
            >
              Shopping Cart {getHeadingContent()}
            </Heading>

            {cart.map((cartItem) => (
              <CartItem key={cartItem.id} cartItem={cartItem} />
            ))}

            <HStack
              fontSize='xl'
              fontFamily='body'
              color='brand.100'
              backgroundColor='brand.500'
              p={5}
              boxShadow='base'
              gap={3}
              alignItems='flex-start'
            >
              <Image src={FreeDeliveryIcon} w='60px' color='brand.500' alt='delivery truck' />
              <VStack alignItems='flex-start'>
                <Text>Free Standard Delivery</Text>
                <Text fontSize='sm'>For orders $300 or above</Text>
              </VStack>
            </HStack>
          </Stack>

          <Flex direction='column' align='center' flex='1' as='section'>
            <CartOrderSummary />
            <HStack mt='6' fontWeight='semibold'>
              <Text fontWeight='light'>or</Text>
              <Link as={ReactLink} variant='none' to='/products'>
                Continue Shopping
              </Link>
            </HStack>
          </Flex>
        </Stack>
      )}
    </Wrap>
  );
};

export default CartScreen;
