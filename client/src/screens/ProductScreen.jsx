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
  Icon,
  Heading,
  HStack,
  Button,
  useToast,
  Tooltip,
  Input,
  Textarea,
  Center,
  useMediaQuery,
} from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { BiSupport, BiSolidWasher } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct, createProductReview, resetProductError } from '../redux/actions/productActions';
import { addCartItem } from '../redux/actions/cartActions';
import { resetProduct } from '../redux/slices/products';
import { useEffect, useState } from 'react';
import { TbTruckDelivery } from 'react-icons/tb';
import ProductsYouMightLike from '../components/ProductsYouMightLike';
import { formatReviewDate } from '../helpers/DateUtils';

const ProductScreen = () => {
  //Customer reviews states
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(1);
  const [title, setTitle] = useState('');
  const [reviewBoxOpen, setReviewBoxOpen] = useState(false);

  //redux
  const [amount, setAmount] = useState(1);
  let { id } = useParams();
  const toast = useToast();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const { loading, error, product, reviewSend } = products;

  const cartContent = useSelector((state) => state.cart);
  const { cart } = cartContent;

  const user = useSelector((state) => state.user);
  const { userInfo } = user;

  useEffect(() => {
    dispatch(getProduct(id));

    if (reviewSend) {
      toast({ description: 'Product review saved.', status: 'success', isClosable: 'true' });
      dispatch(resetProductError());
      setReviewBoxOpen(false);
    }
    return () => {
      // Clean up the product state when leaving the product page
      dispatch(resetProduct());
    };
  }, [dispatch, id, cart, reviewSend, toast]);

  //images carousel
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  //shopping cart quantity
  const changeAmount = (input) => {
    if (input === 'plus') {
      setAmount(amount + 1);
    }
    if (input === 'minus') {
      setAmount(amount - 1);
    }
  };
  //add to cart
  const addItem = () => {
    dispatch(addCartItem(product._id, amount));
    toast({ description: 'Item has been added.', status: 'success', isClosable: true });
  };

  // Function to check if the user has reviewed the product
  const hasUserReviewed = () => product.reviews.some((item) => item.user === userInfo._id);
  // Function to handle review submission
  const onSubmit = () => {
    dispatch(createProductReview(product._id, userInfo._id, comment, rating, title));
  };

  return (
    <Box>
      <Box as='section' justify='center' minH='100vh'>
        {loading ? (
          <Center>
            <Spinner mt={20} thickness='2px' speed='0.65s' emptyColor='gray.200' color='brand.400' size='xl' />
          </Center>
        ) : error ? (
          <Alert status='error'>
            <AlertIcon />
            <AlertTitle>We are sorry!</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        ) : (
          product && (
            <Box maxW='7xl' mx='auto' px={{ base: '4', md: '8', lg: '12' }} py={{ base: '6', md: '8', lg: '12' }}>
              <Stack
                direction={{ base: 'column-reverse', lg: 'row' }}
                align='center'
                mb='50px'
                gap={{ base: 0, lg: '10' }}
                maxW={{ base: 'xl', lg: '7xl' }}
                mx='auto'
                as='section'
              >
                <Stack flex='1.5' className='product-description' as='section'>
                  {product.stock <= 0 && (
                    <Badge
                      mb={[0, '3']}
                      rounded='full'
                      w='155px'
                      fontSize={['md', 'lg']}
                      bg='brand.100'
                      color='brand.600'
                      as='i'
                      fontFamily='body'
                    >
                      Out of Stock
                    </Badge>
                  )}

                  <Stack direction={{ base: 'row', lg: 'column' }} justify='space-between'>
                    <Heading
                      fontSize={{ base: 'xl', sm: '2xl', lg: '3xl' }}
                      fontWeight='extrabold'
                      color='brand.500'
                      textTransform='uppercase'
                    >
                      {product.name}
                    </Heading>
                    <Text fontSize={{ base: 'lg', sm: 'xl', md: '2xl' }} color='brand.500'>
                      ${product.price.toFixed(2)}
                    </Text>
                  </Stack>

                  <Stack gap={2}>
                    <Box>
                      <Flex>
                        <HStack spacing='5px'>
                          <StarIcon w={['14px', '16px']} color={product.rating >= 1 ? 'brand.400' : 'brand.200'} />
                          <StarIcon w={['14px', '16px']} color={product.rating >= 2 ? 'brand.400' : 'brand.200'} />
                          <StarIcon w={['14px', '16px']} color={product.rating >= 3 ? 'brand.400' : 'brand.200'} />
                          <StarIcon w={['14px', '16px']} color={product.rating >= 4 ? 'brand.400' : 'brand.200'} />
                          <StarIcon w={['14px', '16px']} color={product.rating >= 5 ? 'brand.400' : 'brand.200'} />
                        </HStack>
                        <Text fontSize={{ base: 'sm', sm: 'md' }} fontWeight='semibold' ml='15px' color='brand.500'>
                          {product.numberOfReviews === 0
                            ? 'No Reviews Yet'
                            : `${product.numberOfReviews} ${product.numberOfReviews === 1 ? 'Review' : 'Reviews'}`}
                        </Text>
                      </Flex>
                    </Box>
                    <Text color='brand.500' fontSize={['sm', 'md', 'lg']}>
                      {product.description}
                    </Text>

                    <Stack direction='column' backgroundColor='brand.700' p={4}>
                      <Text color='brand.500' fontSize={{ base: 'sm', md: 'md' }}>
                        <Text as='span' fontWeight='medium'>
                          Color:{' '}
                        </Text>
                        {product.color}
                      </Text>
                      <Text color='brand.500' fontSize={{ base: 'sm', md: 'md' }}>
                        <Text as='span' fontWeight='medium'>
                          Dimensions:{' '}
                        </Text>
                        {product.dimensions.diameter}cm diameter / {product.dimensions.height}cm height
                      </Text>
                      <Text color='brand.500' fontSize={{ base: 'sm', md: 'md' }}>
                        <Text as='span' fontWeight='medium'>
                          Material:{' '}
                        </Text>
                        {product.material}
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
                        <Button
                          isDisabled={amount <= 1}
                          onClick={() => changeAmount('minus')}
                          aria-label='Decrease Quantity'
                          borderRadius='2px'
                          backgroundColor='brand.500'
                          _hover={{ backgroundColor: 'brand.5001' }}
                        >
                          <Icon as={FaMinus} color='brand.100' />
                        </Button>
                        <Text color='brand.500'>{amount}</Text>
                        <Button
                          isDisabled={amount >= product.stock}
                          onClick={() => changeAmount('plus')}
                          aria-label='Increase Quantity'
                          borderRadius='0px'
                          backgroundColor='brand.500'
                          _hover={{ backgroundColor: 'brand.5001' }}
                        >
                          <Icon as={FaPlus} color='brand.100' />
                        </Button>
                      </Flex>

                      <Button
                        backgroundColor='brand.500'
                        _hover={{ backgroundColor: 'brand.5001' }}
                        onClick={() => addItem()}
                        color='brand.100'
                        borderRadius='2px'
                        isDisabled={product.stock === 0}
                        w={{ base: '100%', lg: '50%' }}
                        h='50px'
                      >
                        <Text>Add to cart</Text>
                      </Button>
                    </Stack>

                    <Stack maxWidth='400px'>
                      <Flex alignItems='center'>
                        <TbTruckDelivery size='20px' color='#454545' />
                        <Text fontWeight='medium' fontSize={['sm', 'md']} ml='2' color='brand.500'>
                          Free shipping if order is $300 or above
                        </Text>
                      </Flex>
                      <Flex alignItems='center' display={product.category.includes('Dinnerware') ? 'flex' : 'none'}>
                        <BiSolidWasher size='20px' color='#454545' />
                        <Text fontWeight='medium' fontSize={['sm', 'md']} ml='2' color='brand.500'>
                          Dishwasher Safe
                        </Text>
                      </Flex>
                      <Flex alignItems='center'>
                        <BiSupport size='20px' color='#454545' />
                        <Text fontWeight='medium' fontSize={['sm', 'md']} ml='2' color='brand.500'>
                          We're here for you 24/7
                        </Text>
                      </Flex>
                    </Stack>
                  </Stack>
                </Stack>

                <Flex
                  direction='column'
                  align='center'
                  flex='1'
                  position='relative'
                  className='product-image'
                  as='section'
                >
                  <Box>
                    <Image
                      mb='30px'
                      borderRadius='2px'
                      objectFit='cover'
                      src={product.images[currentIndex]}
                      alt={product.name}
                      width='100%'
                      maxH={{ base: 'none', lg: '520px' }}
                    />
                  </Box>
                  <Box textAlign='center' mt={2} position='absolute' bottom='0'>
                    <Box display='flex' justifyContent='center'>
                      {product.images.map((image, index) => (
                        <Box
                          key={index}
                          width='12px'
                          height='12px'
                          borderRadius='50%'
                          bg={index === currentIndex ? 'brand.3001' : 'brand.200'}
                          margin='5px'
                          cursor='pointer'
                          onClick={() => handleDotClick(index)}
                          tabIndex={0}
                          onKeyDown={(event) => {
                            if (event.key === 'Enter') {
                              handleDotClick(index);
                            }
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                </Flex>
              </Stack>

              <Divider orientation='horizontal' backgroundColor='brand.400' h='2px' maxW='80%' mx='auto' />
              <Box as='section'>
                <Heading
                  as='h3'
                  fontSize='2xl'
                  fontWeight='bold'
                  p={5}
                  fontFamily='heading'
                  color='brand.500'
                  textTransform='uppercase'
                  textAlign='center'
                >
                  Customer Reviews
                </Heading>

                <Stack align='center' w='full' backgroundColor='white' rounded={2} className='customer-reviews'>
                  <Stack spacingx='40px' spacing='20px' w='100%' p={3} rounded={2}>
                    {product.reviews.length === 0 ? (
                      <Text fontSize='md' color='brand.500' textAlign='center'>
                        No reviews yet. Be the first to leave a review!
                      </Text>
                    ) : (
                      product.reviews.map((review) => (
                        <Stack
                          key={review._id}
                          minHeight='100px'
                          direction={{ base: 'column', md: 'row' }}
                          gap={{ base: 0, md: '50px' }}
                          backgroundColor='brand.720'
                          p={5}
                          className='customer-review'
                        >
                          <Stack
                            justify='space-between'
                            minW='150px'
                            direction={{ base: 'row', md: 'column' }}
                            py={{ base: '10px', md: '0px' }}
                          >
                            <Text fontSize='md' color='brand.500' fontWeight='semibold'>
                              {review.name}
                            </Text>
                            <Text color='brand.800' fontSize='sm'>
                              {formatReviewDate(review.createdAt)}
                            </Text>
                          </Stack>

                          <Stack justify='space-between'>
                            <HStack spacing='5px' mt='3px' pb={3}>
                              <StarIcon w={['14px', '16px']} color='brand.400' />
                              <StarIcon w={['14px', '16px']} color={review.rating >= 2 ? 'brand.400' : 'brand.200'} />
                              <StarIcon w={['14px', '16px']} color={review.rating >= 3 ? 'brand.400' : 'brand.200'} />
                              <StarIcon w={['14px', '16px']} color={review.rating >= 4 ? 'brand.400' : 'brand.200'} />
                              <StarIcon w={['14px', '16px']} color={review.rating >= 5 ? 'brand.400' : 'brand.200'} />
                            </HStack>
                            <Text fontWeight='semibold' color='brand.500'>
                              {review.title && review.title}
                            </Text>
                            <Text color='brand.500' fontSize={['sm', 'md']}>
                              {review.comment}
                            </Text>
                          </Stack>
                        </Stack>
                      ))
                    )}
                  </Stack>
                </Stack>

                {userInfo && (
                  <>
                    <Tooltip label={hasUserReviewed() ? 'You have already reviewed this product' : ''} fontSize='md'>
                      <Button
                        isDisabled={hasUserReviewed()}
                        my='20px'
                        w='140px'
                        backgroundColor='brand.300'
                        _hover={{ backgroundColor: 'brand.3001' }}
                        color='brand.100'
                        rounded='2'
                        onClick={() => setReviewBoxOpen(!reviewBoxOpen)}
                        fontWeight='regular'
                      >
                        Write a review
                      </Button>
                    </Tooltip>
                    {reviewBoxOpen && (
                      <Stack mb='20px'>
                        <Wrap>
                          <HStack spacing='2px'>
                            <Button variant='outline' rounded='2' onClick={() => setRating(1)}>
                              <StarIcon color='brand.400' />
                            </Button>
                            <Button variant='outline' rounded='2' onClick={() => setRating(2)}>
                              <StarIcon color={rating >= 2 ? 'brand.400' : 'gray.200'} />
                            </Button>
                            <Button variant='outline' rounded='2' onClick={() => setRating(3)}>
                              <StarIcon color={rating >= 3 ? 'brand.400' : 'gray.200'} />
                            </Button>
                            <Button variant='outline' rounded='2' onClick={() => setRating(4)}>
                              <StarIcon color={rating >= 4 ? 'brand.400' : 'gray.200'} />
                            </Button>
                            <Button variant='outline' rounded='2' onClick={() => setRating(5)}>
                              <StarIcon color={rating >= 5 ? 'brand.400' : 'gray.200'} />
                            </Button>
                          </HStack>
                        </Wrap>
                        <Input
                          rounded='2'
                          onChange={(e) => {
                            setTitle(e.target.value);
                          }}
                          placeholder='Review title (optional)'
                        />
                        <Textarea
                          rounded='2'
                          onChange={(e) => {
                            setComment(e.target.value);
                          }}
                          placeholder='Write your review here'
                        />
                        <Button
                          w='140px'
                          backgroundColor='brand.400'
                          _hover={{ backgroundColor: 'brand.4001' }}
                          color='brand.100'
                          rounded='2'
                          onClick={() => onSubmit()}
                        >
                          Submit Review
                        </Button>
                      </Stack>
                    )}
                  </>
                )}
              </Box>
            </Box>
          )
        )}
      </Box>
      <ProductsYouMightLike />
    </Box>
  );
};

export default ProductScreen;
