import { CloseButton, Flex, Select, Stack, Image, Text } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { addCartItem, removeCartItem } from '../redux/actions/cartActions';

const CartItem = ({ cartItem }) => {
  const { name, image, price, stock, qty, id, color, material, diameter, height } = cartItem;
  const dispatch = useDispatch();

  return (
    <Stack
      direction={{ base: 'column', sm: 'row' }}
      justify='space-between'
      gap={['10px', '50px']}
      align='center'
      backgroundColor='white'
      boxShadow='base'
      p={3}
    >
      {/* IMAGE */}
      <Stack width={{ base: 'full', lg: '350px' }} flex='1'>
        <Image
          rounded='sm'
          w='full'
          h={{ base: '170px', md: 'auto' }}
          fit='cover'
          src={image[0]}
          alt={name}
          mx='auto'
        />
      </Stack>
      {/* PRODUCT DETAILS */}
      <Stack flex='2' w='full' gap={['5', '10']} justify='space-between'>
        <Stack align='flex-start'>
          <Text fontWeight='semibold' fontSize={{ base: 'sm', md: 'md' }} color='brand.500'>
            {name}
          </Text>
          <Stack spacing={[2, 5]} direction={['column', 'row']} fontSize='sm'>
            <Text color='brand.800'>Color: {color}</Text>
            <Text color='brand.800'>Material: {material}</Text>
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
          <CloseButton onClick={() => dispatch(removeCartItem(id))} color='brand.500' aria-label='Remove item' />
        </Flex>
      </Stack>
    </Stack>
  );
};

export default CartItem;
