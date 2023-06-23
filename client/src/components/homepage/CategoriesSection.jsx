import { Box, Button, Container, Grid, GridItem, Image, Link, Heading } from '@chakra-ui/react';
import { Link as ReactLink, useNavigate } from 'react-router-dom';
import HomeAccent from '../../otherassets/HomeAccent.jpg';
import Dinnerware from '../../otherassets/Dinnerware.jpg';
import ShopAll from '../../otherassets/AllProducts.jpg';

const CategoriesSection = () => {
  return (
    <Container maxW='12xl' justifyContent='center' mt={14} p={0} px={{ base: '8', lg: '12' }}>
      <Heading as='h2' textAlign='center' textTransform='uppercase' color='brand.500' pb={{ base: '0', lg: '4' }}>
        Discover Ander Hill
      </Heading>

      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
        templateRows={{ base: 'repeat(3, 1fr)', sm: 'repeat(2, 1fr)', lg: '1fr' }}
        gap={4}
        // bg='brand.1000'
        pb={{ base: '12', lg: '0' }}
      >
        <GridItem colSpan={{ base: 1, lg: 1 }} rowSpan={{ base: 1, lg: 1 }} position='relative'>
          <Link as={ReactLink} to='/products/Home%20Accents'>
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
          </Link>
        </GridItem>

        <GridItem colSpan={{ base: 1, lg: 1 }} rowSpan={{ base: 1, lg: 1 }} position='relative'>
          <Link as={ReactLink} to='/products/Dinnerware'>
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
          </Link>
        </GridItem>

        <GridItem
          colSpan={{ base: 1, sm: 2, lg: 1 }}
          rowSpan={{ base: 1, lg: 1 }}
          backgroundColor='brand.600'
          position='relative'
        >
          <Link as={ReactLink} to='/products'>
            <Image
              objectFit='cover'
              position='absolute'
              top={0}
              left={0}
              w='100%'
              h='100%'
              src={ShopAll}
              alt='avatar'
            />
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
          </Link>
        </GridItem>
      </Grid>

      {/* <Box alignItems='center'>
       
       <Heading as='h2' textAlign='center' textTransform='uppercase' color='brand.500' pb={{ base: '0', lg: '10' }}>
          Discover Ander Hill
        </Heading>

        <Flex
          p={{ base: '50', lg: '0' }}
          justifyContent='center'
          gap={10}
          direction={{ base: 'column', lg: 'row' }}
          backgroundColor='brand.600'
        >
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
      </Box> */}
    </Container>
  );
};

export default CategoriesSection;
