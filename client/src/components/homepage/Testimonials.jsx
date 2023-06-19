import {
  Box,
  Text,
  Flex,
  Heading,
  SimpleGrid,
  Card,
  chakra,
  CardBody,
  CardFooter,
  HStack,
  Icon,
} from '@chakra-ui/react';
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
        'I am absolutely thrilled with my purchases from Ander Hill. Each piece has added a touch of elegance and character to my living space. The attention to detail is impeccable',
    },
    {
      name: 'Travis. S',
      quote:
        'I have become a devoted customer of Ander Hill Pottery, and each pottery piece I have acquired from them has brought a touch of elegance and artistry to my home. ',
    },
  ];
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, [slides.length]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <Box p={8} backgroundColor='brand.5001'>
      <Heading textAlign='center' textTransform='uppercase' fontSize='4xl' color='brand.100' pt={3}>
        Testimonials
      </Heading>

      <Box position='relative' py={10}>
        <Flex
          gap={10}
          py={5}
          as={motion.div}
          spacing={10}
          // templateColumns={{
          //   base: 'repeat(4, 1fr)',
          //   // md: 'repeat(2, 1fr)',
          //   // xl: 'repeat(4, 1fr)',
          // }}
          // // overflowX={{ base: 'auto', xl: 'hidden' }}
          overflowX='initial'
          overflowY='hidden'
          sx={{
            '&::-webkit-scrollbar': {
              width: '16px',
              borderRadius: '2px',
              backgroundColor: `#272727`,
            },
            '&::-webkit-scrollbar-thumb': {
              // backgroundColor: `rgba(0, 0, 0, 0.05)`,
              backgroundColor: `brand.500`,
            },
          }}
        >
          {slides.map((slide, index) => (
            <Card
              key={index}
              borderRadius='2'
              p={6}
              // variant={index === currentIndex ? 'outline' : 'none'}
              variant='none'
              // boxShadow={index === currentIndex ? 'md' : 'none'}
              boxShadow='lg'
              as={motion.div}
              // animate={index === currentIndex ? { y: -5, scale: 1.05 } : {}}
              // transition={{
              //   duration: 0.3,
              //   type: 'spring',
              //   stiffness: 200,
              //   damping: 20,
              // }}
              minWidth='350px'
              backgroundColor='brand.500'
            >
              <Box
                position='absolute'
                top={-5}
                left='50%'
                transform='translateX(-50%)'
                borderRadius='full'
                bg='brand.500'
                w='12'
                h='12'
                display='flex'
                alignItems='center'
                justifyContent='center'
                boxShadow='lg'
              >
                <Icon
                  as={RiDoubleQuotesL}
                  boxSize='8'
                  color='brand.100'
                  left='50%'
                  transform='translateX(-50%)'
                  top={2}
                  display={{ base: 'none', sm: 'initial' }}
                  position='absolute'
                />
              </Box>
              <CardBody>
                <Text color='brand.100'>{slide.quote}</Text>
                {/* color={index === currentIndex ? 'brand.500' : 'brand.780'} */}
              </CardBody>
              <HStack spacing='10px' pl='6'>
                <StarIcon size='14px' w='14px' color='brand.400' />
                <StarIcon size='14px' w='14px' color='brand.400' />
                <StarIcon size='14px' w='14px' color='brand.400' />
                <StarIcon size='14px' w='14px' color='brand.400' />
                <StarIcon size='14px' w='14px' color='brand.400' />
                {/* color={index === currentIndex ? 'brand.400' : 'brand.450'} */}
              </HStack>
              <CardFooter fontWeight='medium' color='brand.780' pl={6}>
                {/* color={index === currentIndex ? 'brand.500' : 'brand.780'} */}
                {slide.name}
              </CardFooter>
            </Card>
          ))}
        </Flex>
      </Box>

      {/* <Box textAlign='center' mt={10} pb={16} display={{ base: 'none', xl: 'block' }}>
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
      </Box> */}
    </Box>
  );
};

export default Testimonials;
