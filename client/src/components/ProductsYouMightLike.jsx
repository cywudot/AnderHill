import { Box, Flex, Heading } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/actions/productActions';
import FeaturedProductCard from '../components/FeaturedProductCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { BiSolidChevronLeftSquare, BiSolidChevronRightSquare } from 'react-icons/bi';

const ProductsYouMightLike = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => ({
    loading: state.products.loading,
    error: state.products.error,
    products: state.products.products,
    product: state.products.product,
  }));

  const [randomProducts, setRandomProducts] = useState([]);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    if (productList.products.length > 0) {
      const shuffledProducts = [...productList.products].sort(() => Math.random() - 0.5);
      // const filteredProducts = shuffledProducts.filter((product) => product._id !== productList.product._id);
      const selectedProducts = shuffledProducts.slice(0, 8);
      setRandomProducts(selectedProducts);
    }
  }, [productList.products, productList.product]);

  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <Box className={className} style={{ ...style, cursor: 'pointer' }} onClick={onClick} aria-label='Previous'>
        <BiSolidChevronLeftSquare size='25px' color='#454545' />
      </Box>
    );
  };

  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <Box className={className} style={{ ...style, cursor: 'pointer' }} onClick={onClick} aria-label='Next'>
        <BiSolidChevronRightSquare size='25px' color='#454545' />
      </Box>
    );
  };
  const slickSettings = {
    dots: false,
    infinite: true,
    speed: 2000,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
    draggable: false,
    customPaging: () => (
      <Box
        borderRadius='50%'
        bg='brand.300'
        width='8px'
        height='8px'
        ml={1}
        mr={1}
        cursor='pointer'
        zIndex='1'
        position='absolute'
      />
    ),
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <Box as='section'>
      <Flex
        w='100%'
        justifyContent={{ base: 'center', lg: 'left' }}
        alignItems='center'
        px={{ base: '4', md: '8', lg: '20' }}
        pt={{ base: 0, lg: 14 }}
      >
        <Heading as='h3' size={{ base: 'md', md: 'lg' }} textTransform='uppercase' color='brand.500'>
          You Might Also Like
        </Heading>
      </Flex>

      <Box mx={{ base: '10', lg: '20' }} mt={5} mb={5}>
        <Box>
          <Slider {...slickSettings}>
            {randomProducts.map((product) => (
              <Box key={product._id} px={2}>
                <FeaturedProductCard product={product} />
              </Box>
            ))}
          </Slider>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductsYouMightLike;
