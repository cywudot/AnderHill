import {
  Button,
  Box,
  ButtonGroup,
  Container,
  Divider,
  Flex,
  Icon,
  Link,
  IconButton,
  Input,
  Stack,
  Text,
  useToast,
} from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import AHLogo from '../logo/AnderHillLogoFooter.png';
import { Link as ReactLink } from 'react-router-dom';
import { useState } from 'react';
import { Field, Form, Formik } from 'formik';

const Footer = () => {
  const [email, setEmail] = useState('');
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmail('');
      toast({ description: 'Subscribed', status: 'success', isClosable: true });
    } else if (!email) {
      toast({ description: 'Please enter an email', status: 'warning', isClosable: true });
    } else {
      toast({ description: 'Please enter a vaild email', status: 'error', isClosable: true });
    }
  };

  return (
    <Box backgroundColor='brand.500' w='100%'>
      <Container as='footer' role='contentinfo' maxW='7xl'>
        <Stack
          spacing='8'
          direction={{ base: 'column', md: 'row' }}
          justify='space-around'
          py={{ base: '8', md: '12' }}
        >
          <Stack spacing={{ base: '6', md: '8' }} align='start'>
            <Flex alignItems='center' m='auto'>
              <Box maxWidth='180px'>{<img src={AHLogo} alt='logo' />}</Box>
            </Flex>
          </Stack>
          <Stack
            direction={{
              base: 'column-reverse',
              md: 'column',
              lg: 'row',
            }}
            spacing={{
              base: '12',
              md: '8',
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

            <Stack spacing='1'>
              <Text fontSize='md' fontFamily='heading' textTransform='uppercase' fontWeight='bold' color='brand.100'>
                Stay up to date
              </Text>

              <Stack
                spacing='4'
                direction={{
                  base: 'column',
                  sm: 'row',
                }}
                maxW={{
                  lg: '360px',
                }}
              >
                <Input
                  placeholder='Enter your email'
                  name='enteremail'
                  size='sm'
                  type='email'
                  required
                  variant='flushed'
                  borderColor='brand.100'
                  focusBorderColor='brand.800'
                  color='brand.100'
                  _placeholder={{ color: 'brand.800' }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button
                  variant='primary'
                  size='sm'
                  type='submit'
                  flexShrink={0}
                  backgroundColor='brand.100'
                  color='brand.500'
                  rounded='2'
                  onClick={(e) => handleSubmit(e)}
                >
                  Subscribe
                </Button>
              </Stack>
              <Text color='brand.750' fontSize='sm' width='80%' pt={2}>
                Get 15% off on your first order just by subscribing to our newsletter
              </Text>
            </Stack>
          </Stack>
        </Stack>
        <Divider />
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
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
