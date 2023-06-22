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
    <Stack maxW='400px' mx='auto'>
      <Link as={ReactLink} to={`/product/${product._id}`} cursor='pointer' variant='none'>
        <Box position='relative'>
          <Image src={product.images[0]} alt={product.name} objectFit='cover' w='full' position='relative' />
        </Box>
      </Link>

      <Flex justify='space-between' color='brand.500'>
        <Link as={ReactLink} to={`/product/${product._id}`} cursor='pointer' _hover={{ textDecoration: 'none' }}>
          <Box fontSize={{ base: 'md', lg: 'xl', xl: '2xl' }} fontWeight='medium' fontFamily='heading'>
            {product.name}
          </Box>
        </Link>

        <Box fontSize={{ base: 'md', md: 'lg' }} fontWeight='regular'>
          <Text alignSelf='center' mt='3px'>
            ${product.price.toFixed(2)}
          </Text>
        </Box>
      </Flex>
    </Stack>
  );
};

export default ProductCardTest;
