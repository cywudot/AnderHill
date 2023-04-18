import {
  Box,
  Flex,
  Heading,
  HStack,
  Container,
  Stack,
  SimpleGrid,
  Button,
  Icon,
  Image,
  Link,
  Skeleton,
  chakra,
  useColorModeValue,
  Text,
  Wrap,
} from '@chakra-ui/react';
import ReactPlayer from 'react-player';
import AboutUsHeroImage from '../otherassets/AboutUsHero.jpg';
import AboutUsHeroImageMobile from '../otherassets/AboutUsHeroMobile.png';
import AboutUsHandsOne from '../otherassets/AboutUs-quinoal-unsplash.jpg';
import AboutUsHandsTwo from '../otherassets/AboutUs-barnimages.jpg';
import AboutUsThree from '../otherassets/AboutUs-barn03.jpg';
const AboutUs = () => {
  return (
    <Box maxW='12xl' mx='auto' px={{ base: '0', lg: '12' }} py={{ base: '0', lg: '0' }} minH='8xl' mt='107.7px'>
      <Flex
        w='full'
        h='3xl'
        bgPos='center'
        bgSize='cover'
        backgroundImage={{
          base: `url(${AboutUsHeroImageMobile})`,
          md: `url(${AboutUsHeroImage})`,
        }}
      >
        <Heading
          color='brand.100'
          fontSize={['2em', '2.5em', '3em']}
          alignSelf='center'
          mx='auto'
          w={['90%', '80%', '60%']}
          textAlign='center'
        >
          Where artisanal, handcrafted pieces fuse traditional techniques with contemporary design.
        </Heading>
      </Flex>

      {/* Section One  */}
      <Flex direction='column' minH='full'>
        <Text
          fontFamily='heading'
          color='brand.500'
          fontSize={['1.2em', '1.5em', '1.8em']}
          px={5}
          textAlign='center'
          mx='auto'
          w={{ sm: '80%', md: '70%', lg: '50%' }}
          mt={12}
          mb={12}
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
          <Box mx='auto' rounded='2px' overflow='hidden' flex={1}>
            <Image fit='cover' src={AboutUsHandsOne} alt='Pottery Making' maxW='100%' minH='320px' />
          </Box>

          <Box textAlign={{ base: 'center', md: 'left' }} mx='auto' alignSelf='center' flex={1}>
            <Text color='brand.4001' fontSize='1.5em' fontFamily='heading' maxW='2xl' mx='auto' mb={5}>
              We are passionate believers in the power of beauty and meaning in the objects we surround ourselves with.
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
      <Box mt={8} mb={12} mx='auto' pos='relative'>
        <Image fit='cover' src={AboutUsThree} alt='Pottery Studio' maxW='100%' pb={8} />
        <Box
          backgroundColor='brand.5001'
          py={8}
          px={12}
          rounded={2}
          pos='absolute'
          maxW='500px'
          left='30%'
          transform='translate(-50%, -50%)'
          top='60%'
          zIndex='1'
          display={{ base: 'none', lg: 'initial' }}
        >
          <Text color='brand.100' pb={3} fontFamily='heading' fontSize='1.5em'>
            We are committed to sustainability and minimizing our environmental impact.
          </Text>
          <Text color='brand.100' fontSize='1em'>
            We use locally sourced our materials whenever possible, recycle all of our clay and package our products
            with sustainable materials. We believe that exquisite design should never come at the expense of the planet,
            and we are honored to share our commitment with you.
          </Text>
        </Box>
        <Box display={{ base: 'initial', lg: 'none' }} textAlign='center'>
          <Text color='brand.4001' pb={3} fontFamily='heading' fontSize='1.5em' px={5}>
            We are committed to sustainability and minimizing our environmental impact.
          </Text>
          <Text color='brand.500' fontSize='1em' px={5}>
            We use locally sourced our materials whenever possible, recycle all of our clay and package our products
            with sustainable materials. We believe that exquisite design should never come at the expense of the planet,
            and we are honored to share our commitment with you.
          </Text>
        </Box>
      </Box>
      {/* Section Three  */}
      <Flex direction='column' minH='full' mt={12} mb={12} px={{ base: '5', lg: '0' }}>
        <Stack direction={{ base: 'column-reverse', md: 'row' }} justify='space-between' gap={5}>
          <Box textAlign={{ base: 'center', md: 'left' }} mx='auto' alignSelf='center' flex={1}>
            <Text color='brand.4001' fontSize='1.5em' fontFamily='heading' maxW='2xl' mx='auto' mb={5}>
              At Ander Hill's Pottery, we believe that every piece we create tells a story and becomes a cherished part
              of your life's journey.
            </Text>
            <Text color='brand.500' fontSize='1em' maxW='2xl' mx='auto'>
              Thank you for choosing Ander Hill's Pottery, where beauty, sustainability, and craftsmanship meet to
              elevate your everyday routines. We are thrilled to be a part of your home and your story, and we can't
              wait to see how our pottery adds warmth, joy, and meaning to your life.
            </Text>
          </Box>
          <Box mx='auto' rounded='2px' overflow='hidden' flex={1}>
            <Image fit='cover' src={AboutUsHandsTwo} alt='Pottery Making' maxW='100%' minH='350px' ml='auto' />
          </Box>
        </Stack>
      </Flex>
    </Box>
  );
};

export default AboutUs;
