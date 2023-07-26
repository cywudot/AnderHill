import { Container, Grid, GridItem, Text, Image, Link, Heading, useMediaQuery } from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';

const CategoriesSection = () => {
  const mockButtonStyles = {
    position: 'absolute',
    bottom: '15%',
    left: '50%',
    transform: 'translateX(-50%)',
    p: { base: '2', md: '3' },
    rounded: 2,
    backgroundColor: 'brand.100',
    color: 'brand.500',
    fontSize: { base: 'sm', md: 'md' },
  };

  const ShopAll = 'https://storage.googleapis.com/anderhillproducts/otherassets/AllProducts.jpg';
  const ShopAllMobile = 'https://storage.googleapis.com/anderhillproducts/otherassets/AllProductsMobile.jpg';
  const Dinnerware = 'https://storage.googleapis.com/anderhillproducts/otherassets/Dinnerware.jpg';
  const DinnerwareM = 'https://storage.googleapis.com/anderhillproducts/otherassets/DinnerwareMobile.jpg';
  const HomeAccent = 'https://storage.googleapis.com/anderhillproducts/otherassets/HomeAccent.jpg';
  const HomeAccentM = 'https://storage.googleapis.com/anderhillproducts/otherassets/HomeAccentMobile.jpg';
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  const [isBase] = useMediaQuery('(max-width: 375px)');

  return (
    <Container as='section' maxW='12xl' justifyContent='center' mt={[8, 10]} px={{ base: '8', md: '10', lg: '12' }}>
      <Heading
        as='h2'
        size={['lg', 'xl']}
        textAlign='center'
        textTransform='uppercase'
        color='brand.500'
        pb={{ base: '2', lg: '4' }}
      >
        Discover Ander Hill
      </Heading>

      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
        templateRows={{ base: 'repeat(3, 1fr)', sm: 'repeat(2, 1fr)', lg: '1fr' }}
        gap={4}
        pb={{ base: '10', lg: '0' }}
      >
        <Link as={ReactLink} to='/products/Home%20Accents'>
          <GridItem colSpan={{ base: 1, lg: 1 }} rowSpan={{ base: 1, lg: 1 }} position='relative'>
            <Image
              w='full'
              fit='cover'
              objectPosition='center'
              src={isBase ? HomeAccentM : HomeAccent}
              alt='Home accent products link'
              maxW='600px'
            />
            <Text {...mockButtonStyles} whiteSpace='nowrap'>
              Shop Home Accents
            </Text>
          </GridItem>
        </Link>

        <Link as={ReactLink} to='/products/Dinnerware'>
          <GridItem colSpan={{ base: 1, md: 1 }} rowSpan={{ base: 1, lg: 1 }} position='relative'>
            <Image
              w='full'
              fit='cover'
              objectPosition='center'
              src={isBase ? DinnerwareM : Dinnerware}
              alt='Dinnerware products link'
              maxW='600px'
            />
            <Text {...mockButtonStyles} whiteSpace='nowrap'>
              Shop Dinnerware
            </Text>
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
              src={isMobile ? ShopAllMobile : ShopAll}
              alt='Shop all collections link'
              maxW={{ sm: '920px', lg: '600px' }}
            />
            <Text {...mockButtonStyles} whiteSpace='nowrap'>
              Shop All
            </Text>
          </Link>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default CategoriesSection;
