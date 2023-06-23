import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  Button,
  Tooltip,
  Stack,
  Link,
  HStack,
  Text,
  useToast,
  Card,
  Fade,
  AspectRatio,
  useTheme,
} from '@chakra-ui/react';
import { FaCartPlus } from 'react-icons/fa';
import { Link as ReactLink } from 'react-router-dom';
import { StarIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCartItem } from '../redux/actions/cartActions';

const ProductCardTest = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <Stack maxW='450px' mx='auto'>
      <Link
        as={ReactLink}
        to={`/product/${product._id}`}
        cursor='pointer'
        variant='none'
        _hover={{ textDecoration: 'none' }}
      >
        <Box position='relative'>
          <Image src={product.images[0]} alt={product.name} objectFit='cover' w='full' position='relative' />
        </Box>

        <Flex justify='space-between' color='brand.500' textAlign='center'>
          <Box fontSize={{ base: 'sm', md: 'lg', lg: 'md', xl: 'lg' }} fontWeight='regular' fontFamily='body'>
            {product.name}
          </Box>

          <Box fontSize={{ base: 'sm', md: 'md' }} fontWeight='regular'>
            ${product.price.toFixed(2)}
          </Box>
        </Flex>
      </Link>
    </Stack>
  );
};

export default ProductCardTest;
