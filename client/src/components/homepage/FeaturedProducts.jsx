import {
  Center,
  Stack,
  Spinner,
  SimpleGrid,
  Button,
  Box,
  Flex,
  Text,
  VStack,
  GridItem,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Heading,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as ReactLink, useLocation, useParams } from 'react-router-dom';
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
        w='auto'
        justifyContent={{ base: 'center', lg: 'left' }}
        alignItems='center'
        px='12'
        pt={{ base: '0', lg: '14' }}
      >
        <Box>
          <Heading
            as='h3'
            size={{ base: 'xl', md: 'xl' }}
            textDecoration='uppercase'
            color='brand.500'
            pb={{ base: '0', lg: '4' }}
          >
            Featured Products
          </Heading>
        </Box>
      </Flex>
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
    </>
  );
};

export default FeatureProducts;
