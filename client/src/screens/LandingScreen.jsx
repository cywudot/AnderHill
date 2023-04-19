import {
  Box,
  Flex,
  Heading,
  HStack,
  Container,
  Stack,
  Button,
  Icon,
  Image,
  Link,
  Spinner,
  VStack,
  IconButton,
  Skeleton,
  chakra,
  useColorModeValue,
  Text,
  WrapItem,
  Center,
  AlertDescription,
  Alert,
  AlertIcon,
  AlertTitle,
  Wrap,
  useBreakpointValue,
} from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link as ReactLink, useNavigate } from 'react-router-dom';
import HeroImage from '../otherassets/HomeHeroImage.png';
import HeroImageMobile from '../otherassets/HomeHeroImageMobile.png';
import ContactIcon from '../sourced-icons/contact.png';
import FreeDeliveryIcon from '../sourced-icons/free-delivery.png';
import ReturnIcon from '../sourced-icons/30days.png';
import HomeAccent from '../otherassets/HomeAccent.png';
import Dinnerware from '../otherassets/Dinnerware.png';
import QuotesImage from '../otherassets/about-us-barnimages-02.jpg';
import Video from '../otherassets/AnderHillVideo.mp4';
import ShopAll from '../otherassets/AllProducts.png';
import { useDispatch } from 'react-redux';
import { getFilteredProducts } from '../redux/actions/productActions';
import ReactPlayer from 'react-player';
import QuotesCarousel from '../components/QuotesCarousel';
import ContactForm from '../components/ContactForm';

const LandingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleLoad = () => {
      // This function will be called when the page has finished loading
      setIsLoading(false);
      // Trigger your action to load the page here
    };
    if (document.readyState === 'complete') {
      // If the document is already loaded, call handleLoad immediately
      handleLoad();
    } else {
      // Otherwise, add an event listener for the load event
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad); // Cleanup the event listener
    };
  }, []);

  //Filter Handler
  const handleFilter = (category) => {
    dispatch(getFilteredProducts(category));
  };

  return (
    <>
      {isLoading ? (
        <Wrap justify='center' direction='column' mt='20px' minH='100vh'>
          <Stack direction='row' spacing={4}>
            <Spinner mt={20} thickness='2px' speed='0.65s' emptyColor='gray.200' color='brand.400' size='xl' />
          </Stack>
        </Wrap>
      ) : (
        <Box maxW='12xl' mx='auto' px={{ base: '0', lg: '12' }} py={{ base: '0', lg: '0' }} minH='12xl'>
          {/* HERO SECTION */}
          <Box
            w='full'
            h='lg'
            bgPos='center'
            bgSize='cover'
            backgroundImage={{
              base: `url(${HeroImageMobile})`,
              md: `url(${HeroImage})`,
            }}
          >
            <Flex pos='relative' boxSize='full' bg='blackAlpha.300'>
              <Stack
                spacing={6}
                w={['8xl', '6xl', '2xl']}
                pb={{ md: '10%', lg: '8%' }}
                ml={{ md: '10%', lg: '8%' }}
                justify={{ base: 'center', md: 'center' }}
                textAlign={{ base: 'center', md: 'left', lg: 'left' }}
              >
                <Heading
                  fontSize={['4xl', '6xl', '7xl']}
                  fontWeight='extrabold'
                  color='brand.100'
                  textTransform='uppercase'
                  letterSpacing='wide'
                  pl={{ base: '4', md: '0' }}
                  pr={{ base: '4', md: '0' }}
                >
                  Ander Hill Pottery
                </Heading>

                <Text
                  fontSize={{ base: 'sm', sm: 'md', lg: 'lg' }}
                  display={{ base: 'none', sm: 'initial' }}
                  fontFamily='body'
                  fontWeight='thin'
                  color='brand.100'
                  letterSpacing='normal'
                  pl={{ base: '8', md: '0' }}
                  pr={{ base: '8', md: '0' }}
                >
                  Discover the art of pottery through our exquisite offerings, and add a touch of sophistication and
                  refinement to your living space today
                </Text>

                <Button
                  as={ReactLink}
                  to='/shop'
                  _hover={{ color: 'brand.100', backgroundColor: 'brand.500', transition: 'all 0.3s ease-in-out' }}
                  textTransform='uppercase'
                  w={200}
                  rounded='2px'
                  fontWeight='regular'
                  color='brand.500'
                  backgroundColor='brand.100'
                  alignSelf={{ base: 'center', md: 'start' }}
                  onClick={() => handleFilter('')}
                >
                  Our Collections
                </Button>
              </Stack>
            </Flex>
          </Box>

          <HStack
            backgroundColor='brand.5001'
            justify={{ base: 'space-between', sm: 'space-around' }}
            align='center'
            textAlign={{ base: 'center', lg: 'left' }}
            p={5}
          >
            <Stack
              direction={{ base: 'column', lg: 'row' }}
              align='center'
              gap={2}
              maxW={{ base: '190px', md: '300px' }}
            >
              <Image src={FreeDeliveryIcon} w='60px' />
              <Stack>
                <Text fontSize={{ base: 'sm', md: 'md' }} fontWeight='regular' color='brand.100'>
                  Free Shipping
                </Text>
                <Text fontSize='sm' fontWeight='light' color='brand.100' display={{ base: 'none', md: 'initial' }}>
                  For orders over $300
                </Text>
              </Stack>
            </Stack>

            <Stack
              direction={{ base: 'column', lg: 'row' }}
              align='center'
              gap={2}
              maxW={{ base: '190px', md: '300px' }}
            >
              <Image src={ReturnIcon} w='60px' />
              <Stack>
                <Text fontSize={{ base: 'sm', md: 'md' }} fontWeight='regular' color='brand.100'>
                  30 Days Guarantee
                </Text>
                <Text fontSize='sm' fontWeight='light' color='brand.100' display={{ base: 'none', md: 'initial' }}>
                  Quality ensured or money back
                </Text>
              </Stack>
            </Stack>

            <Stack
              direction={{ base: 'column', lg: 'row' }}
              align='center'
              gap={2}
              maxW={{ base: '190px', md: '300px' }}
            >
              <Image src={ContactIcon} w='60px' />
              <Stack>
                <Text fontSize={{ base: 'sm', md: 'md' }} fontWeight='regular' color='brand.100'>
                  24/7 Support
                </Text>
                <Text fontSize='sm' fontWeight='light' color='brand.100' display={{ base: 'none', md: 'initial' }}>
                  Always Here to Assist You
                </Text>
              </Stack>
            </Stack>
          </HStack>
          {/* FEATURED PRODUCTS SECTION  */}
          <Container maxW={['12xl', '10xl', '8xl']} justifyContent='center' mt={8}>
            <Box alignItems='center'>
              <Heading as='h2' textAlign='center' textTransform='uppercase' color='brand.500'>
                Discover Ander Hill
              </Heading>

              <Flex
                p={50}
                justifyContent='center'
                gap={10}
                justify='space-around'
                direction={{ base: 'column', lg: 'row' }}
              >
                <Box h='auto' mx='auto' rounded='2px' overflow='hidden'>
                  <Image w='full' fit='cover' objectPosition='center' src={HomeAccent} alt='avatar' />
                  <Button
                    fontFamily='heading'
                    fontSize='xl'
                    backgroundColor='brand.300'
                    _hover={{ backgroundColor: 'brand.3001' }}
                    rounded='2px'
                    color='brand.100'
                    mt={2}
                    as={ReactLink}
                    to='/shop'
                    onClick={() => handleFilter('Home Accents')}
                  >
                    Home Accents
                  </Button>
                </Box>

                <Box h='auto' mx='auto' rounded='2px' overflow='hidden'>
                  <Link as={ReactLink} to='/shop'>
                    <Image w='full' fit='cover' objectPosition='center' src={Dinnerware} alt='avatar' />
                  </Link>
                  <Button
                    fontFamily='heading'
                    fontSize='xl'
                    backgroundColor='brand.300'
                    _hover={{ backgroundColor: 'brand.3001' }}
                    rounded='2px'
                    color='brand.100'
                    mt={2}
                    as={ReactLink}
                    to='/shop'
                    // to={{
                    //   pathname: '/shop',
                    //   state: { category: 'Dinnerware' },
                    // }}
                    onClick={() => handleFilter('Dinnerware')}
                  >
                    Dinnerware
                  </Button>
                </Box>

                <Box h='auto' mx='auto' rounded='2px' overflow='hidden'>
                  <Link as={ReactLink} to='/shop'>
                    <Image w='full' fit='cover' objectPosition='center' src={ShopAll} alt='avatar' />
                  </Link>
                  <Button
                    fontFamily='heading'
                    fontSize='xl'
                    backgroundColor='brand.300'
                    _hover={{ backgroundColor: 'brand.3001' }}
                    rounded='2px'
                    color='brand.100'
                    mt={2}
                    style={{ textDecoration: 'none' }}
                    variant='none'
                    as={ReactLink}
                    to='/shop'
                    onClick={() => handleFilter('')}
                  >
                    Shop All
                  </Button>
                </Box>
              </Flex>

              {/* FEATURED PRODUCTS SECTION ENDS */}
            </Box>
          </Container>
          {/* VIDEO SECTION */}
          <Box width='full' h='auto' backgroundColor='brand.400' mb={12} position='relative'>
            <ReactPlayer url={Video} playing={true} loop={true} muted={true} volume={0} width='100%' height='lg' />
            <Box
              position='absolute'
              top='20%'
              left='10%'
              right='10%'
              bottom='10%'
              textAlign='center'
              display='flex'
              flexDirection='column'
              justifyContent={{ base: 'flex-end', md: 'space-between' }}
            >
              <Text
                fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                color='brand.100'
                fontFamily='heading'
                fontWeight='bold'
                display={{ base: 'none', md: 'block' }}
              >
                Welcome to Ander Hill's Pottery, where we believe in the power of beautiful and environmentally
                responsible creations.
              </Text>
              <Button
                backgroundColor='brand.300'
                _hover={{ backgroundColor: 'brand.3001' }}
                color='brand.100'
                fontSize={{ base: 'sm', lg: 'md' }}
                rounded='sm'
                as={ReactLink}
                to='/aboutus'
                maxW='200px'
                mx='auto'
              >
                Learn More About Us
              </Button>
            </Box>
          </Box>

          <QuotesCarousel />

          {/* CONTACT */}
          <Flex width='full' justifyContent='center' py={8}>
            <ContactForm />
          </Flex>
        </Box>
      )}
    </>
  );
};

export default LandingScreen;
