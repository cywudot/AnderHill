//THIS IS THE UI...or King(example from redux video) or the customer of the store(my example)

import {
  Center,
  Stack,
  Wrap,
  WrapItem,
  Spinner,
  Button,
  Box,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react';
import ProductCard from '../components/ProductCard';
// import { products } from '../products';

import { useEffect } from 'react';
// import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

//getFilterProducts inside
import { getProducts, getFilteredProducts } from '../redux/actions/productActions'; // AKA getting getProducts from productAction.jsx
import { useNavigate } from 'react-router-dom';
import shopallhero from '../otherassets/shopall-hero.jpg';

const ProductsScreens = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const productList = useSelector((state) => state.products);
  const { loading, error, products } = productList;

  let category;

  //PREVIOUS CODE
  // const handleFilter = (category) => {
  //   if (category === '') {
  //     dispatch(getProducts());
  //   } else {
  //     dispatch(getFilteredProducts(category));
  //   }
  // };

  // useEffect(() => {
  //   if (filterCategory) {
  //     dispatch(getFilteredProducts(filterCategory));
  //   } else {
  //     dispatch(getProducts());
  //   }
  // }, [dispatch, filterCategory]);

  //BRING BACK IF IT DOESNT WORK?
  // useEffect(() => {
  //   dispatch(getProducts());
  // }, []);

  useEffect(() => {
    const effectHasRun = sessionStorage.getItem('effectHasRun');
    if (!effectHasRun) {
      dispatch(getFilteredProducts());
      sessionStorage.setItem('effectHasRun', true);
    }
  }, []);

  const handleFilter = (category) => {
    dispatch(getFilteredProducts(category));
  };

  return (
    <>
      <Box mx='auto' overflow='hidden' flex={1} minW='100%' mt='107.7px'>
        <Image fit='cover' src={shopallhero} alt='Pottery Making' width='100%' minH='100px' maxH='200px' />
      </Box>
      <Stack direction='column' justify='center'>
        <Box direction='row' pt={6} mx='auto'>
          <Button
            onClick={() => handleFilter('Home Accents')}
            color='brand.500'
            variant='none'
            fontFamily='heading'
            fontSize='2xl'
            textAlign='left'
          >
            Home Accents
          </Button>
          <Button
            onClick={() => handleFilter('Dinnerware')}
            color='brand.500'
            variant='none'
            fontFamily='heading'
            fontSize='2xl'
            textAlign='left'
          >
            Dinnerware
          </Button>
          <Button onClick={() => handleFilter('')} color='brand.500' variant='none' fontFamily='heading' fontSize='2xl'>
            View All
          </Button>
        </Box>
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
            products.map((product) => (
              <WrapItem key={product._id}>
                <Center w='320px' h='420px'>
                  <ProductCard product={product} />
                </Center>
              </WrapItem>
            ))
          )}
        </Wrap>
      </Stack>
    </>
  );
};

export default ProductsScreens;

// useEffect(() => {
//   dispatch(getProducts());
// }, [dispatch]);
