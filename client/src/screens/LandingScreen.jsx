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
  Spinner,
  AlertTitle,
  Wrap,
  useBreakpointValue,
} from '@chakra-ui/react';
import { FaArrowRight } from 'react-icons/fa';
import { Link as ReactLink, useNavigate } from 'react-router-dom';
import HeroImage from '../otherassets/HomeHeroImage.png';
import HeroImageMobile from '../otherassets/HomeHeroImageMobile.png';
import ContactIcon from '../sourced-icons/contact.png';
import FreeDeliveryIcon from '../sourced-icons/free-delivery.png';
import ReturnIcon from '../sourced-icons/30days.png';
import HomeAccent from '../otherassets/HomeAccent.jpg';
import Dinnerware from '../otherassets/Dinnerware.jpg';
import Video from '../otherassets/AnderHillVideo.mp4';
import ShopAll from '../otherassets/AllProducts.jpg';
import { useDispatch } from 'react-redux';
import { getFilteredProducts } from '../redux/actions/productActions';
import ReactPlayer from 'react-player';

const LandingScreen = () => {
  const dispatch = useDispatch();

  const handleFilter = (category) => {
    dispatch(getFilteredProducts(category));
  };

  // VIDEO BREAKPOINT
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  return (
    <Box maxW='12xl' mx='auto' px={{ base: '0', lg: '12' }} py={{ base: '0', lg: '0' }} minH='8xl'>
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
        // minH='120px'
        // maxH='180px'
        backgroundColor='brand.5001'
        justify={{ base: 'space-between', sm: 'space-around' }}
        align='center'
        textAlign={{ base: 'center', lg: 'left' }}
        p={5}
      >
        <Stack direction={{ base: 'column', lg: 'row' }} align='center' gap={2} maxW={{ base: '190px', md: '300px' }}>
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

        <Stack direction={{ base: 'column', lg: 'row' }} align='center' gap={2} maxW={{ base: '190px', md: '300px' }}>
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

        <Stack direction={{ base: 'column', lg: 'row' }} align='center' gap={2} maxW={{ base: '190px', md: '300px' }}>
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

      <Container maxW={['12xl', '10xl', '8xl']}>
        <Box mt={10} alignItems='center'>
          <Stack>
            <Heading as='h2' textAlign='center' textTransform='uppercase' mb={5} color='brand.500'>
              Discover Ander Hill
            </Heading>
          </Stack>

          {/* FEATURED PRODUCTS SECTION  */}

          <Flex
            p={50}
            justifyContent='center'
            gap={10}
            justify='space-around'
            direction={{ base: 'column', lg: 'row' }}
          >
            <Box w={{ base: 'sm', md: 'lg' }} mx='auto' rounded='2px' overflow='hidden'>
              <Image w='full' h='lg' fit='cover' objectPosition='center' src={HomeAccent} alt='avatar' />
              <Button
                fontFamily='heading'
                fontSize='xl'
                backgroundColor='brand.300'
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

            <Box w={{ base: 'sm', md: 'lg' }} mx='auto' rounded='2px' overflow='hidden'>
              <Image w='full' h='lg' fit='cover' objectPosition='center' src={Dinnerware} alt='avatar' />
              <Button
                fontFamily='heading'
                fontSize='xl'
                backgroundColor='brand.300'
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

            <Box w={{ base: 'sm', md: 'lg' }} mx='auto' rounded='2px' overflow='hidden'>
              <Link as={ReactLink} to='/shop'>
                <Image w='full' h='lg' fit='cover' objectPosition='center' src={ShopAll} alt='avatar' />
              </Link>
              <Button
                fontFamily='heading'
                fontSize='xl'
                backgroundColor='brand.300'
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
      {/* VIDEO */}
      {/* 
      <Box position='relative' height={'100vh'} width={'full'}>
        <ReactPlayer url={Video} playing={true} loop={true} muted={true} volume={0} width={'100%'} height={'100%'}>
    
          <Container position='absolute' top='20%' left={0} right={0} bottom={0}>
            <Stack spacing={6} justify='center' textAlign='center'>
              <Text fontSize={{ base: 'lg', md: '4xl' }} color='brand.100' fontFamily='heading'>
                Welcome to Ander Hill's Pottery, where we believe in the power of beautiful, meaningful, and
                environmentally responsible creations.
              </Text>
              <Button fontSize={{ base: 'sm', lg: 'md' }} color='GrayText'>
                Learn More About Us
              </Button>
            </Stack>
          </Container>
        </ReactPlayer>
      </Box> */}

      {/* VIDEO */}
    </Box>
  );
};

export default LandingScreen;
