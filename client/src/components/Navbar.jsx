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
  DrawerFooter,
  DrawerBody,
  Icon,
  Text,
  useDisclosure,
  Button,
  Image,
  useToast,
  Menu,
  MenuList,
  MenuItem,
  MenuDivider,
  MenuButton,
  VStack,
  chakra,
} from '@chakra-ui/react';

import { IoMdMenu } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { Link as ReactLink, useLocation } from 'react-router-dom';
import { AiOutlineShoppingCart, AiOutlineLogin } from 'react-icons/ai';
import { MdLocalShipping, MdLogout } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import AHLogo from '../logo/AnderHillLogo.png';
import { logout } from '../redux/actions/userActions';
import { useRef } from 'react';
import { BsPersonCircle } from 'react-icons/bs';

const links = [
  { linkName: 'Home', path: '/' },
  { linkName: 'Shop', path: '/products' },
  { linkName: 'About Us ', path: '/aboutus' },
];

const NavLink = ({ path, children }) => {
  const { pathname } = useLocation();
  const isActive = pathname === path;

  return (
    <Link
      as={ReactLink}
      to={path}
      px={2}
      py={2}
      alt={links.linkName}
      fontSize='xl'
      fontWeight='semibold'
      color={isActive ? 'brand.4001' : 'brand.500'}
      textTransform='uppercase'
      variant='none'
      _activeLink={{ color: 'brand.400' }}
      _hover={{ textDecoration: 'none', color: 'brand.400' }}
      fontFamily='heading'
    >
      <Box>{children}</Box>
    </Link>
  );
};

const MobileNav = ({ width, placement = 'right', children, title = 'Menu', footer }) => {
  const user = useSelector((state) => state.user);
  const { userInfo } = user;

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <Flex w={width} display={{ base: 'flex', md: 'none' }}>
      <Button ref={btnRef} onClick={onOpen} variant='none'>
        <IoMdMenu size='26px' />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement={placement}
        onClose={onClose}
        finalFocusRef={btnRef}
        modifiers={[
          { name: 'preventOverflow', options: { padding: 8 } },
          { name: 'flip', options: { padding: 8 } },
        ]}
      >
        <DrawerOverlay />
        <DrawerContent alignItems='center'>
          <DrawerCloseButton alignSelf='end' px={8} py={8} _hover={{ backgroundColor: 'none' }} />
          <DrawerBody pt={8}>
            <VStack alignItems='left'>
              {links.map((item, i) => (
                <NavLink key={item.linkName} path={item.path} color='brand.500' alt={item.linkName}>
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
      <Icon as={AiOutlineShoppingCart} h='7' w='7' alignSelf='center' />
    </Flex>
  );
};

const Navbar = () => {
  const user = useSelector((state) => state.user);
  const { userInfo } = user;
  const dispatch = useDispatch();
  const toast = useToast();

  const logoutHandler = () => {
    dispatch(logout());
    toast({ description: 'You have been logged out.', status: 'success', isClosable: true });
  };

  return (
    <chakra.header id='header'>
      <Flex
        w='100%'
        px={{ md: '2', lg: '12' }}
        py={{ base: '2', md: '4' }}
        align='center'
        justify='space-between'
        pos='fixed'
        top='0'
        left='0'
        right='0'
        zIndex='sticky'
        bg='brand.100'
      >
        {/* Logo */}
        <Link as={ReactLink} to='/' _hover={{ textDecoration: 'none' }}>
          <Image src={AHLogo} display={{ base: 'none', lg: 'initial' }} minWidth='100px' maxWidth='150px' />
          <Text
            display={{ base: 'initial', lg: 'none' }}
            fontFamily='heading'
            textTransform='uppercase'
            color='brand.500'
            fontWeight='bold'
            fontSize={['xl', '3xl']}
            ml={3}
          >
            ANDER HILL
          </Text>
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
          {userInfo ? (
            <>
              <Menu justify='center'>
                <MenuButton mt={1} transition='all 0.3s' as={Button} variant='none'>
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
                alt='login-button'
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
            alt='cart-button'
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
