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
  Image,
  useColorModeValue,
  useColorMode,
} from '@chakra-ui/react';

import { Link as ReactLink } from 'react-router-dom';
import { AiOutlineShoppingCart, AiOutlineLogin } from 'react-icons/ai';
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import AHLogo from '../logo/AnderHillLogo.png';
import AHLogo2 from '../logo/AnderHillLogo2.png';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const links = [
  { linkName: 'Home', path: '/' },
  { linkName: 'Shop', path: '/shop' },
  { linkName: 'About Us ', path: '/aboutus' },
  { linkName: 'Contact ', path: '/contact' },
];

const NavLink = ({ path, children }) => (
  <Link
    as={ReactLink}
    to={path}
    px={2}
    py={2}
    alt={links.linkName}
    fontSize={{ base: '16px', lg: '18px' }}
    fontWeight='semibold'
    color='brand.500'
    textTransform='uppercase'
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
    <Box bg='transparent' px={{ base: 1, lg: 12 }} backgroundColor='brand.100'>
      <Flex minH={16} pt={5} pb={5} pr={{ base: '5px', lg: '0px' }} alignItems='center' justifyContent='space-between'>
        <IconButton
          size='md'
          alignItems='center'
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
          variant='none'
          color='brand.500'
        />

        <Link as={ReactLink} to='/'>
          <Image
            src={AHLogo}
            display={{ base: 'none', lg: 'initial' }}
            alignItems='center'
            minWidth='120px'
            maxWidth='150px'
          />
          <Image
            src={AHLogo2}
            display={{ base: 'initial', lg: 'none' }}
            alignItems='center'
            minWidth='100px'
            maxWidth='120px'
          />
        </Link>

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
            fontWeight={400}
            variant='none'
            color='brand.500'
            display={{ base: 'none', md: 'inline-flex' }}
          >
            <Text
              fontSize={{ base: 'sm', lg: 'md' }}
              fontWeight='semibold'
              color='brand.500'
              textTransform='uppercase'
              fontFamily='heading'
            >
              Sign Up
            </Text>
          </Button>
          <Button
            as={ReactLink}
            to='/login'
            alt='login'
            color='brand.500'
            px={0}
            variant='none'
            backgroundColor='transparent'
          >
            <AiOutlineLogin size='20px' />
          </Button>
          <Button
            as={ReactLink}
            to='/shoppingcart'
            color='brand.500'
            alt='cart'
            px={0}
            variant='none'
            backgroundColor='transparent'
          >
            <AiOutlineShoppingCart size='20px' />
          </Button>
        </Flex>
      </Flex>
      <motion.div
        initial='hidden'
        animate={isOpen ? 'visible' : 'hidden'}
        variants={{
          visible: {
            opacity: 1,
            height: 'auto',
            transition: { ease: 'easeIn', duration: 0.3 },
          },
          hidden: {
            opacity: 0,
            height: 0,
            transition: { ease: 'easeOut', duration: 0.3 },
          },
        }}
      >
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
      </motion.div>
    </Box>
  );
};

export default Navbar;
