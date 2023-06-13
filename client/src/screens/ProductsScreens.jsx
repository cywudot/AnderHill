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
  Link,
  Text,
} from '@chakra-ui/react';
import ProductCard from '../components/ProductCard';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as ReactLink } from 'react-router-dom';
import { getProducts, getFilteredProducts } from '../redux/actions/productActions'; // AKA getting getProducts from productAction.jsx
import { setFilterCategory, clearCategory } from '../redux/slices/products';
import { useNavigate } from 'react-router-dom';
import shopallhero from '../otherassets/shopall-hero.jpg';
import { useParams } from 'react-router-dom';

const ProductsScreens = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let { category } = useParams();

  const productList = useSelector((state) => ({
    loading: state.products.loading,
    error: state.products.error,
    products: state.products.products,
    category: state.products.category,
    filteredProducts: state.products.filteredProducts || state.products.products,
  }));

  useEffect(() => {
    if (!category) {
      dispatch(getProducts());
    } else {
      dispatch(getFilteredProducts(category)); // Call getFilteredProducts action
    }
    return () => {
      dispatch(clearCategory());
    };
  }, [dispatch, category]);

  // const handleFilter = (category) => {
  //   if (category) {
  //     dispatch(setFilterCategory(category));
  //   } else {
  //     dispatch(clearCategory());
  //     dispatch(getProducts());
  //   }
  // };
  return (
    <>
      <Box mx='auto' overflow='hidden' flex={1} minW='100%'>
        <Image fit='cover' src={shopallhero} alt='Pottery Making' width='100%' minH='100px' maxH='200px' />
      </Box>
      <Stack direction='column' justify='center'>
        <Box direction='row' pt={6} mx='auto'>
          <Button
            // onClick={() => handleFilter('Home Accents')}
            as={ReactLink}
            to='/products/Home%20Accents'
            color='brand.500'
            variant='none'
            fontFamily='heading'
            fontSize='2xl'
            textAlign='left'
          >
            Home Accents
          </Button>
          /
          <Button
            // onClick={() => handleFilter('Dinnerware')}
            as={ReactLink}
            to='/products/Dinnerware'
            color='brand.500'
            variant='none'
            fontFamily='heading'
            fontSize='2xl'
            textAlign='left'
          >
            Dinnerware
          </Button>
          /
          <Button
            // onClick={() => handleFilter(null)}
            as={ReactLink}
            to='/products'
            color='brand.500'
            variant='none'
            fontFamily='heading'
            fontSize='2xl'
          >
            View All
          </Button>
        </Box>
        <Wrap spacing='30px' justify='center' minHeight='100vh' backgroundColor='brand.100'>
          {productList.loading ? (
            <Stack direction='row' spacing={4}>
              <Spinner mt={20} thickness='2px' speed='0.65s' emptyColor='gray.200' color='brand.400' size='xl' />
            </Stack>
          ) : productList.error ? (
            <Alert status='error'>
              <AlertIcon />
              <AlertTitle>We are sorry!</AlertTitle>
              <AlertDescription>{productList.error}</AlertDescription>
            </Alert>
          ) : productList.category === null ? (
            productList.products.map((product) => (
              <WrapItem key={product._id}>
                <Center w='320px' h='420px'>
                  <ProductCard product={product} />
                </Center>
              </WrapItem>
            ))
          ) : (
            productList.filteredProducts.map((product) => (
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
