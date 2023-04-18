import { Box, VStack, Button, Text, Flex, Heading, HStack, Icon, Wrap, Container } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { StarIcon } from '@chakra-ui/icons';
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';

const QuotesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      quote:
        'Impeccable craftsmanship, unique designs, and eco-friendly packaging make this ecommerce pottery brand a top choice. Highly recommended for quality and style!',
    },
    {
      quote:
        'Functional and stunningly beautiful pottery from this brand! Easy website navigation, prompt shipping, and exceptional customer service. Exceeded expectations in every way.',
    },
    {
      quote:
        'Each piece is crafted with incredible attention to detail and the colors and textures are beautifully curated.  Highly satisfied with their unique creations and excellent customer service.',
    },
  ];

  useEffect(() => {
    const interval = setInterval(handleNextSlide, 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <Box backgroundColor={{ base: 'brand.100', lg: 'white' }}>
      <Heading textAlign='center' fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }} color='brand.4001' pt={3}>
        Testimonials: Rave Reviews from Our Valued Customers
      </Heading>

      <Box position='relative'>
        <Flex
          textAlign='center'
          w='full'
          h='200px'
          //   backgroundColor='brand.600'
          alignItems='center'
          direction='column'
          justifyContent='center'
        >
          <Icon
            as={RiDoubleQuotesL}
            boxSize={{ base: '8', md: '10' }}
            color='brand.400'
            left={{ base: '0', md: '10' }}
            top={5}
            display={{ base: 'none', sm: 'initial' }}
            position='absolute'
          />
          <Icon
            as={RiDoubleQuotesR}
            boxSize={{ base: '8', md: '10' }}
            color='brand.400'
            right={{ base: '0', md: '10' }}
            bottom={20}
            display={{ base: 'none', sm: 'initial' }}
            position='absolute'
          />
          <Text
            fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
            fontFamily='heading'
            w={{ base: '95%', sm: '70%' }}
            pt={2}
          >
            {slides[currentIndex].quote}
          </Text>

          <HStack spacing='15px' my={5}>
            <StarIcon size='14px' w='14px' color='brand.400' />
            <StarIcon size='14px' w='14px' color='brand.400' />
            <StarIcon size='14px' w='14px' color='brand.400' />
            <StarIcon size='14px' w='14px' color='brand.400' />
            <StarIcon size='14px' w='14px' color='brand.400' />
          </HStack>
          <Box textAlign='center' mt={2}>
            <Box display='flex' justifyContent='center'>
              {slides.map((slide, index) => (
                <Box
                  key={index}
                  width='10px'
                  height='10px'
                  borderRadius='50%'
                  bg={index === currentIndex ? 'brand.300' : 'brand.200'}
                  margin='5px'
                  cursor='pointer'
                  onClick={() => handleDotClick(index)}
                />
              ))}
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default QuotesCarousel;
