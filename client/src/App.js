import { ChakraProvider, extendTheme, Box } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@fontsource/cormorant-garamond';
import '@fontsource/poppins';
import React, { Suspense } from 'react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ScrollToTop from './helpers/ScrollToTop.js';
import { Stack, Spinner } from '@chakra-ui/react';
// import ProductsScreens from './screens/ProductsScreens';
const ProductsScreens = React.lazy(() => import('./screens/ProductsScreens'));
// import CartScreen from './screens/CartScreen';
const CartScreen = React.lazy(() => import('./screens/CartScreen'));
// import ProductScreen from './screens/ProductScreen';
const ProductScreen = React.lazy(() => import('./screens/ProductScreen'));

// import AboutUs from './screens/AboutUs';
const AboutUs = React.lazy(() => import('./screens/AboutUs'));
// import LoginScreen from './screens/LoginScreen';
const LoginScreen = React.lazy(() => import('./screens/LoginScreen'));
// import RegistrationScreen from './screens/RegistrationScreen';
const RegistrationScreen = React.lazy(() => import('./screens/RegistrationScreen'));
// import ProfileScreen from './screens/ProfileScreen';
const ProfileScreen = React.lazy(() => import('./screens/ProfileScreen'));
// import CheckoutScreen from './screens/CheckoutScreen';
const CheckoutScreen = React.lazy(() => import('./screens/CheckoutScreen'));
// import OrderSuccessScreen from './screens/OrderSuccessScreen';
const OrderSuccessScreen = React.lazy(() => import('./screens/OrderSuccessScreen'));
// import YourOrdersScreen from './screens/YourOrdersScreen';
const YourOrdersScreen = React.lazy(() => import('./screens/YourOrdersScreen'));

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        background: '#FCFAF7',
      },
    }),
  },
  initialColorMode: 'light',
  useSystemColorMode: false,
  colors: {
    brand: {
      100: '#FCFAF7',
      200: '#D8D3CB',
      300: '#BFB5A6',
      3001: '#989084',
      400: '#DFBD8E',
      450: '#ECD7BA',
      4001: '#C4A67C',
      500: '#454545',
      5001: '#343434',
      600: '#F16161',
      700: '#ECE8E8',
      720: '#F0F0F0',
      750: '#CCCCCC',
      800: '#84817C',
      1000: '#17B169',
      1001: '#128C53',
    },
  },
  fonts: {
    heading: `'Cormorant Garamond', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Box
          display='flex'
          minHeight='calc(100vh - 100px)'
          flexDirection='column'
          position='relative'
          mt={{ base: '50px', lg: '100px' }}
        >
          <main>
            <Suspense
              fallback={
                <Stack direction='row' justify='center' pt={10} spacing={4}>
                  <Spinner mt={20} thickness='2px' speed='0.65s' emptyColor='gray.200' color='brand.400' size='xl' />
                </Stack>
              }
            >
              <Routes>
                <Route path='/' element={<HomeScreen />}></Route>
                <Route path='/products/:category?' element={<ProductsScreens />}></Route>
                <Route path='/aboutus' element={<AboutUs />}></Route>
                <Route path='/product/:id' element={<ProductScreen />}></Route>
                <Route path='/shoppingcart' element={<CartScreen />}></Route>
                <Route path='/login' element={<LoginScreen />}></Route>
                <Route path='/registration' element={<RegistrationScreen />}></Route>
                <Route path='/profile' element={<ProfileScreen />}></Route>
                <Route path='/checkout' element={<CheckoutScreen />}></Route>
                <Route path='/order-success' element={<OrderSuccessScreen />}></Route>
                <Route path='/your-orders' element={<YourOrdersScreen />}></Route>
              </Routes>
            </Suspense>
          </main>
        </Box>
        <Footer />
      </Router>
    </ChakraProvider>
  );
}

export default App;
