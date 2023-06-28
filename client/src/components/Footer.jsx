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
import EmailSubField from './EmailSubField';

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

          <Stack gridColumn={{ base: '1 / -1', md: 'auto' }} pt={{ base: '3', md: '0' }}>
            <Heading fontSize='md' fontWeight='bold' color='brand.100' fontFamily='heading'>
              STAY IN TOUCH
            </Heading>
            <EmailSubField />
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Footer;
