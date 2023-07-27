import {
  Flex,
  Box,
  Image,
  Badge,
  Icon,
  Button,
  Tooltip,
  Stack,
  Link,
  HStack,
  Text,
  useToast,
  VisuallyHidden,
  chakra,
  useMediaQuery,
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
    <Flex display={{ base: 'none', sm: 'flex' }} alignItems='center'>
      {/* Display star icons based on the rating */}
      <HStack spacing='2px'>
        <StarIcon size={iconSize} w='14px' color={rating >= 1 ? 'brand.4001' : 'brand.200'} />
        <StarIcon size={iconSize} w='14px' color={rating >= 2 ? 'brand.4001' : 'brand.200'} />
        <StarIcon size={iconSize} w='14px' color={rating >= 3 ? 'brand.4001' : 'brand.200'} />
        <StarIcon size={iconSize} w='14px' color={rating >= 4 ? 'brand.4001' : 'brand.200'} />
        <StarIcon size={iconSize} w='14px' color={rating >= 5 ? 'brand.4001' : 'brand.200'} />
      </HStack>
      <Text fontSize={{ base: 'sm', lg: 'md' }} fontWeight='regular' ml='10px'>
        {numberOfReviews === 0 ? 'No Reviews ' : `${numberOfReviews} ${numberOfReviews === 1 ? 'Review' : 'Reviews'}`}
      </Text>
    </Flex>
  );
};

const ProductCard = ({ product }) => {
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
      // Show an error toast if the item is already in the cart
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

  const Cart = ({ product }) => {
    return (
      <Tooltip
        label='Add to cart'
        bg='white'
        placement={'top'}
        color={'gray.800'}
        fontSize={{ base: 'sm', lg: 'md' }}
        isDisabled={product.stock === 0}
        p={2}
      >
        <Button
          variant='ghost'
          _hover={{ bg: 'transparent' }}
          isDisabled={product.stock === 0}
          p='0px'
          onClick={() => addItem(product._id)}
          backgroundColor='brand.100'
          h='20px'
        >
          <VisuallyHidden>Add {product.name} to cart</VisuallyHidden>
          <Icon as={FaCartPlus} h={{ base: '4', sm: '5' }} w={{ base: '4', sm: '5' }} fill='brand.4001' />
        </Button>
      </Tooltip>
    );
  };

  const [isMobile] = useMediaQuery('(max-width: 420px)');
  // Determine which set of images to use based on isMobile and isHovering states
  const imagesToShow = isMobile ? product.mobileimages : product.images;
  const imageIndex = isHovering ? 1 : 0;

  return (
    <Stack maxW='320px' mx='auto'>
      <Link as={ReactLink} to={`/product/${product._id}`} cursor='pointer' variant='none'>
        <Box position='relative'>
          <Image
            // src={product.images[isHovering ? 1 : 0]}
            src={imagesToShow[imageIndex]}
            alt={product.name}
            objectFit='cover'
            w='full'
            onMouseEnter={handleMouseToggle}
            onMouseLeave={handleMouseToggle}
            position='relative'
          />

          {/* Display a "New" or "Out of Stock" badge based on product stock & new product */}
          {product.productIsNew && (
            <chakra.span flex='1' max='5' alignItems='baseline' position='absolute' top={4} right={4}>
              <Badge
                rounded='2'
                px={{ base: '2', sm: '5' }}
                fontSize={{ base: 'sm', md: 'lg' }}
                color='brand.400'
                fontWeight='regular'
                fontFamily='body'
                backgroundColor='brand.100'
              >
                New
              </Badge>
            </chakra.span>
          )}
          {product.stock <= 0 && (
            <chakra.span flex='1' max='5' alignItems='baseline' position='absolute' top={4} right={4}>
              <Badge
                rounded='2'
                px={{ base: '2', sm: '5' }}
                fontSize={{ base: 'sm', md: 'lg' }}
                color='brand.600'
                fontWeight='regular'
                as='i'
                fontFamily='body'
                backgroundColor='brand.100'
              >
                Out of Stock
              </Badge>
            </chakra.span>
          )}
        </Box>
      </Link>

      <Flex
        direction={{ base: 'column', sm: 'row' }}
        justify='space-between'
        color='brand.500'
        textAlign={{ base: 'left', lg: 'center' }}
      >
        <Link
          as={ReactLink}
          to={`/product/${product._id}`}
          cursor='pointer'
          _hover={{ textDecoration: 'none' }}
          fontWeight='bold'
          fontFamily='heading'
          fontSize={{ base: 'md', sm: 'lg', md: 'xl' }}
        >
          {product.name}
        </Link>
        <Stack direction='row' justify='space-between' alignItems='center'>
          <Text mt='3px' fontSize={{ base: 'sm', lg: 'md' }} fontWeight='regular'>
            ${product.price.toFixed(2)}
          </Text>
        </Stack>
      </Flex>

      <Flex direction={{ base: 'column', sm: 'row' }} justify='space-between' alignItems='center'>
        <Rating rating={product.rating} numberOfReviews={product.numberOfReviews} />

        <Box display={{ base: 'none', sm: 'initial' }}>
          <Cart product={product} />
        </Box>
      </Flex>
    </Stack>
  );
};

export default ProductCard;
