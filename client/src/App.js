import Navbar from './components/Navbar';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductsScreens from './screens/ProductsScreens';
import '@fontsource/cormorant-garamond';
import '@fontsource/poppins';
import CartScreen from './screens/CartScreen';
import ProductScreen from './screens/ProductScreen';
import Footer from './components/Footer';
import LandingScreen from './screens/LandingScreen';
import AboutUs from './screens/AboutUs';
import LoginScreen from './screens/LoginScreen';
import RegistrationScreen from './screens/RegistrationScreen';
import ProfileScreen from './screens/ProfileScreen';
import CheckoutScreen from './screens/CheckoutScreen';
import OrderSuccessScreen from './screens/OrderSuccessScreen';
import YourOrdersScreen from './screens/YourOrdersScreen';
import ScrollToTop from './helpers/ScrollToTop.js';
// import theme from './theme.js';

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
      200: '#EBE7E0',
      300: '#BFB5A6',
      3001: '#989084',
      400: '#DFBD8E',
      4001: '#C4A67C',
      500: '#454545',
      5001: '#343434',
      600: '#F16161',
      700: '#ECE8E8',
      750: '#CCCCCC',
      800: '#84817C',
      // 900: '#5c5a56',
      1000: '#17B169',
      1001: '#128C53',
    },
  },
  fonts: {
    heading: `'Cormorant Garamond', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
  body: {
    background: '#FCFAF7',
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <ScrollToTop />
        <Navbar />
        <main>
          <Routes>
            <Route path='/' element={<LandingScreen />}></Route>
            {/* <Route path='/products' element={<ProductsScreens />}></Route> */}
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
        </main>
        <Footer />
      </Router>
    </ChakraProvider>
  );
}

export default App;
