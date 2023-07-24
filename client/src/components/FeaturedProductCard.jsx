import { Flex, Box, Image, Stack, Link, Text } from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';

const ProductCardTest = ({ product }) => {
  return (
    <Link
      as={ReactLink}
      to={`/product/${product._id}`}
      aria-label={product.name}
      cursor='pointer'
      variant='none'
      _hover={{ textDecoration: 'none' }}
    >
      <Box position='relative' maxW='450px' mx='auto'>
        <Image src={product.images[1]} alt={product.name} objectFit='cover' w='full' position='relative' maxW='440px' />
      </Box>

      <Flex justify='space-between' color='brand.500' textAlign='center'>
        <Text fontSize={{ base: 'sm', md: 'lg', lg: 'md', xl: 'lg' }} fontWeight='regular' fontFamily='body'>
          {product.name}
        </Text>

        <Text fontSize={{ base: 'sm', md: 'md' }} fontWeight='regular'>
          ${product.price.toFixed(2)}
        </Text>
      </Flex>
    </Link>
  );
};

export default ProductCardTest;
