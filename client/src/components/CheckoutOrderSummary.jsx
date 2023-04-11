import {
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue as mode,
  Badge,
  Box,
  Link,
  Divider,
  useDisclosure,
} from '@chakra-ui/react';
import { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as ReactLink } from 'react-router-dom';
import { PhoneIcon, EmailIcon, ChatIcon } from '@chakra-ui/icons';
import { createOrder } from '../redux/actions/orderActions';
import CheckoutItem from './CheckoutItem';
import PayPalButton from './PayPalButton';

const CheckoutOrderSummary = () => {
  const colorMode = mode('gray.600', 'gray.400');
  const cartItems = useSelector((state) => state.cart);
  const { cart, subtotal, expressShipping } = cartItems;
  const user = useSelector((state) => state.user);
  const { userInfo } = user;
  const shippingInfo = useSelector((state) => state.order);
  const { error, shippingAddress } = cartItems;
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const dispatch = useDispatch();

  const shipping = useCallback(
    () => (expressShipping === 'true' ? 14.99 : subtotal <= 300 ? 4.99 : 0),
    [expressShipping, subtotal]
  );

  const total = useCallback(
    () => Number(shipping() === 0 ? Number(subtotal) : Number(subtotal) + shipping()).toFixed(2),
    [shipping, subtotal]
  );

  const onPaymentSuccess = () => {
    alert('order success');
  };

  const onPaymentError = () => {
    alert('order error');
  };

  return (
    <Stack spacing='8' rounded='xl' padding='8' width='full'>
      <Heading size='md' color='brand.5001'>
        Order Summary
      </Heading>
      {cart.map((item) => (
        <CheckoutItem key={item.id} cartItem={item} />
      ))}
      <Stack spacing='6'>
        <Flex justify='space-between'>
          <Text fontWeight='medium' color='brand.5001'>
            Subtotal
          </Text>
          <Text fontWeight='medium' color='brand.5001'>
            {subtotal}
          </Text>
        </Flex>
        <Flex justify='space-between'>
          <Text fontWeight='medium' color='brand.5001'>
            Shipping
          </Text>
          <Text fontWeight='medium' color='brand.5001'>
            {shipping() === 0 ? (
              <Badge rounded='full' px='3' fontSize='0.8em' colorScheme='green'>
                Free
              </Badge>
            ) : (
              `${shipping()}`
            )}
          </Text>
        </Flex>

        <Flex justify='space-between'>
          <Text fontSize='lg' fontWeight='semibold' color='brand.5001'>
            Subtotal
          </Text>
          <Text fontSize='xl' fontWeight='extrabold'>
            ${Number(total())}
          </Text>
        </Flex>
      </Stack>
      <PayPalButton total={total} onPaymentSuccess={onPaymentSuccess} onPaymentError={onPaymentError} />
      <Box align='center'>
        <Text fontSize='sm' color='brand.500'>
          Have a question? or need help to complete your order?
        </Text>
        <Flex justifyContent='center' color='brand.500'>
          <Flex align='center'>
            <ChatIcon />
            <Text m='2'>Live chat</Text>
          </Flex>
          <Flex align='center'>
            <PhoneIcon />
            <Text m='2'>Call us</Text>
          </Flex>
          <Flex align='center'>
            <EmailIcon />
            <Text m='2'>Email</Text>
          </Flex>
        </Flex>
      </Box>
      <Divider backgroundColor='brand.600' />
      <Flex justifyContent='center' my='6' fontWeight='semibold'>
        <p>or</p>
        <Link as={ReactLink} to='/shop' ml='1'>
          Continue Shopping
        </Link>
      </Flex>
    </Stack>
  );
};

export default CheckoutOrderSummary;