import { Flex, Heading, Stack, Text, Badge, Box, Link, Divider, useToast } from '@chakra-ui/react';
import { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as ReactLink, useNavigate } from 'react-router-dom';
import { PhoneIcon, EmailIcon, ChatIcon } from '@chakra-ui/icons';
import { createOrder, resetOrder } from '../redux/actions/orderActions';
import { resetCart } from '../redux/actions/cartActions';
import CheckoutItem from './CheckoutItem';
import PayPalButton from './PayPalButton';

const CheckoutOrderSummary = () => {
  const cartItems = useSelector((state) => state.cart);
  const { cart, subtotal, expressShipping } = cartItems;
  const user = useSelector((state) => state.user);
  const { userInfo } = user;
  const shippingInfo = useSelector((state) => state.order);
  const { error, shippingAddress } = shippingInfo;
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();

  const shipping = useCallback(
    () => (expressShipping === 'true' ? 14.99 : subtotal <= 300 ? 4.99 : 0),
    [expressShipping, subtotal]
  );

  const total = useCallback(
    () => Number(shipping() === 0 ? Number(subtotal) : Number(subtotal) + shipping()).toFixed(2),
    [shipping, subtotal]
  );

  useEffect(() => {
    if (!error) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [error, shippingAddress, total, expressShipping, shipping, dispatch]);

  const onPaymentSuccess = async (data) => {
    dispatch(
      createOrder({
        orderItems: cart,
        shippingAddress,
        paymentMethod: data.paymentSource,
        paymentDetails: data,
        shippingPrice: shipping(),
        totalPrice: total(),
        userInfo,
      })
    );
    dispatch(resetOrder());
    dispatch(resetCart());
    navigate('/order-success');
  };

  const onPaymentError = (error) => {
    toast({
      description:
        'Something went wrong during the payment process. Please try again or make sure that your PayPal account balance is enough for this purchase.',
      status: 'error',

      duration: '600000',
      isClosable: true,
    });
  };

  return (
    <Stack spacing='8' rounded='2' padding='8' width='full' backgroundColor='white' p={5} boxShadow='base'>
      <Heading size='md' color='brand.5001' textTransform='uppercase'>
        Order Summary
      </Heading>
      {cart.map((item) => (
        <CheckoutItem key={item.id} cartItem={item} />
      ))}

      <Stack spacing='6' color='brand.500'>
        <Flex justify='space-between'>
          <Text fontWeight='medium' color='brand.5001'>
            Subtotal
          </Text>
          <Text fontWeight='medium' color='brand.5001'>
            ${subtotal}
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
              `$${shipping()}`
            )}
          </Text>
        </Flex>

        <Flex justify='space-between' color='brand.500'>
          <Text fontSize={['md', 'lg']} fontWeight='semibold' color='brand.5001'>
            Subtotal
          </Text>
          <Text fontSize={['md', 'lg']} fontWeight='extrabold'>
            ${Number(total())}
          </Text>
        </Flex>
      </Stack>
      <PayPalButton
        total={total}
        onPaymentSuccess={onPaymentSuccess}
        onPaymentError={onPaymentError}
        disabled={buttonDisabled}
      />
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
      <Flex justifyContent='center' my='6' color='brand.500'>
        <Text fontWeight='light'>or</Text>
        <Link as={ReactLink} to='/products' ml='1' fontWeight='semibold'>
          Continue Shopping
        </Link>
      </Flex>
    </Stack>
  );
};

export default CheckoutOrderSummary;
