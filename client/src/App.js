import { ChakraProvider, extendTheme, Box } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './helpers/ScrollToTop.js';
import { Stack, Spinner } from '@chakra-ui/react';

import '@fontsource-variable/manrope';
import '@fontsource-variable/cormorant';

const HomeScreen = lazy(() => import('./screens/HomeScreen'));
const ProductsScreens = lazy(() => import('./screens/ProductsScreens'));
const CartScreen = lazy(() => import('./screens/CartScreen'));
const ProductScreen = lazy(() => import('./screens/ProductScreen'));
const AboutUs = lazy(() => import('./screens/AboutUs'));
const LoginScreen = lazy(() => import('./screens/LoginScreen'));
const RegistrationScreen = lazy(() => import('./screens/RegistrationScreen'));
const ProfileScreen = lazy(() => import('./screens/ProfileScreen'));
const CheckoutScreen = lazy(() => import('./screens/CheckoutScreen'));
const OrderSuccessScreen = lazy(() => import('./screens/OrderSuccessScreen'));
const YourOrdersScreen = lazy(() => import('./screens/YourOrdersScreen'));

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
    heading: `'Cormorant Variable', sans-serif`,
    body: `'Manrope Variable', sans-serif`,
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
