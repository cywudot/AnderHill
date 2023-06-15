import { Box, Button, Container, Flex, Image, Link, Heading } from '@chakra-ui/react';
import { Link as ReactLink, useNavigate } from 'react-router-dom';
import HomeAccent from '../../otherassets/HomeAccent.png';
import Dinnerware from '../../otherassets/Dinnerware.png';
import ShopAll from '../../otherassets/AllProducts.png';

const DiscoverSection = () => {
  return (
    <Container maxW={['10xl', '12xl']} justifyContent='center' mt={10}>
      <Box alignItems='center'>
        <Heading as='h2' textAlign='center' textTransform='uppercase' color='brand.500'>
          Discover Ander Hill
        </Heading>

        <Flex p={50} justifyContent='center' gap={10} justify='space-around' direction={{ base: 'column', lg: 'row' }}>
          <Link as={ReactLink} to='/products/Home%20Accents'>
            <Box h='auto' mx='auto' rounded='2px' overflow='hidden' position='relative'>
              <Image w='full' fit='cover' objectPosition='center' src={HomeAccent} alt='avatar' />
              <Box position='absolute' top='80%' left='50%' transform='translate(-50%, -50%)'>
                <Button
                  p={6}
                  rounded={2}
                  variant='none'
                  fontWeight='regular'
                  w={{
                    base: 'full',
                    sm: 'auto',
                  }}
                  backgroundColor='brand.100'
                  color='brand.500'
                  fontSize={{
                    base: 'sm',
                    md: 'md',
                  }}
                >
                  Shop Home Accents
                </Button>
              </Box>
            </Box>
          </Link>

          <Link as={ReactLink} to='/products/Dinnerware'>
            <Box h='auto' mx='auto' rounded='2px' overflow='hidden' position='relative'>
              <Image w='full' fit='cover' objectPosition='center' src={Dinnerware} alt='avatar' />
              <Box position='absolute' top='80%' left='50%' transform='translate(-50%, -50%)'>
                <Button
                  p={6}
                  rounded={2}
                  variant='none'
                  fontWeight='regular'
                  w={{
                    base: 'full',
                    sm: 'auto',
                  }}
                  backgroundColor='brand.100'
                  color='brand.500'
                  fontSize={{
                    base: 'sm',
                    md: 'md',
                  }}
                >
                  Shop Dinnerware
                </Button>
              </Box>
            </Box>
          </Link>

          <Link as={ReactLink} to='/products'>
            <Box h='auto' mx='auto' rounded='2px' overflow='hidden' position='relative'>
              <Image w='full' fit='cover' objectPosition='center' src={ShopAll} alt='avatar' />
              <Box position='absolute' top='80%' left='50%' transform='translate(-50%, -50%)'>
                <Button
                  p={6}
                  rounded={2}
                  variant='none'
                  fontWeight='regular'
                  w={{
                    base: 'full',
                    sm: 'auto',
                  }}
                  backgroundColor='brand.100'
                  color='brand.500'
                  fontSize={{
                    base: 'sm',
                    md: 'md',
                  }}
                >
                  Shop All
                </Button>
              </Box>
            </Box>
          </Link>
        </Flex>
        {/* FEATURED PRODUCTS SECTION ENDS */}
      </Box>
    </Container>
  );
};

export default DiscoverSection;
