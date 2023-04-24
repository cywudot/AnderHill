import {
  Box,
  Flex,
  Heading,
  HStack,
  Link,
  Stack,
  useColorModeValue as mode,
  Spinner,
  Alert,
  AlertIcon,
  AlertDescription,
  AlertTitle,
  Wrap,
  Text,
  Icon,
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

  // const getHeadingContent = () => (cart.length === 1 ? '(1 item)' : `(${cart.length} items)`);
  const getHeadingContent = () => (cartItemsTotalCalc === 1 ? '(1 item)' : `(${cartItemsTotalCalc(cart)} items)`);

  return (
    <Wrap spacing='30px' justify='center' minHeight='100vh' backgroundColor='brand.100'>
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
        <Box
          maxW={{ base: '3xl', lg: '6xl' }}
          w={{ base: '95%', md: '80%' }}
          mx='auto'
          px={{ base: '4', md: '8', lg: '12' }}
          py={{ base: '6', md: '8', lg: '12' }}

          // width={[
          //   '100%', // 0-30em
          //   '95%', // 30em-48em
          //   '80%', // 48em-62em
          // ]}
        >
          <Stack
            direction={{ base: 'column', lg: 'row' }}
            align={{ lg: 'flex-start' }}
            spacing={{ base: '8', md: '10' }}
            w='full'
          >
            <Stack spacing={{ base: '8', md: '5' }} flex='2'>
              <Heading
                fontSize='xl'
                fontWeight='Regular'
                fontFamily='body'
                color='brand.500'
                backgroundColor='white'
                p={5}
                boxShadow='base'
              >
                Shopping Cart {getHeadingContent()}
              </Heading>

              <Stack spacing='6'>
                {cart.map((cartItem) => (
                  <CartItem key={cartItem.id} cartItem={cartItem} />
                ))}
              </Stack>
              <HStack
                fontSize='xl'
                fontWeight='Regular'
                fontFamily='body'
                color='brand.100'
                backgroundColor='brand.500'
                p={5}
                boxShadow='base'
                gap={3}
                alignItems='flex-start'
              >
                <Image src={FreeDeliveryIcon} w='60px' color='brand.500' />
                <VStack alignItems='flex-start'>
                  <Text>Free Standard Delivery</Text>
                  <Text fontSize='sm'>For orders $300 or above</Text>
                </VStack>
              </HStack>
            </Stack>

            <Flex direction='column' align='center' flex='1'>
              <CartOrderSummary />

              <HStack mt='6' fontWeight='semibold'>
                <Text fontWeight='light'>or</Text>
                <Link as={ReactLink} variant='none' to='/products'>
                  Continue Shopping
                </Link>
              </HStack>
            </Flex>
          </Stack>
        </Box>
      )}
    </Wrap>
  );
};

export default CartScreen;
