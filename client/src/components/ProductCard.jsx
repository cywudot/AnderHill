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
  useTheme,
} from '@chakra-ui/react';
import { FaCartPlus } from 'react-icons/fa';
import { Link as ReactLink } from 'react-router-dom';
import { StarIcon } from '@chakra-ui/icons';
import { useState } from 'react';

const Rating = ({ rating, numReviews }) => {
  const { iconSize, setIconSize } = useState('14px');
  return (
    <Flex mb='10px'>
      <HStack spacing='2px'>
        <StarIcon size={iconSize} w='14px' color='brand.400' />
        <StarIcon size={iconSize} w='14px' color={rating >= 2 ? 'brand.400' : 'brand.200'} />
        <StarIcon size={iconSize} w='14px' color={rating >= 3 ? 'brand.400' : 'brand.200'} />
        <StarIcon size={iconSize} w='14px' color={rating >= 4 ? 'brand.400' : 'brand.200'} />
        <StarIcon size={iconSize} w='14px' color={rating >= 5 ? 'brand.400' : 'brand.200'} />
      </HStack>
      <Text fontSize='sm' fontWeight='light' ml='10px' mt='5px'>
        {`${numReviews} ${numReviews === 1 ? 'Review' : 'Reviews'}`}
      </Text>
    </Flex>
  );
};

const ProductCard = ({ product }) => {
  // const theme = useTheme();

  return (
    <Stack minW='270px' h='380px' position='absolute'>
      {/* {product.isNew && <img src={NewProductTag} alt='logo' width='100px' position='relative' />} */}
      <Link as={ReactLink} to={`/product${product._id}`} cursor='pointer' variant='none'>
        <Image src={product.images[0]} alt={product.name} objectFit='cover' minW='270px' h='300px' />
        {product.isNew && (
          <Box flex='1' max='5' alignItems='baseline' position='absolute' top={4} right={4}>
            <Badge rounded='full' px='5' fontSize='1em' color='brand.400' fontWeight='light' as='i' fontFamily='body'>
              New
            </Badge>
          </Box>
        )}
        {product.stock <= 0 && (
          <Box flex='1' max='5' alignItems='baseline' position='absolute' top={4} right={4}>
            <Badge rounded='full' px='5' fontSize='1em' color='brand.600' fontWeight='light' as='i' fontFamily='body'>
              Out of Stock
            </Badge>
          </Box>
        )}
      </Link>

      <Flex justify='space-between' color='brand.500'>
        <Link as={ReactLink} to={`/product${product._id}`} cursor='pointer' _hover={{ textDecoration: 'none' }}>
          <Box fontSize='18px' fontWeight='light' fontFamily='heading'>
            {product.name}
          </Box>
        </Link>

        <Box fontSize='15px' fontWeight='light'>
          <Text alignSelf='center' mt='3px'>
            ${product.price.toFixed(2)}
          </Text>
        </Box>
      </Flex>

      <Flex justify='space-between'>
        <Rating rating={product.rating} numReviews={product.numReviews} />
        <Tooltip
          label='Add to cart'
          bg='white'
          placement={'top'}
          color={'gray.800'}
          fontSize='1em'
          isDisabled={product.stock === 0}
        >
          <Button variant='ghost' bg='white' _hover={{ bg: 'transparent' }} isDisabled={product.stock === 0} p='0px'>
            <Icon as={FaCartPlus} h={5} w={5} fill='brand.400' mb='10px' />
          </Button>
        </Tooltip>
      </Flex>
    </Stack>
  );
};

export default ProductCard;
