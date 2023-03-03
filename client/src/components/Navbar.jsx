import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Icon,
  Text,
  useDisclosure,
  Button,
  Stack,
  useColorModeValue,
  useColorMode,
} from '@chakra-ui/react';

import { Link as ReactLink } from 'react-router-dom';
import { AiOutlineShoppingCart, AiOutlineLogin } from 'react-icons/ai';
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import AHLogo from '../logoandbackground/AnderHillLogo.png';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const links = [
  { linkName: 'Home', path: '/' },
  { linkName: 'Shop', path: '/shop' },
  { linkName: 'About Us ', path: '/aboutus' },
  { linkName: 'Contact Us ', path: '/contactus' },
];

const NavLink = ({ path, children }) => (
  <Link
    as={ReactLink}
    to={path}
    px={2}
    py={2}
    fontSize={{ base: '16px', md: '16px', lg: '18px' }}
    color='brand.500'
    variant='none'
    _hover={{ textDecoration: 'none', color: 'brand.400' }}
    fontFamily='heading'
  >
    {children}
  </Link>
);

const Navbar = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box bg='transparent' px={12}>
      <Flex h={28} alignItems='center' justifyContent='space-between'>
        {/* -----Hamburger Toggle ------*/}
        <IconButton
          size='md'
          alignItems='center'
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        {/* -----Logo-----  */}
        <HStack>
          <Link as={ReactLink} to='/'>
            <Flex alignItems='center' minWidth='120px' maxWidth='150px'>
              <img src={AHLogo} alt='logo' />
            </Flex>
          </Link>
        </HStack>
        {/* -----Links Wrapper (Home/About/Shop/Contact Link)------*/}
        <HStack as='nav' spacing={4} display={{ base: 'none', md: 'flex' }}>
          {links.map((link) => (
            <NavLink key={link.linkName} path={link.path} color='brand.500'>
              {link.linkName}
            </NavLink>
          ))}
        </HStack>

        {/* Signup and Signin */}
        <Flex alignItems='center' justifyContent='space-between'>
          <Button
            as={ReactLink}
            to='/registration'
            fontSize='md'
            fontWeight={400}
            variant='none'
            color='brand.500'
            display={{ base: 'none', md: 'inline-flex' }}
          >
            Sign Up
          </Button>
          <Button as={ReactLink} to='/login' fontSize='md' fontWeight={400} variant='none' color='brand.500'>
            <AiOutlineLogin size='25px' />
          </Button>
          <Button
            as={ReactLink}
            to='/shoppingcart'
            bg='tranparent'
            color='brand.500'
            alt='cart'
            _hover={{ textDecoration: 'none' }}
            variant='none'
            px={0}
          >
            <AiOutlineShoppingCart size='25px' />
          </Button>
        </Flex>
      </Flex>
      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack>
            {links.map((link) => (
              <NavLink key={link.linkName} path={link.path}>
                {link.linkName}
              </NavLink>
            ))}
            <NavLink key='sign up' path='/registration' fontFamily='heading'>
              Sign Up
            </NavLink>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navbar;
