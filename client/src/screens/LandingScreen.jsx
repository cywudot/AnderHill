import { Box, Flex, Heading, HStack, Stack, Button, Image, Spinner, Text, Wrap } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { Link as ReactLink } from 'react-router-dom';
import HeroImage from '../otherassets/HomeHeroImage.png';
import HeroImageMobile from '../otherassets/HomeHeroImageMobile.png';
import ContactIcon from '../sourced-icons/contact.png';
import FreeDeliveryIcon from '../sourced-icons/free-delivery.png';
import ReturnIcon from '../sourced-icons/30days.png';
import { useDispatch } from 'react-redux';
import ContactForm from '../components/homepage/ContactForm';
import VideoSection from '../components/homepage/VideoSection';
import CategoriesSection from '../components/homepage/CategoriesSection';
import FeaturedProducts from '../components/homepage/FeaturedProducts';

const LandingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  // manages the loading state  and perform the necessary actions once the page has finished loading
  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

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
        <Box maxW='12xl' mx='auto' py={{ base: '0', lg: '0' }} minH='12xl'>
          {/* HERO SECTION */}
          <Box px={{ base: '0', lg: '12' }}>
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
                  pb={{ md: '5%', lg: '2%' }}
                  ml={{ md: '10%', lg: '8%' }}
                  justify={{ base: 'center', md: 'center' }}
                  textAlign={{ base: 'center', lg: 'left' }}
                >
                  <Heading
                    as='h1'
                    size={['xl', '3xl', '4xl']}
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
                    w='180px'
                    rounded='2px'
                    fontWeight='regular'
                    color='brand.500'
                    backgroundColor='brand.100'
                    alignSelf={{ base: 'center', lg: 'start' }}
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
                gap={{ base: '0', lg: '2' }}
                maxW={{ base: '190px', md: '300px' }}
              >
                <Image src={FreeDeliveryIcon} w={{ base: '50px', lg: '60px' }} />
                <Stack mt={0}>
                  <Text fontSize={{ base: 'sm', md: 'md' }} color='brand.100'>
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
                <Image src={ReturnIcon} w={{ base: '50px', lg: '60px' }} />
                <Stack>
                  <Text fontSize={{ base: 'sm', md: 'md' }} color='brand.100'>
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
                <Image src={ContactIcon} w={{ base: '50px', lg: '60px' }} />
                <Stack>
                  <Text fontSize={{ base: 'sm', md: 'md' }} color='brand.100'>
                    24/7 Support
                  </Text>
                  <Text fontSize='sm' fontWeight='light' color='brand.100' display={{ base: 'none', md: 'initial' }}>
                    Always Here to Assist You
                  </Text>
                </Stack>
              </Stack>
            </HStack>
          </Box>
          <CategoriesSection />
          <FeaturedProducts />
          <VideoSection />
          <Flex justifyContent='center' py={8} id='contact-form' px={{ base: '4', lg: '12' }}>
            <ContactForm />
          </Flex>
        </Box>
      )}
    </>
  );
};

export default LandingScreen;
