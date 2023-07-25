import React, { lazy, Suspense } from 'react';
import { Box, Container, SimpleGrid, Divider, Link, Stack, Image, Text, Heading } from '@chakra-ui/react';
import AHLogo from '../logo/AnderHillLogoFooter.png';
import { Link as ReactLink } from 'react-router-dom';

const EmailSub = lazy(() => import('./EmailSub'));

const Footer = () => {
  const styleLink = {
    textDecoration: 'none',
    color: 'brand.750',
    fontSize: 'sm',
  };

  return (
    <Box as='footer' backgroundColor='brand.500' mt={8} position='relative' bottom={0} width='100%' minH='200px'>
      <Container role='contentinfo' maxW={{ base: 'lg', md: '8xl' }} pt={3} pb={3}>
        <SimpleGrid
          templateColumns={{ base: '1fr 1fr', lg: '1fr 1fr 1fr 2fr' }}
          templateRows={{ base: '1fr 1fr 1fr', md: '1fr' }}
          spacing={5}
          pt={4}
          pb={{ base: '0', lg: '4' }}
          px={4}
        >
          <Stack spacing={4} gridColumn={{ base: '1 / -1', lg: 'auto' }} textAlign={{ base: 'center', lg: 'left' }}>
            <Box
              colSpan={{ base: 1, md: 1 }}
              rowSpan={{ base: 1, lg: 1 }}
              alignSelf={{ base: 'center', lg: 'flex-start' }}
              my='auto'
            >
              <Image src={AHLogo} maxWidth='180px' alt='footer-logo' />
            </Box>
          </Stack>
          <Stack mx='auto'>
            <Heading fontSize='md' fontWeight='bold' color='brand.100' fontFamily='heading'>
              NAVIGATION
            </Heading>
            <Link as={ReactLink} to='/' sx={styleLink}>
              Home
            </Link>
            <Link as={ReactLink} to='/products' sx={styleLink}>
              Shop
            </Link>
            <Link as={ReactLink} to='/aboutus' sx={styleLink}>
              About us
            </Link>
          </Stack>
          <Stack mx='auto'>
            <Heading fontSize='md' fontWeight='bold' color='brand.100' fontFamily='heading'>
              LEGAL
            </Heading>
            <Link href={'#'} sx={styleLink}>
              Privacy Policy
            </Link>
            <Link href={'#'} sx={styleLink}>
              Terms of Service
            </Link>
            <Link href={'#'} sx={styleLink}>
              Partners
            </Link>
          </Stack>

          <Stack gridColumn={{ base: '1 / -1', lg: 'auto' }} mt={{ base: '0', sm: '3', lg: '0' }} flex={2} mx='auto'>
            <Heading fontSize='md' fontWeight='bold' color='brand.100' fontFamily='heading' textTransform='uppercase'>
              Subscribe to our newsletter
            </Heading>
            <Suspense fallback={<div>Loading...</div>}>
              <EmailSub />
            </Suspense>
          </Stack>
        </SimpleGrid>

        <Divider orientation='horizontal' pb={3} />
        <Stack direction={['column-reverse', 'row']} justify='space-between' textAlign='center'>
          <Text color='brand.750' fontSize={['xs', 'sm']} pt={2}>
            © 2023 AH Pottery. All rights reserved.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
