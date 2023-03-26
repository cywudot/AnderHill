import { CloseButton, Flex, Select, useColorModeValue as mode, Stack, Image, Box, Text } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { addCartItem, removeCartItem } from '../redux/actions/cartActions';

const CartItem = ({ cartItem }) => {
  const { name, image, price, stock, qty, id, color, material, diameter, height } = cartItem;
  const dispatch = useDispatch();

  return (
    <Flex
      direction={{ base: 'column', md: 'row' }}
      justify='space-between'
      gap='10px'
      align='center'
      // maxWidth={{ base: '300px', md: '600px' }}
      // backgroundColor='brand.300'
    >
      <Stack direction={{ base: 'row', md: 'column' }} spacing='5' width='full'>
        <Image
          rounded='sm'
          w='160px'
          h='170px'
          fit='cover'
          src={image[0]}
          alt={image}
          draggable='false'
          loading='lazy'
        />

        <Box>
          <Stack spacing='0.5'>
            <Text fontWeight='semibold' fontSize='md' color='brand.500'>
              {name}
            </Text>

            <Stack direction='row' gap='10px'>
              <Text fontWeight='medium' fontSize='sm' color='brand.800'>
                Color: {color}
              </Text>
              <Text fontWeight='medium' fontSize='sm' color='brand.800'>
                Material: {material}
              </Text>
            </Stack>
          </Stack>
          <Text fontWeight='medium' fontSize='sm' color='brand.800'>
            Size: {diameter}cm / {height}cm
          </Text>
        </Box>
      </Stack>

      <Flex
        w='full'
        mt={{ base: '4', md: '0' }}
        align={{ base: 'center', md: 'baseline' }}
        justify='space-between'
        display='flex'
      >
        <Select
          maxW='80px'
          color='brand.500'
          backgroundColor='brand.100'
          focusBorderColor='brand.500'
          borderColor='brand.500'
          value={qty}
          onChange={(e) => {
            dispatch(addCartItem(id, e.target.value));
          }}
        >
          {[...Array(stock).keys()].map((x) => (
            <option key={x + 1} value={x + 1}>
              {x + 1}
            </option>
          ))}
        </Select>
        <Text fontWeight='bold' color='brand.500'>
          ${price}
        </Text>
        <CloseButton onClick={() => dispatch(removeCartItem(id))} color='brand.500' />
      </Flex>
    </Flex>
  );
};

export default CartItem;
