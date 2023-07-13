import { Button, Flex, Heading, Stack, Text, useColorModeValue as mode, Badge } from '@chakra-ui/react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link as ReactLink, useNavigate } from 'react-router-dom';

const CartOrderSummary = () => {
  const [buttonLoading, setButtonLoading] = useState();
  const standardShipping = Number(4.99).toFixed(2);
  const cartItem = useSelector((state) => state.cart);
  const { subtotal } = cartItem;
  const navigate = useNavigate();

  const checkoutHandler = () => {
    setButtonLoading(true);
    navigate('/checkout');
  };

  return (
    <Stack
      className='order-summary'
      spacing='8'
      rounded='sm'
      padding='12'
      w='full'
      backgroundColor='white'
      boxShadow='base'
      flex='1'
      minW='250px'
    >
      <Heading size='sm' mx='auto' fontFamily='body'>
        Order Summary
      </Heading>
      <Stack spacing='5'>
        <Flex justify='space-between' gap={20}>
          <Text fontWeight='medium' color='brand.500' size='sm'>
            Subtotal
          </Text>
          <Text fontWeight='medium' color='brand.500' size='sm'>
            ${subtotal}
          </Text>
        </Flex>
        <Flex justify='space-between'>
          <Text fontWeight='medium' color='brand.500' size='sm'>
            Shipping
          </Text>
          <Text fontWeight='medium' color='brand.500' size='sm'>
            {subtotal <= 300 ? (
              standardShipping
            ) : (
              <Badge rounded='full' px='4' py='1' fontSize='0.8em' colorScheme='green'>
                Free
              </Badge>
            )}
          </Text>
        </Flex>
        <Flex justify='space-between'>
          <Text fontSize={'lg'} fontWeight='extrabold'>
            Total
          </Text>
          <Text fontSize='lg'>
            ${subtotal <= 300 ? Number(subtotal) + Math.round(Number(standardShipping)) : subtotal}
          </Text>
        </Flex>
      </Stack>
      <Button
        as={ReactLink}
        to='/checkout'
        backgroundColor='brand.1000'
        _hover={{ backgroundColor: 'brand.1001' }}
        size='md'
        fontSize='md'
        rounded='2'
        isLoading={buttonLoading}
        onClick={() => checkoutHandler()}
      >
        <Text color='brand.100' fontWeight='regular'>
          Checkout
        </Text>
      </Button>
    </Stack>
  );
};

export default CartOrderSummary;
