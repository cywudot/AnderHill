import {
  Button,
  Box,
  ButtonGroup,
  Container,
  SimpleGrid,
  Divider,
  Flex,
  Icon,
  Link,
  IconButton,
  ListHeader,
  Input,
  Stack,
  Image,
  Text,
  useToast,
  Heading,
} from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import AHLogo from '../logo/AnderHillLogoFooter.png';
import { Link as ReactLink } from 'react-router-dom';
import FooterTest from './FooterTest';

const Footer = () => {
  return (
    <Box backgroundColor='brand.500' w='100%' p={4}>
      <Container as='footer' role='contentinfo' maxW='8xl' p={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '1fr 1fr 1fr 2fr' }}
          templateRows={{ base: '1fr 1fr 1fr', md: '1fr' }}
          spacing={5}
        >
          <Stack spacing={4} gridColumn={{ base: '1 / -1', md: 'auto' }} textAlign={{ base: 'center', md: 'left' }}>
            <Box
              colSpan={{ base: 1, md: 1 }}
              rowSpan={{ base: 1, lg: 1 }}
              alignSelf={{ base: 'center', md: 'flex-start' }}
              my='auto'
            >
              <Image src={AHLogo} maxWidth='180px' />
            </Box>
          </Stack>
          <Stack>
            <Heading fontSize='md' fontWeight='bold' color='brand.100' fontFamily='heading'>
              NAVIGATION
            </Heading>
            <Link href={'/'} color='brand.750' fontSize='sm' style={{ textDecoration: 'none' }}>
              Home
            </Link>
            <Link href={'/products'} color='brand.750' fontSize='sm' style={{ textDecoration: 'none' }}>
              Shop
            </Link>
            <Link href={'/aboutus'} color='brand.750' fontSize='sm' style={{ textDecoration: 'none' }}>
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

          <Stack gridColumn={{ base: '1 / -1', md: 'auto' }} pt={{ base: '3', md: '0' }}>
            <Heading fontSize='md' fontWeight='bold' color='brand.100' fontFamily='heading'>
              STAY IN TOUCH
            </Heading>
            <FooterTest />
          </Stack>
        </SimpleGrid>

        {/* <Text fontSize='sm' color='brand.750'>
              © 2022 Chakra Templates. All rights reserved
            </Text> */}
        {/* <Stack
          spacing='8'
          direction={{ base: 'column', md: 'row' }}
          justify='space-around'
          py={{ base: '8', md: '12' }}
        >
          <Stack spacing={{ base: '6', md: '8' }} align='start'>
            <Flex alignItems='center' m='auto'>
              <Box maxWidth='180px'>{<img src={AHLogo} />}</Box>
            </Flex>
          </Stack>
          <Stack
            direction={{
              base: 'column-reverse',
              md: 'column',
              lg: 'row',
            }}
            spacing={{
              base: '20',
              md: '2',
            }}
          >
            <Stack direction='row' spacing='8'>
              <Stack spacing='3' minW='28' flex='1'>
                <Text fontSize='md' fontWeight='bold' color='brand.100' fontFamily='heading'>
                  NAVIGATION
                </Text>
                <Stack shouldWrapChildren>
                  <Button
                    variant='link'
                    as={ReactLink}
                    to='/'
                    color='brand.750'
                    fontWeight='light'
                    fontSize='sm'
                    style={{ textDecoration: 'none' }}
                  >
                    Home
                  </Button>
                  <Button
                    variant='link'
                    color='brand.750'
                    as={ReactLink}
                    to='/products'
                    fontWeight='light'
                    fontSize='sm'
                    style={{ textDecoration: 'none' }}
                  >
                    Shop
                  </Button>
                  <Button
                    variant='link'
                    color='brand.750'
                    as={ReactLink}
                    to='/aboutus'
                    fontWeight='light'
                    fontSize='sm'
                    style={{ textDecoration: 'none' }}
                  >
                    About Us
                  </Button>
                </Stack>
              </Stack>
              <Stack spacing='3' minW='36' flex='1'>
                <Text fontSize='md' fontWeight='bold' color='brand.100' fontFamily='heading'>
                  LOCATION
                </Text>
                <Stack spacing='3' shouldWrapChildren>
                  <Text fontSize='sm' color='brand.750'>
                    1359 Tanner Street Vancover, B.C, V5R 2T4
                  </Text>
                </Stack>
                <Text fontSize='md' fontWeight='bold' color='brand.100' fontFamily='heading'>
                  OPENING HOURS
                </Text>
                <Stack spacing='3' shouldWrapChildren>
                  <Text fontSize='sm' color='brand.750'>
                    Monday to Saturday from 10:00 to 19:00
                  </Text>
                </Stack>
              </Stack>
            </Stack>

            <Stack spacing='1' align={{ base: 'center', md: 'left' }}>
              <Stack
                spacing='4'
                direction={{
                  base: 'column',
                  sm: 'row',
                }}
                maxW={{
                  base: '400px',
                  lg: '360px',
                }}
                mx='auto'
              >
                <FooterTest />
              </Stack>
            </Stack>
          </Stack>
        </Stack>

        <Divider py={{ base: 4, lg: 2 }} />
        <Stack
          pt='6'
          pb='6'
          justify='space-between'
          direction={{
            base: 'column-reverse',
            md: 'row',
          }}
          align='center'
        >
          <Text fontSize='sm' color='brand.750' textAlign='center'>
            &copy; {new Date().getFullYear()} Ander Hill Pottery, All rights reserved.
          </Text>
          <ButtonGroup variant='ghost'>
            <IconButton
              as='a'
              href='#'
              aria-label='LinkedIn'
              color='brand.750'
              _hover={{ backgroundColor: 'transparent' }}
              icon={<FaInstagram fontSize='1.25rem' />}
            />
            <IconButton
              as='a'
              href='#'
              aria-label='GitHub'
              color='brand.750'
              _hover={{ backgroundColor: 'transparent' }}
              icon={<FaFacebook fontSize='1.25rem' />}
            />
            <IconButton
              as='a'
              href='#'
              aria-label='Twitter'
              color='brand.750'
              _hover={{ backgroundColor: 'transparent' }}
              icon={<FaTwitter fontSize='1.25rem' />}
            />
          </ButtonGroup>
        </Stack> */}
      </Container>
    </Box>
  );
};

export default Footer;
