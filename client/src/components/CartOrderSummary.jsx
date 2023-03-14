import { Button, Flex, Heading, Stack, Text, useColorModeValue as mode, Badge } from '@chakra-ui/react';
import { useState } from 'react';
import { FaArrowRight } from 'react-icons';
import { useSelector } from 'react-redux';
import { Link as ReactLink, useNavigate } from 'react-router-dom';

const CartOrderSummary = () => {
  const [buttonLoading, useButtonLoading] = useState();
  const standardShipping = Number(4.99).toFixed(2);
  const cartItem = useSelector((state) => state.cart);
  const { subtotal } = cartItem;
  const navigate = useNavigate;

  return (
    <Stack spacing='8' borderWidth='1px' rounded='lg' padding='8' w='full'>
      <Heading size='md'>Order Summary</Heading>
      <Stack spacing='6'>
        <Flex justify='space-between'>
          <Text fontWeight='medium' color='brand.500'>
            Subtotal
          </Text>
          <Text fontWeight='medium' color='brand.500'>
            {subtotal}
          </Text>
        </Flex>
        <Flex justify='space-between'>
          <Text fontWeight='medium' color='brand.500'>
            Shipping
          </Text>
          <Text fontWeight='medium' color='brand.500'>
            {subtotal <= 300 ? (
              standardShipping
            ) : (
              <Badge rounded='full' px='2' fontSize='0.8em' colorScheme='green'>
                Free
              </Badge>
            )}
          </Text>
        </Flex>
        <Flex fontSize='lg' fontWeight='semibold'>
          {subtotal <= 1000 ? Number(subtotal) + Number(standardShipping) : subtotal}
        </Flex>
      </Stack>
      <Button
        as={ReactLink}
        to='/checkout'
        colorScheme='orange'
        size='lg'
        fontSize='md'
        rightIcon={<FaArrowRight />}
        isLoading={buttonLoading}
      ></Button>
    </Stack>
  );
};

export default CartOrderSummary;
