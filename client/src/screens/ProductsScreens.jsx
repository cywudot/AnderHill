//THIS IS THE UI...or King(example from redux video) or the customer of the store(my example)

import {
  Center,
  Stack,
  Wrap,
  WrapItem,
  Spinner,
  Button,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';
import ProductCard from '../components/ProductCard';
// import { products } from '../products';

import { useEffect } from 'react';
// import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

//getFilterProducts inside
import { getProducts } from '../redux/actions/productActions'; // AKA getting getProducts from productAction.jsx

const ProductsScreens = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.products);
  const { loading, error, products, filterCategory } = productList;

  const handleFilter = (category) => {
    dispatch(getProducts(category));
  };

  useEffect(() => {
    if (filterCategory) {
      dispatch(getProducts(filterCategory));
    } else {
      dispatch(getProducts());
    }
  }, [dispatch, filterCategory]);

  return (
    <>
      <Button onClick={() => handleFilter('Home Accents')} color='brand.500'>
        Home Accents
      </Button>
      <Button onClick={() => handleFilter('Dinnerware')} color='brand.500'>
        Dinnerware
      </Button>
      <Button onClick={() => handleFilter('')} color='brand.500'>
        All Products
      </Button>
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
    </>
  );
};

export default ProductsScreens;

// useEffect(() => {
//   dispatch(getProducts());
// }, [dispatch]);
