import { CloseButton, Flex, Select, Stack, Image, Text } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { addCartItem, removeCartItem } from '../redux/actions/cartActions';

const CartItem = ({ cartItem }) => {
  const { name, image, price, stock, qty, id, color, material, diameter, height } = cartItem;
  const dispatch = useDispatch();

  return (
    <Stack
      className='checkout-item'
      direction={{ base: 'column', sm: 'row' }}
      justify='space-between'
      gap={['20px', '50px']}
      align='center'
      backgroundColor='white'
      boxShadow='base'
      p={3}
    >
      <Stack width={{ base: 'full', lg: '350px' }} flex='1'>
        <Image
          rounded='sm'
          w='full'
          h={{ base: '170px', sm: 'auto' }}
          fit='cover'
          src={image[0]}
          alt={image}
          mx='auto'
        />
      </Stack>

      <Stack flex='2' w='full' gap={['5', '10']} justify='space-between' className='item-description'>
        <Stack align='flex-start'>
          <Text fontWeight='semibold' fontSize={{ base: 'sm', md: 'md' }} color='brand.500'>
            {name}
          </Text>
          <Stack spacing={['8px', '20px']} direction={['column', 'row']}>
            <Text fontSize='sm' color='brand.800'>
              Color: {color}
            </Text>
            <Text fontSize='sm' color='brand.800'>
              Material: {material}
            </Text>
          </Stack>

          <Text fontSize='sm' color='brand.800'>
            Size: {diameter}cm / {height}cm
          </Text>
        </Stack>

        <Flex direction='row' justify='space-between' w='full' gap={5}>
          <Select
            name='qty'
            maxW='80px'
            color='brand.500'
            backgroundColor='white'
            rounded='sm'
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
      </Stack>
    </Stack>
  );
};

export default CartItem;
