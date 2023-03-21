import { useParams } from 'react-router-dom';
import {
  Box,
  Image,
  Text,
  Wrap,
  Stack,
  Spinner,
  Alert,
  AlertIcon,
  AlertDescription,
  AlertTitle,
  Divider,
  Flex,
  Badge,
  Heading,
  HStack,
  Button,
  SimpleGrid,
  useToast,
} from '@chakra-ui/react';
import { MinusIcon, StarIcon, SmallAddIcon, PlusSquareIcon } from '@chakra-ui/icons';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { BiPackage, BiSupport } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../redux/actions/productActions';
import { addCartItem } from '../redux/actions/cartActions';
import { useEffect, useState } from 'react';
import { TbTruckDelivery } from 'react-icons/tb';
const ProductScreen = () => {
  const [amount, setAmount] = useState(1);
  let { id } = useParams();
  const toast = useToast();
  //redux
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const { loading, error, product } = products;

  const cartContent = useSelector((state) => state.cart);
  const { cart } = cartContent;

  useEffect(() => {
    dispatch(getProduct(id));
  }, [dispatch, id, cart]);

  const changeAmount = (input) => {
    if (input === 'plus') {
      setAmount(amount + 1);
    }
    if (input === 'minus') {
      setAmount(amount - 1);
    }
  };

  const addItem = () => {
    dispatch(addCartItem(product._id, amount));
    toast({ description: 'Item has been added.', status: 'success', isClosable: true });
  };

  return (
    <Wrap spacing='30px' justify='center' minHeight='100vh' backgroundColor='brand.100'>
      {loading ? (
        <Stack direction='row' spacing={4}>
          <Spinner mt={20} thickness='2px' speed='0.65s' emptyColor='gray.200' color='brand.400' size='xl' />
        </Stack>
      ) : error ? (
        <Alert status='error'>
          <AlertIcon />
          <AlertTitle>We are sorry!</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      ) : (
        product && (
          <Box
            maxW={{ base: '3xl', lg: '7xl' }}
            mx='auto'
            px={{ base: '4', md: '8', lg: '12' }}
            py={{ base: '6', md: '8', lg: '12' }}
          >
            <Stack direction={{ base: 'column-reverse', lg: 'row' }} align='center' mb='50px'>
              <Stack
                pr={{ base: '0', md: '12' }}
                spacing={{ base: '8', md: '4' }}
                flex='1.5'
                // mb={{ base: 'none', md: 'none' }}
              >
                {product.productIsNew && (
                  <Badge
                    rounded='full'
                    px='5'
                    fontSize='1em'
                    w='75px'
                    color='brand.400'
                    fontWeight='light'
                    fontFamily='body'
                  >
                    New
                  </Badge>
                )}
                {product.stock <= 0 && (
                  <Badge
                    rounded='full'
                    px='5'
                    w='155px'
                    fontSize='1em'
                    color='brand.600'
                    fontWeight='light'
                    as='i'
                    fontFamily='body'
                  >
                    Out of Stock
                  </Badge>
                )}

                <Stack direction={{ base: 'row', lg: 'column' }} justify='space-between'>
                  <Heading fontSize='2xl' fontWeight='extrabold' color='brand.500'>
                    {product.name}
                  </Heading>
                  <Text fontSize='xl' color='brand.500'>
                    ${product.price.toFixed(2)}
                  </Text>
                </Stack>

                <Stack spacing='5'>
                  <Box>
                    <Flex>
                      <HStack spacing='5px'>
                        <StarIcon color='brand.400' />
                        <StarIcon color={product.rating >= 2 ? 'brand.400' : 'brand.200'} />
                        <StarIcon color={product.rating >= 3 ? 'brand.400' : 'brand.200'} />
                        <StarIcon color={product.rating >= 4 ? 'brand.400' : 'brand.200'} />
                        <StarIcon color={product.rating >= 5 ? 'brand.400' : 'brand.200'} />
                      </HStack>
                      <Text fontSize='md' fontWeight='bold' ml='15px' color='brand.500'>
                        {`${product.numberOfReviews} ${product.numberOfReviews === 1 ? 'Review' : 'Reviews'}`}
                      </Text>
                    </Flex>
                  </Box>
                  <Text color='brand.500'>{product.description}</Text>
                  <Stack spacing='2px' direction='column'>
                    <Text color='brand.500' fontFamily='heading' fontSize='md'>
                      Color: {product.color}
                    </Text>
                    <Text color='brand.500' fontFamily='heading' fontSize='md'>
                      Size: {product.dimensions.diameter}cm diameter / {product.dimensions.height}cm height
                    </Text>
                    <Text color='brand.500' fontFamily='heading'>
                      Material: {product.material}
                    </Text>
                  </Stack>

                  <Stack direction={{ base: 'column', lg: 'row' }}>
                    <Flex
                      w={{ base: '100%', lg: '50%' }}
                      p='5px'
                      border='1px'
                      borderColor='gray.200'
                      alignItems='center'
                      justify='space-between'
                      borderRadius='2px'
                    >
                      <Button isDisabled={amount <= 1} onClick={() => changeAmount('minus')} borderRadius='2px'>
                        <FaMinus />
                      </Button>
                      <Text color='brand.500'>{amount}</Text>
                      <Button
                        isDisabled={amount >= product.stock}
                        onClick={() => changeAmount('plus')}
                        borderRadius='0px'
                      >
                        <FaPlus />
                      </Button>
                    </Flex>

                    <Button
                      backgroundColor='brand.400'
                      _hover={{ backgroundColor: 'brand.4001' }}
                      onClick={() => addItem()}
                      color='brand.100'
                      borderRadius='2px'
                      isDisabled={product.stock === 0}
                      w={{ base: '100%', lg: '50%' }}
                      h='50px'
                    >
                      <Text fontWeight='light'>Add to cart</Text>
                    </Button>
                  </Stack>

                  <Stack w='270px'>
                    <Flex alignItems='center'>
                      <TbTruckDelivery size='20px' color='#DFBD8E' />
                      <Text fontWeight='medium' fontSize='sm' ml='2' color='brand.500'>
                        Free shipping if order is over $300
                      </Text>
                    </Flex>
                    <Flex alignItems='center'>
                      <BiSupport size='20px' color='#DFBD8E' />
                      <Text fontWeight='medium' fontSize='sm' ml='2' color='brand.500'>
                        We're here for you 24/7
                      </Text>
                    </Flex>
                  </Stack>
                </Stack>
              </Stack>
              <Flex direction='column' align='center' flex='1'>
                <Image mb='30px' borderRadius='2px' objectFit='cover' src={product.images[0]} alt={product.name} />
              </Flex>
            </Stack>

            <Divider orientation='horizontal' backgroundColor='brand.400' h='2px' maxW='80%' mx='auto' />

            <Stack align='center' mt='50px'>
              <Text fontSize='xl' fontWeight='semibold' mb='40px'>
                Reviews
              </Text>

              <Stack spacingX='40px' spacingY='20px'>
                {product.reviews.map((review) => (
                  <Stack
                    key={review._id}
                    minHeight='100px'
                    direction={{ base: 'column', md: 'row' }}
                    gap={{ base: '10px', md: '50px' }}
                  >
                    <Stack
                      justify='space-between'
                      minW='120px'
                      direction={{ base: 'row', md: 'column' }}
                      backgroundColor={{ base: 'brand.200', md: 'brand.100' }}
                      py={{ base: '10px', md: '0px' }}
                      px={{ base: '5px', md: '0px' }}
                    >
                      <Text fontSize='md' color='brand.500' fontWeight='semibold'>
                        {review.name}
                      </Text>
                      <Text color='brand.800' fontSize='sm'>
                        {new Date(review.createdAt).toDateString()}
                      </Text>
                    </Stack>

                    <Stack justify='space-between'>
                      <HStack spacing='5px' mt='3px'>
                        <StarIcon color='brand.400' />
                        <StarIcon color={product.rating >= 2 ? 'brand.400' : 'brand.200'} />
                        <StarIcon color={product.rating >= 3 ? 'brand.400' : 'brand.200'} />
                        <StarIcon color={product.rating >= 4 ? 'brand.400' : 'brand.200'} />
                        <StarIcon color={product.rating >= 5 ? 'brand.400' : 'brand.200'} />
                      </HStack>
                      <Text fontWeight='semibold' color='brand.500'>
                        {review.title && review.title}
                      </Text>
                      <Text color='brand.500'>{review.comment}</Text>
                    </Stack>
                  </Stack>
                ))}
              </Stack>
            </Stack>
          </Box>
        )
      )}
    </Wrap>
  );
};

export default ProductScreen;
