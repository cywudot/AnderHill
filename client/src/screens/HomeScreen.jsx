import { Box, Flex, Heading, HStack, Stack, Button, Image, Spinner, Text, Wrap } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { Link as ReactLink } from 'react-router-dom';
import HeroImage from '../otherassets/HomeHeroImage.png';
import HeroImageMobile from '../otherassets/HomeHeroImageMobile.png';
import ContactIcon from '../sourced-icons/contact.png';
import FreeDeliveryIcon from '../sourced-icons/free-delivery.png';
import ReturnIcon from '../sourced-icons/30days.png';
import ContactForm from '../components/homepage/ContactForm';
import VideoSection from '../components/homepage/VideoSection';
import CategoriesSection from '../components/homepage/CategoriesSection';
import FeaturedProducts from '../components/homepage/FeaturedProducts';

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
      <Image src={iconSrc} alt={title} w={{ base: '50px', lg: '60px' }} />
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

  return (
    <>
      {isLoading ? (
        <Wrap justify='center' direction='column' mt='20px' minH='100vh'>
          <Stack textAlign='center'>
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
        <Box id='homepage' maxW='12xl' mx='auto' minH='12xl'>
          {/* Hero Section */}
          <Box as='section' px={{ base: '0', lg: '12' }}>
            <Box
              w='full'
              h='lg'
              bgPos='center'
              bgSize='cover'
              alt='HeroImage'
              backgroundImage={{
                base: `url(${HeroImageMobile})`,
                md: `url(${HeroImage})`,
              }}
            >
              <Flex pos='relative' boxSize='full'>
                <Stack
                  spacing={6}
                  w={['8xl', '6xl', '2xl']}
                  pb={{ md: '5%', lg: '2%' }}
                  ml={{ md: '10%', lg: '8%' }}
                  justify='center'
                  textAlign={{ base: 'center', lg: 'left' }}
                >
                  <Heading
                    as='h1'
                    size={['xl', '3xl', '4xl']}
                    fontWeight='extrabold'
                    color='brand.100'
                    textTransform='uppercase'
                    letterSpacing='wide'
                    px={{ base: '4', md: '0' }}
                  >
                    Ander Hill Pottery
                  </Heading>

                  <Text fontSize={['sm', 'md', 'lg']} fontWeight='thin' color='brand.100' px={{ base: '8', md: '0' }}>
                    Discover the art of pottery through our exquisite offerings, and add a touch of sophistication and
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
            {/* Store Benefits Section */}
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
          <CategoriesSection />
          <FeaturedProducts />
          <VideoSection />
          <Flex justifyContent='center' pb={12} id='contact-form' px={{ base: '4', lg: '12' }}>
            <ContactForm />
          </Flex>
        </Box>
      )}
    </>
  );
};

export default HomeScreen;