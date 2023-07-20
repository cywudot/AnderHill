import { Box, Container, SimpleGrid, Divider, Link, Stack, Image, Text, Heading } from '@chakra-ui/react';
import AHLogo from '../logo/AnderHillLogoFooter.png';
import { Link as ReactLink } from 'react-router-dom';
import EmailSubField from './EmailSubField';

const Footer = () => {
  return (
    <Box as='footer' backgroundColor='brand.500' mt={8} position='relative' bottom={0} width='100%' minH='200px'>
      <Container role='contentinfo' maxW={{ base: 'lg', md: '8xl' }} pt={3} pb={3}>
        <SimpleGrid
          templateColumns={{ base: '1fr 1fr', md: '1fr 1fr 1fr 2fr', lg: '1fr 1fr 1fr 2fr' }}
          templateRows={{ base: '1fr 1fr 1fr', md: '1fr' }}
          spacing={5}
          py={4}
          px={4}
        >
          <Stack spacing={4} gridColumn={{ base: '1 / -1', md: 'auto' }} textAlign={{ base: 'center', md: 'left' }}>
            <Box
              colSpan={{ base: 1, md: 1 }}
              rowSpan={{ base: 1, lg: 1 }}
              alignSelf={{ base: 'center', md: 'flex-start' }}
              my='auto'
            >
              <Image src={AHLogo} maxWidth='180px' alt='footer-logo' />
            </Box>
          </Stack>
          <Stack>
            <Heading fontSize='md' fontWeight='bold' color='brand.100' fontFamily='heading'>
              NAVIGATION
            </Heading>
            <Link as={ReactLink} to='/' color='brand.750' fontSize='sm' style={{ textDecoration: 'none' }}>
              Home
            </Link>
            <Link as={ReactLink} to='/products' color='brand.750' fontSize='sm' style={{ textDecoration: 'none' }}>
              Shop
            </Link>
            <Link as={ReactLink} to='/aboutus' color='brand.750' fontSize='sm' style={{ textDecoration: 'none' }}>
              About us
            </Link>
          </Stack>
          <Stack>
            <Heading fontSize='md' fontWeight='bold' color='brand.100' fontFamily='heading'>
              LEGAL
            </Heading>
            <Link href={'#'} color='brand.750' fontSize='sm' style={{ textDecoration: 'none' }}>
              Privacy Policy
            </Link>
            <Link href={'#'} color='brand.750' fontSize='sm' style={{ textDecoration: 'none' }}>
              Terms of Service
            </Link>
            <Link href={'#'} color='brand.750' fontSize='sm' style={{ textDecoration: 'none' }}>
              Partners
            </Link>
          </Stack>

          <Stack gridColumn={{ base: '1 / -1', md: 'auto' }} pt={{ base: '3', md: '0' }} flex={2}>
            <Heading fontSize='md' fontWeight='bold' color='brand.100' fontFamily='heading'>
              STAY IN TOUCH
            </Heading>
            <EmailSubField />
          </Stack>
        </SimpleGrid>

        <Divider orientation='horizontal' py={3} />
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
