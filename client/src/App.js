import Navbar from './components/Navbar';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductsScreens from './screens/ProductsScreens';
import '@fontsource/cormorant-garamond';
import '@fontsource/poppins';
import CartScreen from './screens/CartScreen';
import ProductScreen from './screens/ProductScreen';
import Footer from './components/Footer';
// import theme from './theme.js';

const theme = extendTheme({
  colors: {
    brand: {
      100: '#FCFAF7',
      200: '#EBE7E0',
      300: '#BFB5A6',
      400: '#DFBD8E',
      4001: '#C4A67C',
      500: '#454545',
      5001: '#343434',
      600: '#F16161',
      700: '#ECE8E8',
      800: '#84817C',
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
        <Navbar />
        <main>
          <Routes>
            <Route path='/shop' element={<ProductsScreens />}></Route>
            <Route path='/product/:id' element={<ProductScreen />}></Route>
            <Route path='/shoppingcart' element={<CartScreen />}></Route>
          </Routes>
        </main>
        <Footer />
      </Router>
    </ChakraProvider>
  );
}

export default App;
