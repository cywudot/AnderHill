import { Box, Flex, Heading, HStack, Stack, Button, Image, Spinner, Text, Wrap, Center } from '@chakra-ui/react';
import React, { useState, useEffect, Suspense } from 'react';
import { Link as ReactLink } from 'react-router-dom';
import HeroImageMobile from '../otherassets/HomeHeroImageMobile.jpg';
import ContactIcon from '../sourced-icons/contact.png';
import FreeDeliveryIcon from '../sourced-icons/free-delivery.png';
import ReturnIcon from '../sourced-icons/30days.png';
import ContactForm from '../components/homepage/ContactForm';
// import VideoSection from '../components/homepage/VideoSection';
// import CategoriesSection from '../components/homepage/CategoriesSection';

const HomeScreen = () => {
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

  const StoreBenefits = ({ iconSrc, title, description }) => (
    <Stack
      direction={{ base: 'column', lg: 'row' }}
      align='center'
      gap={{ base: '0', lg: '2' }}
      maxW={{ base: '190px', md: '300px' }}
    >
      <Image src={iconSrc} alt={title} w={{ base: '45px', md: '60px' }} />
      <Stack mt={0}>
        <Text fontSize={{ base: 'sm', md: 'md' }} color='brand.100'>
          {title}
        </Text>
        <Text fontSize='sm' fontWeight='light' color='brand.100' display={{ base: 'none', md: 'initial' }}>
          {description}
        </Text>
      </Stack>
    </Stack>
  );

  // Dynamic import for CategoriesSection
  const CategoriesSection = React.lazy(() => import('../components/homepage/CategoriesSection'));
  // Dynamic import for VideoSection
  const VideoSection = React.lazy(() => import('../components/homepage/VideoSection'));

  return (
    <>
      {isLoading ? (
        <Wrap justify='center' direction='column' mt='20px' minH='100vh'>
          <Center>
            <Spinner
              mt={20}
              thickness='2px'
              speed='0.65s'
              emptyColor='gray.200'
              color='brand.400'
              size='xl'
              mx='auto'
            />
          </Center>
        </Wrap>
      ) : (
        <Box id='homepage' maxW='12xl' mx='auto' minH='12xl'>
          <Box as='section' px={{ base: '0', lg: '12' }}>
            <Box
              w='full'
              h={['md', 'lg']}
              bgPos='center'
              bgSize='cover'
              alt='HeroImage'
              backgroundImage={{
                base: `url(${HeroImageMobile})`,
                md: `url(https://storage.googleapis.com/anderhillproducts/otherassets/HomeHeroImage.jpg)`,
              }}
            >
              <Flex pos='relative' boxSize='full'>
                <Stack
                  spacing={6}
                  w={['8xl', '6xl', '2xl']}
                  ml={{ base: '0%', md: '10%', lg: '8%' }}
                  justify='center'
                  textAlign={{ base: 'center', lg: 'left' }}
                >
                  <Heading
                    as='h1'
                    size={['2xl', '3xl', '4xl']}
                    fontWeight='bold'
                    color='brand.100'
                    textTransform='uppercase'
                    letterSpacing='wide'
                    px={{ base: '4', md: '0' }}
                  >
                    Ander Hill Pottery
                  </Heading>

                  <Text
                    fontSize={['md', 'lg', 'xl']}
                    fontWeight='thin'
                    color='brand.100'
                    px={{ base: '8', md: '0' }}
                    display={{ base: 'none', sm: 'initial' }}
                  >
                    Discover the art of pottery through our exquisite collection, and add a touch of sophistication and
                    refinement to your living space today
                  </Text>

                  <Button
                    as={ReactLink}
                    to='/products'
                    _hover={{ color: 'brand.100', backgroundColor: 'brand.500' }}
                    textTransform='uppercase'
                    size='md'
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
              justify='space-around'
              textAlign={{ base: 'center', lg: 'left' }}
              p={5}
            >
              <StoreBenefits iconSrc={FreeDeliveryIcon} title='Free Shipping' description='For orders over $300' />
              <StoreBenefits
                iconSrc={ReturnIcon}
                title='30 Days Guarantee'
                description='Quality ensured or money back'
              />
              <StoreBenefits iconSrc={ContactIcon} title='24/7 Support' description='Always Here to Assist You' />
            </HStack>
          </Box>
          <Suspense fallback={<div>Loading...</div>}>
            <CategoriesSection />
            <VideoSection />
          </Suspense>

          <Flex justifyContent='center' pb={12} id='contact-form' px={{ base: '0', md: '10', lg: '12' }}>
            <ContactForm />
          </Flex>
        </Box>
      )}
    </>
  );
};

export default HomeScreen;
