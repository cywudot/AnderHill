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
} from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { BiSupport } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct, createProductReview, resetProductError } from '../redux/actions/productActions';
import { addCartItem } from '../redux/actions/cartActions';
import { useEffect, useState } from 'react';
import { TbTruckDelivery } from 'react-icons/tb';

const ProductScreen = () => {
  //reviews
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(1);
  const [title, setTitle] = useState('');
  const [reviewBoxOpen, setReviewBoxOpen] = useState(false);

  //image carousel
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  //redux
  const [amount, setAmount] = useState(1);
  let { id } = useParams();
  const toast = useToast();
  //redux
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
  }, [dispatch, id, cart, reviewSend, toast]);

  const changeAmount = (input) => {
    if (input === 'plus') {
      setAmount(amount + 1);
    }
    if (input === 'minus') {
      setAmount(amount - 1);
    }
  };

  const hasUserReviewed = () => product.reviews.some((item) => item.user === userInfo._id);
  const onSubmit = () => {
    dispatch(createProductReview(product._id, userInfo._id, comment, rating, title));
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
              <Stack pr={{ base: '0', md: '12' }} spacing={{ base: '8', md: '4' }} flex='1.5'>
                {product.productIsNew && (
                  <Badge
                    rounded='full'
                    px='5'
                    py='1'
                    fontSize='1em'
                    w='75px'
                    color='brand.100'
                    fontWeight='regular'
                    fontFamily='body'
                    backgroundColor='brand.3001'
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
                  <Heading ing fontSize={{ base: 'lg', lg: '2xl', md: '4xl' }} fontWeight='extrabold' color='brand.500'>
                    {product.name}
                  </Heading>
                  <Text fontSize={{ base: 'lg', lg: '2xl', md: '3xl' }} color='brand.500'>
                    ${product.price.toFixed(2)}
                  </Text>
                </Stack>

                <Stack spacing='5'>
                  <Box>
                    <Flex>
                      <HStack spacing='5px'>
                        <StarIcon color={product.rating >= 1 ? 'brand.400' : 'brand.200'} />
                        <StarIcon color={product.rating >= 2 ? 'brand.400' : 'brand.200'} />
                        <StarIcon color={product.rating >= 3 ? 'brand.400' : 'brand.200'} />
                        <StarIcon color={product.rating >= 4 ? 'brand.400' : 'brand.200'} />
                        <StarIcon color={product.rating >= 5 ? 'brand.400' : 'brand.200'} />
                      </HStack>
                      <Text fontSize='md' fontWeight='bold' ml='15px' color='brand.500'>
                        {product.numberOfReviews === 0
                          ? 'No Reviews Yet'
                          : `${product.numberOfReviews} ${product.numberOfReviews === 1 ? 'Review' : 'Reviews'}`}
                      </Text>
                    </Flex>
                  </Box>
                  <Text color='brand.500'>{product.description}</Text>
                  <Stack spacing='2px' direction='column'>
                    <Text color='brand.500' fontFamily='heading' fontSize='lg'>
                      Color: {product.color}
                    </Text>
                    <Text color='brand.500' fontFamily='heading' fontSize='lg'>
                      Size: {product.dimensions.diameter}cm diameter / {product.dimensions.height}cm height
                    </Text>
                    <Text color='brand.500' fontFamily='heading' fontSize='lg'>
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
                      <Button
                        isDisabled={amount <= 1}
                        onClick={() => changeAmount('minus')}
                        borderRadius='2px'
                        backgroundColor='brand.400'
                        _hover={{
                          backgroundColor: 'brand.4001',
                        }}
                      >
                        <Icon as={FaMinus} color='brand.100' />
                      </Button>
                      <Text color='brand.500'>{amount}</Text>
                      <Button
                        isDisabled={amount >= product.stock}
                        onClick={() => changeAmount('plus')}
                        borderRadius='0px'
                        backgroundColor='brand.400'
                        _hover={{
                          backgroundColor: 'brand.4001',
                        }}
                      >
                        <Icon as={FaPlus} color='brand.100' />
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
                      <Text fontWeight='regular'>Add to cart</Text>
                    </Button>
                  </Stack>

                  <Stack maxWidth='300px'>
                    <Flex alignItems='center'>
                      <TbTruckDelivery size='20px' color='#DFBD8E' />
                      <Text fontWeight='medium' fontSize='sm' ml='2' color='brand.500'>
                        Free shipping if order is $300 or above
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
              <Flex direction='column' align='center' flex='1' position='relative'>
                <Image
                  mb='30px'
                  borderRadius='2px'
                  objectFit='cover'
                  src={product.images[currentIndex]}
                  alt={product.name}
                  width='100%'
                  maxH={{ base: 'none', lg: '520px' }}
                />
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
                      />
                    ))}
                  </Box>
                </Box>
              </Flex>
            </Stack>
            {/* <Button onClick={handlePrev}>Prev</Button>
            <Button onClick={handleNext}>Next</Button> */}

            <Divider orientation='horizontal' backgroundColor='brand.400' h='2px' maxW='80%' mx='auto' />

            {/* {userInfo && (
              <>
                <Tooltip label={hasUserReviewed() ? 'You have already reviewed this product' : ''} fontSize='md'>
                  <Button
                    isDisabled={hasUserReviewed()}
                    mt='20px'
                    w='140px'
                    backgroundColor='brand.300'
                    _hover={{ backgroundColor: 'brand.3001' }}
                    color='brand.100'
                    rounded='2'
                    fontWeight='regular'
                    onClick={() => setReviewBoxOpen(!reviewBoxOpen)}
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
                      fontWeight='regular'
                      onClick={() => onSubmit()}
                    >
                      Submit Review
                    </Button>
                  </Stack>
                )}
              </>
            )} */}
            <Text
              fontSize='2xl'
              fontWeight='bold'
              p={5}
              fontFamily='heading'
              color='brand.500'
              textTransform='uppercase'
              textAlign='center'
            >
              Customer Reviews
            </Text>
            <Stack align='center' w='full' backgroundColor='white' boxShadow='base' rounded={2}>
              <Stack spacingx='40px' spacing='20px' w='100%' p={5} rounded={2}>
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
                      gap={{ base: '10px', md: '50px' }}
                      backgroundColor='brand.200'
                      p={5}
                    >
                      <Stack
                        justify='space-between'
                        minW='150px'
                        direction={{ base: 'row', md: 'column' }}
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
                          <StarIcon color={review.rating >= 2 ? 'brand.400' : 'brand.200'} />
                          <StarIcon color={review.rating >= 3 ? 'brand.400' : 'brand.200'} />
                          <StarIcon color={review.rating >= 4 ? 'brand.400' : 'brand.200'} />
                          <StarIcon color={review.rating >= 5 ? 'brand.400' : 'brand.200'} />
                        </HStack>
                        <Text fontWeight='semibold' color='brand.500'>
                          {review.title && review.title}
                        </Text>
                        <Text color='brand.500'>{review.comment}</Text>
                      </Stack>
                    </Stack>
                  ))
                )}
              </Stack>

              {/* <Stack spacingx='40px' spacing='20px' w='100%' p={5} rounded={2}>
                {product.reviews.map((review) => (
                  <Stack
                    key={review._id}
                    minHeight='100px'
                    direction={{ base: 'column', md: 'row' }}
                    gap={{ base: '10px', md: '50px' }}
                    backgroundColor='brand.200'
                    p={5}
                  >
                    <Stack
                      justify='space-between'
                      minW='150px'
                      direction={{ base: 'row', md: 'column' }}
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
                        <StarIcon color={review.rating >= 2 ? 'brand.400' : 'brand.200'} />
                        <StarIcon color={review.rating >= 3 ? 'brand.400' : 'brand.200'} />
                        <StarIcon color={review.rating >= 4 ? 'brand.400' : 'brand.200'} />
                        <StarIcon color={review.rating >= 5 ? 'brand.400' : 'brand.200'} />
                      </HStack>
                      <Text fontWeight='semibold' color='brand.500'>
                        {review.title && review.title}
                      </Text>
                      <Text color='brand.500'>{review.comment}</Text>
                    </Stack>
                  </Stack>
                ))}
              </Stack> */}
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
                    fontWeight='regular'
                    onClick={() => setReviewBoxOpen(!reviewBoxOpen)}
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
                      fontWeight='regular'
                      onClick={() => onSubmit()}
                    >
                      Submit Review
                    </Button>
                  </Stack>
                )}
              </>
            )}
          </Box>
        )
      )}
    </Wrap>
  );
};

export default ProductScreen;
