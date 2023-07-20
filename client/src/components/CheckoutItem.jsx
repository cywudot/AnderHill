import { Flex, Select, useColorModeValue as mode, Image, Text, Spacer, Divider } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { addCartItem } from '../redux/actions/cartActions';

const CheckoutItem = ({ cartItem }) => {
  const { name, image, price, stock, qty, id } = cartItem;
  const dispatch = useDispatch();
  return (
    <>
      <Flex gap='10px' className='checkout-product'>
        <Image rounded='sm' width='120px' height='120px' fit='cover' src={image[0]} alt={name} />
        <Flex direction='column' align='stretch' flex='1' mx='2' spacing='4'>
          <Flex direction={['column', 'row']} justify='space-between' gap={2}>
            <Text fontSize={['sm', 'md']}>{name}</Text>

            <Text fontWeight='bold' fontSize={['sm', 'md']}>
              ${price.toFixed(2)}
            </Text>
          </Flex>

          <Spacer />
          <Select
            name='qtyCheckout'
            maxW={['70px', '80px']}
            color='brand.500'
            rounded='2'
            backgroundColor='white'
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
        </Flex>
      </Flex>
      <Divider bg={mode('gray.400', 'gray.800')} />
    </>
  );
};

export default CheckoutItem;
