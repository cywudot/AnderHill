import {
  Box,
  Flex,
  Heading,
  HStack,
  Container,
  Stack,
  Icon,
  Image,
  Link,
  Skeleton,
  useColorModeValue,
  Text,
} from '@chakra-ui/react';
import { FaArrowRight } from 'react-icons/fa';
import { Link as ReactLink } from 'react-router-dom';
import HeroImage from '../otherassets/HomeHeroImage.png';

const LandingScreen = () => (
  <Box maxW='9xl' mx='auto' px={{ base: '0', lg: '12' }} py={{ base: '0', lg: '12' }} minH='6xl'>
    <Flex flex='1' overflow='hidden'>
      <Image
        src={`${HeroImage}`}
        alt='Lovely Image'
        fallback={<Skeleton />}
        // maxH='450px'
        minW='300px'
        objectFit='cover'
        flex='1'
      />
      <Image
        display={{
          base: 'none',
          sm: 'initial',
        }}
        src={`url(${HeroImage})`}
        alt='Lovely Image'
        fallback={<Skeleton />}
        maxH='450px'
        objectFit='cover'
      />
    </Flex>
    {/* <Stack
      direction={{
        base: 'column-reverse',
        lg: 'row',
      }}
      spacing={{
        base: '0',
        lg: '20',
      }}
    >
      <Box
        width={{
          lg: 'sm',
        }}
        transform={{
          base: 'translateY(-50%)',
          lg: 'none',
        }}
        bg={{
          base: useColorModeValue('red.50', 'gray.700'),
          lg: 'transparent',
        }}
        mx={{
          base: '6',
          md: '8',
          lg: '0',
        }}
        px={{
          base: '6',
          md: '8',
          lg: '0',
        }}
        py={{
          base: '6',
          md: '8',
          lg: '12',
        }}
      >
        <Stack spacing={{ base: '8', lg: '10' }}>
          <Stack spacing={{ base: '2', lg: '4' }}>
            <Heading size='xl' color={useColorModeValue('red.500', 'red.300')}>
              Misguided
            </Heading>
            <Heading size='xl' fontWeight='normal'>
              Refresh your wardrobe
            </Heading>
          </Stack>
          <HStack spacing='3'>
            <Link color={useColorModeValue('red.500', 'red.300')} fontWeight='bold' fontSize='lg'>
              Discover now
            </Link>
            <Icon color={useColorModeValue('red.500', 'red.300')} as={FaArrowRight} />
          </HStack>
        </Stack>
      </Box>
      <Flex flex='1' overflow='hidden'>
        <Image
          src='https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80'
          alt='Lovely Image'
          fallback={<Skeleton />}
          maxH='450px'
          minW='300px'
          objectFit='cover'
          flex='1'
        />
        <Image
          display={{
            base: 'none',
            sm: 'initial',
          }}
          src='https://images.unsplash.com/photo-1589156206699-bc21e38c8a7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80'
          alt='Lovely Image'
          fallback={<Skeleton />}
          maxH='450px'
          objectFit='cover'
        />
      </Flex>
    </Stack> */}
  </Box>
);

export default LandingScreen;
