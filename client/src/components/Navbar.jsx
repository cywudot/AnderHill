import {
  Box,
  Badge,
  Flex,
  HStack,
  Link,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerFooter,
  DrawerBody,
  IconButton,
  Icon,
  Text,
  useDisclosure,
  Button,
  Stack,
  Image,
  useColorModeValue,
  useColorMode,
  useToast,
  Menu,
  MenuList,
  MenuItem,
  MenuDivider,
  MenuButton,
  VStack,
  Center,
  chakra,
} from '@chakra-ui/react';

import { IoMdMenu } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { Link as ReactLink } from 'react-router-dom';
import { AiOutlineShoppingCart, AiOutlineLogin } from 'react-icons/ai';
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { MdLocalShipping, MdLogout } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import AHLogo from '../logo/AnderHillLogo.png';
import AHLogo2 from '../logo/AnderHillLogo2.png';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { logout } from '../redux/actions/userActions';
import { useLayoutEffect, useRef } from 'react';
import { BsPersonCircle } from 'react-icons/bs';

const links = [
  { linkName: 'Home', path: '/' },
  { linkName: 'Shop', path: '/products' },
  { linkName: 'About Us ', path: '/aboutus' },
];

const NavLink = ({ path, children }) => (
  <Link
    as={ReactLink}
    to={path}
    px={2}
    py={2}
    alt={links.linkName}
    fontSize={{ base: '2xl', md: 'lg' }}
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

const MobileNav = ({ width, placement = 'right', children, title = 'Menu', footer }) => {
  const user = useSelector((state) => state.user);
  const { userInfo } = user;

  const p = 15;

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <Flex w={width} display={{ base: 'flex', md: 'none' }}>
      <Button ref={btnRef} onClick={onOpen} variant='none'>
        <IoMdMenu size='26px' />
      </Button>
      <Drawer isOpen={isOpen} placement={placement} onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent alignItems='center'>
          <DrawerCloseButton alignSelf='end' mx={p} my={p} />
          <DrawerBody mt={8}>
            <VStack alignItems='left'>
              {links.map((item, i) => (
                <NavLink key={item.linkName} path={item.path} color='brand.500'>
                  {item.linkName}
                </NavLink>
              ))}

              {!userInfo && (
                <NavLink key='sign up' path='/registration' fontFamily='heading' onClick={onClose}>
                  Sign Up
                </NavLink>
              )}
            </VStack>
          </DrawerBody>
          <DrawerFooter>{footer}</DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};
const ShoppingCartIcon = () => {
  const cartInfo = useSelector((state) => state.cart);
  const { cart } = cartInfo;

  const cartItemsTotalCalc = (cartState) => {
    let total = 0;
    cartState.map((item) => (total += Number(item.qty)));
    return total;
  };

  return (
    <Flex>
      {cart.length > 0 && (
        <Badge
          position='absolute'
          top='-1'
          right='-1'
          backgroundColor='brand.4001'
          color='brand.100'
          borderRadius='full'
          size='sm'
          align='center'
          fontWeight='light'
          p='2px'
          w='22px'
          h='22px'
          lineHeight='1.7'
        >
          {cartItemsTotalCalc(cart)}
        </Badge>
      )}
      <Icon as={AiOutlineShoppingCart} h='10' w='7' alignSelf='center' />
      {/* <AiOutlineShoppingCart size='30px' /> */}
    </Flex>
  );
};

const Navbar = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const user = useSelector((state) => state.user);
  const { userInfo } = user;
  const dispatch = useDispatch();
  const toast = useToast();

  const logoutHandler = () => {
    dispatch(logout());
    toast({ description: 'You have been logged out.', status: 'success', isClosable: true });
  };

  return (
    <chakra.header
      id='header'
      // position='fixed'
      // top='0'
      // width='100%'
      // zIndex='9999'
      // boxShadow='base'
      // backgroundColor='brand.100'
    >
      <Flex w='100%' px='6' py='5' align='center' justify='space-between'>
        {/* Logo */}
        <Link as={ReactLink} to='/'>
          <Image
            src={AHLogo}
            display={{ base: 'none', lg: 'initial' }}
            // alignItems='center'
            minWidth='120px'
            maxWidth='150px'
          />
          <Image
            src={AHLogo2}
            display={{ base: 'initial', lg: 'none' }}
            // alignItems='center'
            minWidth='100px'
            maxWidth='120px'
          />
        </Link>
        {/* Nav Items */}

        <HStack as='nav' spacing='5' display={{ base: 'none', md: 'flex' }}>
          {links.map((item, i) => (
            <NavLink key={item.linkName} path={item.path} color='brand.500'>
              {item.linkName}
            </NavLink>
          ))}
        </HStack>
        {/* Call to action items */}
        <HStack>
          {/* <Button aria-label={CTA} variant='outline'>
            {CTA}
          </Button> */}

          {userInfo ? (
            <>
              <Menu>
                <MenuButton px='4' py='2' mt={1} transition='all 0.3s' as={Button} variant='none'>
                  {/* Hi, {userInfo.name} <ChevronDownIcon /> */}
                  <Icon as={BsPersonCircle} w={6} h={6} color='brand.500' />
                </MenuButton>
                <MenuList rounded={2} backgroundColor='brand.100' borderColor='brand.500'>
                  <MenuItem as={ReactLink} to='/profile' backgroundColor='brand.100' color='brand.500'>
                    <CgProfile color='brand.500' />
                    <Text ml='2'>Profile</Text>
                  </MenuItem>
                  <MenuItem as={ReactLink} to='/your-orders' backgroundColor='brand.100' color='brand.500'>
                    <MdLocalShipping />
                    <Text ml='2'>Your Order</Text>
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem onClick={logoutHandler} backgroundColor='brand.100' color='brand.500'>
                    <MdLogout color='brand.500' />
                    <Text ml='2'>Logout</Text>
                  </MenuItem>
                </MenuList>
              </Menu>
            </>
          ) : (
            <>
              <Button
                as={ReactLink}
                to='/registration'
                fontWeight={400}
                variant='none'
                color='brand.500'
                display={{ base: 'none', md: 'inline-flex' }}
                p={3}
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
                <Icon as={AiOutlineLogin} h='7' w='7' />
              </Button>
            </>
          )}
          <Button
            as={ReactLink}
            to='/shoppingcart'
            color='brand.500'
            alt='cart'
            px={0}
            variant='none'
            backgroundColor='transparent'
          >
            <ShoppingCartIcon />
          </Button>
          <MobileNav />
        </HStack>
      </Flex>
    </chakra.header>
  );
};

export default Navbar;
