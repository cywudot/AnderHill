import { Box, Text, Flex, Heading, SimpleGrid, Card, chakra, CardBody, CardFooter, HStack } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { StarIcon } from '@chakra-ui/icons';
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';
import { useRef } from 'react';
import { motion, isValidMotionProp } from 'framer-motion';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      name: 'Benjamin.L',
      quote:
        'Impeccable craftsmanship, unique designs, and eco-friendly packaging make this ecommerce pottery brand a top choice. Highly recommended for quality and style!',
    },
    {
      name: 'Rebecca.W',
      quote:
        'Functional and stunningly beautiful pottery from this brand! Easy website navigation, prompt shipping, and exceptional customer service. Exceeded expectations in every way.',
    },
    {
      name: 'Olivia. J',
      quote:
        'Each piece is crafted with incredible attention to detail and the colors and textures are beautifully curated.  Highly satisfied with their unique creations and excellent customer service.',
    },
    {
      name: 'Jennifer. C',
      quote:
        'Each piece is crafted with incredible attention to detail and the colors and textures are beautifully curated.  Highly satisfied with their unique creations and excellent customer service.',
    },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };
  return (
    <Box px={5}>
      <Heading
        textAlign='center'
        textTransform='uppercase'
        fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
        color='brand.500'
        pt={3}
      >
        Testimonials
      </Heading>

      <Box position='relative' pt={10}>
        <SimpleGrid
          spacing={10}
          templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', xl: 'repeat(4, 1fr)' }}
        >
          {slides.map((slide, index) => (
            <Card
              key={index}
              borderRadius='2'
              p={6}
              variant={index === currentIndex ? 'outline' : 'none'}
              boxShadow={index === currentIndex ? 'md' : 'none'}
              as={motion.div}
              animate={index === currentIndex ? { y: -5, scale: 1.05 } : {}}
              transition={{
                duration: 0.3,
                type: 'spring',
                stiffness: 200,
                damping: 20,
                // repeat: Infinity,
                // repeatType: 'reverse',
                // ease: 'easeInOut',
              }}
            >
              <CardBody>
                <Text color={index === currentIndex ? 'brand.500' : 'brand.780'}>{slide.quote}</Text>
              </CardBody>
              <HStack spacing='10px' pl='6'>
                <StarIcon size='14px' w='14px' color={index === currentIndex ? 'brand.400' : 'brand.450'} />
                <StarIcon size='14px' w='14px' color={index === currentIndex ? 'brand.400' : 'brand.450'} />
                <StarIcon size='14px' w='14px' color={index === currentIndex ? 'brand.400' : 'brand.450'} />
                <StarIcon size='14px' w='14px' color={index === currentIndex ? 'brand.400' : 'brand.450'} />
                <StarIcon size='14px' w='14px' color={index === currentIndex ? 'brand.400' : 'brand.450'} />
              </HStack>
              <CardFooter fontWeight='medium' color={index === currentIndex ? 'brand.500' : 'brand.780'} pl={6}>
                {slide.name}
              </CardFooter>
            </Card>
          ))}
        </SimpleGrid>
      </Box>
      <Box textAlign='center' mt={10} pb={16}>
        <Box display='flex' justifyContent='center'>
          {slides.map((slide, index) => (
            <Box
              key={index}
              width='50px'
              height='5px'
              borderRadius='10%'
              bg={index === currentIndex ? 'brand.300' : 'brand.200'}
              margin='5px'
              cursor='pointer'
              onClick={() => handleDotClick(index)}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Testimonials;
