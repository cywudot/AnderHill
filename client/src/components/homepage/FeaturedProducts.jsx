import {
  Center,
  Stack,
  Spinner,
  SimpleGrid,
  Box,
  Flex,
  GridItem,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Heading,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/actions/productActions';
import FeaturedProductCard from '../FeaturedProductCard';

const FeatureProducts = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => ({
    loading: state.products.loading,
    error: state.products.error,
    products: state.products.products,
  }));

  const [randomProducts, setRandomProducts] = useState([]);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    if (productList.products.length > 0) {
      const shuffledProducts = [...productList.products].sort(() => Math.random() - 0.5);
      const selectedProducts = shuffledProducts.slice(0, 4); // Change the number as per your requirement
      setRandomProducts(selectedProducts);
    }
  }, [productList.products]);

  return (
    <>
      <Flex
        w='100%'
        justifyContent={{ base: 'center', lg: 'left' }}
        alignItems='center'
        px='10'
        pt={{ base: '0', lg: '14' }}
      >
        <Heading
          as='h3'
          size={{ base: 'xl', md: 'xl' }}
          textDecoration='uppercase'
          color='brand.500'
          pb={{ base: '0', lg: '4' }}
        >
          Featured Products
        </Heading>
      </Flex>

      {productList.loading ? (
        <Stack direction='row' justify='center' pt={10} spacing={4}>
          <Spinner mt={20} thickness='2px' speed='0.65s' emptyColor='gray.200' color='brand.400' size='xl' />
        </Stack>
      ) : productList.error ? (
        <Alert status='error'>
          <AlertIcon />
          <AlertTitle>We are sorry!</AlertTitle>
          <AlertDescription>{productList.error}</AlertDescription>
        </Alert>
      ) : (
        <SimpleGrid
          spacing={8}
          justify='center'
          backgroundColor='brand.100'
          px={{ base: '8', lg: '10' }}
          columns={{
            base: 1,
            sm: 2,
            lg: 4,
          }}
          columnGap={{
            base: '4',
            md: '6',
          }}
          rowGap={{
            base: '8',
            md: '10',
          }}
        >
          {randomProducts.map((product) => (
            <GridItem key={product._id} mx='auto'>
              <Center>
                <FeaturedProductCard product={product} />
              </Center>
            </GridItem>
          ))}
        </SimpleGrid>
      )}
    </>
  );
};

export default FeatureProducts;
