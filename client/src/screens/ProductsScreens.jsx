import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  Button,
  Tooltip,
  Stack,
  Link,
  HStack,
  Text,
} from '@chakra-ui/react';

import { Center, Wrap, WrapItem } from '@chakra-ui/react';
import { products } from '../products';
import ProductCard from '../components/ProductCard';
import ProductsHero from '../logoandbackground/neven-krcmarek-accent-unsplash.jpg';
const ProductsScreens = () => {
  return (
    <>
      {/* <Box>
        <img src={ProductsHero} alt='ProductHeroImage' />
      </Box> */}
      <Wrap spacing='30px' justify='center' minHeight='100vh'>
        {products.map((product) => (
          <WrapItem key={product._id}>
            <Center w='320px' h='420px'>
              <ProductCard product={product} />
            </Center>
          </WrapItem>
        ))}
      </Wrap>
    </>
  );
};

export default ProductsScreens;
