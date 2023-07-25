import {
  Center,
  Stack,
  Spinner,
  SimpleGrid,
  Button,
  Box,
  Flex,
  GridItem,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Heading,
} from '@chakra-ui/react';
import ProductCard from '../components/ProductCard';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as ReactLink, useLocation, useParams } from 'react-router-dom';
import { getProducts, getFilteredProducts } from '../redux/actions/productActions';
import { clearCategory } from '../redux/slices/products';
import ProductPageHeroMobile from '../otherassets/ProductPageHeroMobile.jpg';

const ProductsScreens = () => {
  const dispatch = useDispatch();
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
      // Fetch all products if no category is specified
      dispatch(getProducts());
    } else {
      dispatch(getFilteredProducts(category));
    }
    return () => {
      // Clear the category when the component is unmounted
      dispatch(clearCategory());
    };
  }, [dispatch, category]);

  const numColumns = Math.min(
    productList.category === null ? productList.products.length : productList.filteredProducts.length,
    4
  );

  const { pathname } = useLocation();
  const isActive = (linkPath) => {
    return pathname === linkPath;
  };

  // filter button styles
  const buttonStyles = {
    as: ReactLink,
    variant: 'none',
    fontFamily: 'heading',
    fontSize: { base: 'xl', md: '2xl' },
  };

  return (
    <Box
      textAlign='center'
      id='main-content-products'
      mx='auto'
      overflow='hidden'
      flex={1}
      minW='100%'
      px={{ base: '0', lg: '12' }}
    >
      <Flex
        as='section'
        w='full'
        h={['md', 'lg']}
        bgPos='center'
        bgSize='cover'
        backgroundImage={{
          base: `url(${ProductPageHeroMobile})`,
          md: `url(https://storage.googleapis.com/anderhillproducts/otherassets/ProductPageHero.jpg)`,
        }}
      >
        <Heading
          color='brand.100'
          as='h2'
          fontSize={['4xl', '5xl', '7xl']}
          alignSelf='center'
          mx='auto'
          w={['85%', '75%']}
          textAlign='center'
        >
          Our Collections
        </Heading>
      </Flex>
      <Stack minHeight='100vh' mx='auto' align='center' as='section'>
        <Box direction='row' pt={6} mx='auto'>
          <Button
            {...buttonStyles}
            to='/products/Home%20Accents'
            color={isActive('/products/Home%20Accents') ? 'brand.4001' : 'brand.500'}
          >
            Home Accents
          </Button>
          /
          <Button
            {...buttonStyles}
            to='/products/Dinnerware'
            color={isActive('/products/Dinnerware') ? 'brand.4001' : 'brand.500'}
          >
            Dinnerware
          </Button>
          /
          <Button {...buttonStyles} to='/products' color={isActive('/products') ? 'brand.4001' : 'brand.500'}>
            View All
          </Button>
        </Box>

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
            as='section'
            spacing={8}
            justify='center'
            backgroundColor='brand.100'
            px={{ base: '4', lg: '12' }}
            py={4}
            columns={{
              base: Math.min(2, numColumns),
              lg: Math.min(3, numColumns),
              xl: Math.min(4, numColumns),
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
            {productList.category === null
              ? productList.products.map((product) => (
                  <GridItem key={product._id} mx='auto'>
                    <Center>
                      <ProductCard product={product} />
                    </Center>
                  </GridItem>
                ))
              : productList.filteredProducts.map((product) => (
                  <GridItem key={product._id} mx='auto'>
                    <Center>
                      <ProductCard product={product} />
                    </Center>
                  </GridItem>
                ))}
          </SimpleGrid>
        )}
      </Stack>
    </Box>
  );
};

export default ProductsScreens;
