import { Box, Button, Container, Grid, GridItem, Image, Link, Heading } from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';
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
        pb={{ base: '12', lg: '0' }}
      >
        <Link as={ReactLink} to='/products/Home%20Accents'>
          <GridItem colSpan={{ base: 1, lg: 1 }} rowSpan={{ base: 1, lg: 1 }} position='relative'>
            <Image w='full' fit='cover' objectPosition='center' src={HomeAccent} alt='Home accent products link' />

            <Button
              position='absolute'
              top='80%'
              left='50%'
              transform='translate(-50%, -50%)'
              p={{ base: '4', md: '6' }}
              rounded={2}
              variant='none'
              fontWeight='regular'
              backgroundColor='brand.100'
              color='brand.500'
              fontSize={{
                base: 'sm',
                md: 'md',
              }}
              aria-label='Shop Home Accents'
            >
              Shop Home Accents
            </Button>
          </GridItem>
        </Link>

        <Link as={ReactLink} to='/products/Dinnerware'>
          <GridItem colSpan={{ base: 1, lg: 1 }} rowSpan={{ base: 1, lg: 1 }} position='relative'>
            <Image w='full' fit='cover' objectPosition='center' src={Dinnerware} alt='Dinnerware products link' />
            <Button
              position='absolute'
              top='80%'
              left='50%'
              transform='translate(-50%, -50%)'
              p={{ base: '4', md: '6' }}
              rounded={2}
              variant='none'
              fontWeight='regular'
              backgroundColor='brand.100'
              color='brand.500'
              fontSize={{
                base: 'sm',
                md: 'md',
              }}
              aria-label='Shop Dinnerware'
            >
              Shop Dinnerware
            </Button>
          </GridItem>
        </Link>

        <GridItem colSpan={{ base: 1, sm: 2, lg: 1 }} rowSpan={{ base: 1, lg: 1 }} position='relative'>
          <Link as={ReactLink} to='/products'>
            <Image
              objectFit='cover'
              position='absolute'
              top={0}
              left={0}
              w='100%'
              h='100%'
              src={ShopAll}
              alt='Shop all collections link'
            />

            <Button
              position='absolute'
              top='80%'
              left='50%'
              transform='translate(-50%, -50%)'
              p={{ base: '4', md: '6' }}
              rounded={2}
              variant='none'
              fontWeight='regular'
              backgroundColor='brand.100'
              color='brand.500'
              fontSize={{
                base: 'sm',
                md: 'md',
              }}
              aria-label='Shop All Products'
            >
              Shop All
            </Button>
          </Link>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default CategoriesSection;
