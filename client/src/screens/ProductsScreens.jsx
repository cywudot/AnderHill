import {
  Center,
  Stack,
  Wrap,
  Divider,
  WrapItem,
  Spinner,
  SimpleGrid,
  Container,
  Button,
  Box,
  Flex,
  Grid,
  GridItem,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Heading,
  Image,
  Link,
  Text,
  VStack,
  HStack,
} from '@chakra-ui/react';
import ProductCard from '../components/ProductCard';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as ReactLink } from 'react-router-dom';
import { getProducts, getFilteredProducts } from '../redux/actions/productActions'; // AKA getting getProducts from productAction.jsx
import { setFilterCategory, clearCategory } from '../redux/slices/products';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import ProductPageHero from '../otherassets/ProductPageHero.jpg';
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
      dispatch(getProducts());
    } else {
      dispatch(getFilteredProducts(category)); // Call getFilteredProducts action
    }
    return () => {
      dispatch(clearCategory());
    };
  }, [dispatch, category]);

  const numColumns = Math.min(
    productList.category === null ? productList.products.length : productList.filteredProducts.length,
    4
  );
  // const handleFilter = (category) => {
  //   if (category) {
  //     dispatch(setFilterCategory(category));
  //   } else {
  //     dispatch(clearCategory());
  //     dispatch(getProducts());
  //   }
  // };
  return (
    <Box textAlign='center'>
      <Box mx='auto' overflow='hidden' flex={1} minW='100%' px={{ base: '0', lg: '12' }}>
        <Box
          w='full'
          h='lg'
          bgPos='center'
          bgSize='cover'
          backgroundImage={{
            base: `url(${ProductPageHeroMobile})`,
            md: `url(${ProductPageHero})`,
          }}
        >
          <Flex pos='relative' boxSize='full' bg='blackAlpha.300'>
            <Stack mx='auto' spacing={6} w={['8xl', '6xl']} justify='center' px={2}>
              <Heading
                fontSize={['2xl', '4xl', '6xl']}
                fontWeight='extrabold'
                color='brand.100'
                textTransform='uppercase'
                letterSpacing='wide'
                textAlign='center'
                justify='center'
              >
                Explore the Craftsmanship of Handmade Pottery
              </Heading>
            </Stack>
          </Flex>
        </Box>
      </Box>

      <Stack minHeight='100vh' mx='auto' align='center'>
        <Box direction='row' pt={6} mx='auto'>
          <Button
            as={ReactLink}
            to='/products/Home%20Accents'
            color='brand.500'
            variant='none'
            fontFamily='heading'
            fontSize={{ base: 'xl', md: '2xl' }}
            textAlign='left'
          >
            Home Accents
          </Button>
          /
          <Button
            as={ReactLink}
            to='/products/Dinnerware'
            color='brand.500'
            variant='none'
            fontFamily='heading'
            fontSize={{ base: 'xl', md: '2xl' }}
            textAlign='left'
          >
            Dinnerware
          </Button>
          /
          <Button
            as={ReactLink}
            to='/products'
            color='brand.500'
            variant='none'
            fontFamily='heading'
            fontSize={{ base: 'xl', md: '2xl' }}
          >
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
            spacing={8}
            justify='center'
            backgroundColor='brand.100'
            px={{ base: '8', lg: '10' }}
            pt={4}
            columns={{
              base: 1,
              sm: Math.min(2, numColumns),
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

    // <Box py={10} textAlign='center'>
    //   <Box mx='auto' overflow='hidden' flex={1} minW='100%'>
    //     <Image fit='cover' src={shopallhero} alt='Pottery Making' width='100%' minH={{ base: '150px', lg: '200px' }} />
    //   </Box>

    //   <Stack minHeight='100vh' mx='auto'>
    //     <Box direction='row' pt={6} mx='auto'>
    //       <Button
    //         as={ReactLink}
    //         to='/products/Home%20Accents'
    //         color='brand.500'
    //         variant='none'
    //         fontFamily='heading'
    //         fontSize='2xl'
    //         textAlign='left'
    //       >
    //         Home Accents
    //       </Button>
    //       /
    //       <Button
    //         as={ReactLink}
    //         to='/products/Dinnerware'
    //         color='brand.500'
    //         variant='none'
    //         fontFamily='heading'
    //         fontSize='2xl'
    //         textAlign='left'
    //       >
    //         Dinnerware
    //       </Button>
    //       /
    //       <Button as={ReactLink} to='/products' color='brand.500' variant='none' fontFamily='heading' fontSize='2xl'>
    //         View All
    //       </Button>
    //     </Box>

    //     <SimpleGrid
    //       spacing={8}
    //       justify='center'
    //       backgroundColor='brand.100'
    //       p={{ base: '8', lg: '10' }}
    //       // columns={{ base: '1', md: '2', lg: '2', xl: '3' }}
    //       columns={{
    //         base: Math.min(1, productList.products.length),
    //         sm: Math.min(2, productList.products.length),
    //         lg: Math.min(3, productList.products.length),
    //         xl: Math.min(4, productList.products.length),
    //       }}
    //       columnGap={{
    //         base: '4',
    //         md: '6',
    //       }}
    //       rowGap={{
    //         base: '8',
    //         md: '10',
    //       }}
    //     >
    //       {productList.loading ? (
    //         <Stack direction='row' justify='center' spacing={4}>
    //           <Spinner
    //             mt={20}
    //             thickness='2px'
    //             speed='0.65s'
    //             emptyColor='gray.200'
    //             color='brand.400'
    //             size='xl'
    //             mx='auto'
    //           />
    //         </Stack>
    //       ) : productList.error ? (
    //         <Alert status='error'>
    //           <AlertIcon />
    //           <AlertTitle>We are sorry!</AlertTitle>
    //           <AlertDescription>{productList.error}</AlertDescription>
    //         </Alert>
    //       ) : productList.category === null ? (
    //         productList.products.map((product) => (
    //           <GridItem key={product._id} mx='auto'>
    //             <Center>
    //               <ProductCard product={product} />
    //             </Center>
    //           </GridItem>
    //         ))
    //       ) : (
    //         productList.filteredProducts.map((product) => (
    //           <GridItem key={product._id} mx='auto'>
    //             <Center>
    //               <ProductCard product={product} />
    //             </Center>
    //           </GridItem>
    //         ))
    //       )}
    //     </SimpleGrid>
    //   </Stack>
    // </Box>
  );
};

export default ProductsScreens;
