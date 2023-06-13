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
  useTheme,
} from '@chakra-ui/react';
import { FaCartPlus } from 'react-icons/fa';
import { Link as ReactLink } from 'react-router-dom';
import { StarIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCartItem } from '../redux/actions/cartActions';

const Rating = ({ rating, numberOfReviews }) => {
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
        {`${numberOfReviews} ${numberOfReviews === 1 ? 'Review' : 'Reviews'}`}
      </Text>
    </Flex>
  );
};

const ProductCard = ({ product }) => {
  // const theme = useTheme();

  const dispatch = useDispatch();
  const toast = useToast();

  const cartInfo = useSelector((state) => state.cart);
  const { cart } = cartInfo;

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseToggle = () => {
    setIsHovering((prevState) => !prevState);
  };

  const addItem = (id) => {
    if (cart.some((cartItem) => cartItem.id === id)) {
      toast({
        description: 'This item is already in your cart. Go to your cart to change the amount',
        status: 'error',
        isCloseable: true,
      });
    } else {
      dispatch(addCartItem(id, 1));
      toast({ description: 'Item has been added.', status: 'success', isClosable: true });
    }
  };

  return (
    <Stack minW='270px' h='380px' position='absolute'>
      {/* {product.isNew && <img src={NewProductTag} alt='logo' width='100px' position='relative' />} */}
      <Link as={ReactLink} to={`/product/${product._id}`} cursor='pointer' variant='none'>
        <Image
          src={product.images[isHovering ? 1 : 0]}
          alt={product.name}
          objectFit='cover'
          minW='270px'
          h='300px'
          onMouseEnter={handleMouseToggle}
          onMouseLeave={handleMouseToggle}
        />
        {product.productIsNew && (
          <Box flex='1' max='5' alignItems='baseline' position='absolute' top={4} right={4}>
            <Badge
              rounded='full'
              px='5'
              fontSize='1em'
              color='brand.400'
              fontWeight='light'
              fontFamily='body'
              backgroundColor='brand.100'
            >
              New
            </Badge>
          </Box>
        )}
        {product.stock <= 0 && (
          <Box flex='1' max='5' alignItems='baseline' position='absolute' top={4} right={4}>
            <Badge
              rounded='full'
              px='5'
              fontSize='1em'
              color='brand.600'
              fontWeight='light'
              as='i'
              fontFamily='body'
              backgroundColor='brand.100'
            >
              Out of Stock
            </Badge>
          </Box>
        )}
      </Link>

      <Flex justify='space-between' color='brand.500'>
        <Link as={ReactLink} to={`/product/${product._id}`} cursor='pointer' _hover={{ textDecoration: 'none' }}>
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
        <Rating rating={product.rating} numberOfReviews={product.numberOfReviews} />
        <Tooltip
          label='Add to cart'
          bg='white'
          placement={'top'}
          color={'gray.800'}
          fontSize='1em'
          isDisabled={product.stock === 0}
        >
          <Button
            variant='ghost'
            bg='white'
            _hover={{ bg: 'transparent' }}
            isDisabled={product.stock === 0}
            p='0px'
            onClick={() => addItem(product._id)}
            backgroundColor='brand.100'
          >
            <Icon as={FaCartPlus} h={5} w={5} fill='brand.400' mb='10px' />
          </Button>
        </Tooltip>
      </Flex>
    </Stack>
  );
};

export default ProductCard;
