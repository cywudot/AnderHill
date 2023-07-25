import { Box, Flex, Heading, Stack, Image, Text } from '@chakra-ui/react';

const AboutUs = () => {
  return (
    <Box maxW='12xl' mx='auto' px={{ base: '0', lg: '12' }} minH='8xl' id='main-content-about'>
      <Flex
        as='section'
        w='full'
        h={['md', 'lg']}
        bgPos='center'
        bgSize='cover'
        backgroundImage={{
          base: `url(https://storage.googleapis.com/anderhillproducts/otherassets/AboutUsHeroMobile.jpg)`,
          md: `url(https://storage.googleapis.com/anderhillproducts/otherassets/AboutUsHero.jpg)`,
        }}
      >
        <Heading
          color='brand.100'
          fontSize={['2xl', '4xl', '5xl']}
          alignSelf='center'
          mx='auto'
          w={['85%', '75%']}
          textAlign='center'
        >
          Where artisanal, handcrafted pieces fuse traditional techniques with contemporary design.
        </Heading>
      </Flex>

      {/* Section One  */}
      <Flex direction='column' minH='full' as='section'>
        <Text
          fontFamily='heading'
          color='brand.500'
          fontSize={['1.2em', '1.5em', '1.8em']}
          fontWeight='bold'
          textAlign='center'
          mx='auto'
          w={['80%', '70%', '65%']}
          my={12}
        >
          Step into the world of Ander Hill's Pottery, where we take pride in creating pottery that is both beautiful
          and functional, meant to be used and enjoyed in your everyday life.
        </Text>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          justify='space-between'
          gap={5}
          px={{ base: '5', lg: '0' }}
          mb={12}
        >
          <Box mx='auto' rounded='2px' overflow='hidden' flex={1} as='section'>
            <Image
              fit='cover'
              src='https://storage.googleapis.com/anderhillproducts/otherassets/AboutUs-quinoal-unsplash.jpg'
              alt='Handing shaping pottery'
              minH='350px'
            />
          </Box>

          <Box textAlign={{ base: 'center', md: 'left' }} mx='auto' alignSelf='center' flex={1} as='section'>
            <Text
              color='brand.500'
              fontSize={{ base: '2xl', lg: '3xl' }}
              fontWeight='bold'
              fontFamily='heading'
              maxW='2xl'
              mx='auto'
              mb={5}
            >
              We believe in the beauty and meaning of surrounding objects.
            </Text>
            <Text color='brand.500' fontSize='1em' maxW='2xl' mx='auto'>
              That's why we craft each piece with loving care and purpose, employing only the finest materials and
              employing time-honored techniques. We take pride in crafting pieces that inspire and delight our
              customers, each one showcasing the nuances and character that come from being made by hand.
            </Text>
          </Box>
        </Stack>
      </Flex>

      {/* Section Two  */}
      <Flex
        as='section'
        w='full'
        py={12}
        h={{ base: 'md', lg: '2xl' }}
        bgPos='center'
        bgSize='cover'
        backgroundImage='url(https://storage.googleapis.com/anderhillproducts/otherassets/AboutUs-barn03.jpg)'
        pos='relative'
      >
        <Box
          backgroundColor='brand.5001'
          py={8}
          px={10}
          rounded={2}
          pos='absolute'
          maxW='500px'
          left='30%'
          transform='translate(-50%, -50%)'
          top='60%'
          zIndex='1'
          display={{ base: 'none', lg: 'initial' }}
        >
          <Text color='brand.100' pb={3} fontFamily='heading' fontSize={{ base: '2xl', lg: '3xl' }} fontWeight='bold'>
            Our commitment to sustainability.
          </Text>
          <Text color='brand.100' fontSize='1em'>
            We use locally sourced our materials whenever possible, recycle all of our clay and package our products
            with sustainable materials. We believe that exquisite design should never come at the expense of the planet,
            and we are honored to share our commitment with you.
          </Text>
        </Box>
      </Flex>
      <Box display={{ base: 'initial', lg: 'none' }} textAlign='center' as='section'>
        <Text
          color='brand.500'
          pt={6}
          fontFamily='heading'
          fontSize={{ base: '2xl', lg: '3xl' }}
          px={5}
          fontWeight='bold'
        >
          Our commitment to sustainability.
        </Text>
        <Text color='brand.500' fontSize='1em' px={8}>
          We use locally sourced our materials whenever possible, recycle all of our clay and package our products with
          sustainable materials. We believe that exquisite design should never come at the expense of the planet, and we
          are honored to share our commitment with you.
        </Text>
      </Box>

      {/* Section Three  */}
      <Flex direction='column' minH='full' my={12} px={{ base: '5', lg: '0' }} as='section'>
        <Stack direction={{ base: 'column-reverse', md: 'row' }} justify='space-between' gap={5}>
          <Box textAlign={{ base: 'center', md: 'left' }} mx='auto' alignSelf='center' flex={1} as='section'>
            <Text
              color='brand.500'
              fontSize={{ base: '2xl', lg: '3xl' }}
              fontWeight='bold'
              fontFamily='heading'
              maxW='2xl'
              mx='auto'
              mb={5}
            >
              Crafting meaningful pieces for cherished journeys.
            </Text>
            <Text color='brand.500' fontSize='1em' maxW='2xl' mx='auto'>
              Thank you for choosing Ander Hill's Pottery, where beauty, sustainability, and craftsmanship meet to
              elevate your everyday routines. We are thrilled to be a part of your home and your story, and we can't
              wait to see how our pottery adds warmth, joy, and meaning to your life.
            </Text>
          </Box>
          <Box mx='auto' rounded='2px' overflow='hidden' flex={1} as='section'>
            <Image
              fit='cover'
              src='https://storage.googleapis.com/anderhillproducts/otherassets/AboutUs-barnimages.jpg'
              alt='Cutting the clay into pieces'
              minH='350px'
              ml='auto'
            />
          </Box>
        </Stack>
      </Flex>
    </Box>
  );
};

export default AboutUs;
