import {
  Box,
  Flex,
  Heading,
  HStack,
  Container,
  Stack,
  Button,
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

import QuotesImage from '../otherassets/about-us-barnimages-02.jpg';

import { useDispatch } from 'react-redux';
import { getFilteredProducts } from '../redux/actions/productActions';
import ReactPlayer from 'react-player';
import QuotesCarousel from '../components/QuotesCarousel';
import ContactForm from '../components/ContactForm';
import { setFilterCategory } from '../redux/slices/products';
import VideoSection from '../components/homepage/VideoSection';
import CategoriesSection from '../components/homepage/CategoriesSection';
import Testimonials from '../components/homepage/Testimonials';

const LandingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  // const handleFilter = (category) => {
  //   dispatch(setFilterCategory(category));
  // };

  // const handleCategoryClick = (category) => {
  //   navigate(`/products/${category}`); // Navigate to the products page with the filtered category in the URL
  // };

  return (
    <>
      {isLoading ? (
        <Wrap justify='center' direction='column' mt='20px' minH='100vh'>
          <Stack direction='row' spacing={4} textAlign='center'>
            <Spinner
              mt={20}
              thickness='2px'
              speed='0.65s'
              emptyColor='gray.200'
              color='brand.400'
              size='xl'
              mx='auto'
            />
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
                  to='/products'
                  _hover={{ color: 'brand.100', backgroundColor: 'brand.500', transition: 'all 0.3s ease-in-out' }}
                  textTransform='uppercase'
                  w={200}
                  rounded='2px'
                  fontWeight='regular'
                  color='brand.500'
                  backgroundColor='brand.100'
                  alignSelf={{ base: 'center', md: 'start' }}
                  // onClick={() => handleFilter('')}
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
          <CategoriesSection />
          <VideoSection />
          <Testimonials />
          {/* CONTACT */}
          <Flex width='full' justifyContent='center' py={8} id='contact-form'>
            <ContactForm />
          </Flex>
        </Box>
      )}
    </>
  );
};

export default LandingScreen;
