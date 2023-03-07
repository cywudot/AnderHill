import {
  Center,
  Stack,
  Wrap,
  WrapItem,
  Spinner,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';
import ProductCard from '../components/ProductCard';
// import ProductsHero from '../logoandbackground/neven-krcmarek-accent-unsplash.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/actions/productActions'; // AKA getting getProducts from productAction.jsx

// import { products } from '../products';
import { useEffect } from 'react';
import { Fade, ScaleFade, Slide, SlideFade } from '@chakra-ui/react';

const ProductsScreens = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.products);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      {/* <Box>
        <img src={ProductsHero} alt='ProductHeroImage' />
      </Box> */}
      <Wrap spacing='30px' justify='center' minHeight='100vh'>
        {loading ? (
          <Stack direction='row' spacing={4}>
            <Spinner mt={20} thinkness='2px' speed='0.65s' emptyColour='gray.2000' color='brand.400' size='xl' />
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
