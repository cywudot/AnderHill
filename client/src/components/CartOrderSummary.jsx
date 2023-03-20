import { Button, Flex, Heading, Stack, Text, useColorModeValue as mode, Badge } from '@chakra-ui/react';
import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link as ReactLink, useNavigate } from 'react-router-dom';

const CartOrderSummary = () => {
  const [buttonLoading, setButtonLoading] = useState();
  const standardShipping = Number(4.99).toFixed(2);
  const cartItem = useSelector((state) => state.cart);
  const { subtotal } = cartItem;
  const navigate = useNavigate;

  const checkoutHandler = () => {
    setButtonLoading(true);
    navigate('/checkout');
  };

  return (
    <Stack spacing='8' borderWidth='1px' rounded='sm' padding='12' w='full' backgroundColor='brand.700' mt='16'>
      <Heading size='sm' mx='auto' fontFamily='body'>
        Order Summary
      </Heading>
      <Stack spacing='6'>
        <Flex justify='space-between'>
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
              <Badge rounded='full' px='2' fontSize='0.8em' colorScheme='green'>
                Free
              </Badge>
            )}
          </Text>
        </Flex>
        <Flex justify='space-between'>
          <Text fontSize='lg' fontWeight='extrabold'>
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
        backgroundColor='brand.100'
        size='md'
        fontSize='md'
        rightIcon={<FaArrowRight />}
        isLoading={buttonLoading}
        onClick={() => checkoutHandler()}
      >
        <Text color='brand.500'>Checkout</Text>
      </Button>
    </Stack>
  );
};

export default CartOrderSummary;
