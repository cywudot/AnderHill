import Navbar from './components/Navbar';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductsScreens from './screens/ProductsScreens';
import '@fontsource/cormorant-garamond';
import '@fontsource/poppins';
// import theme from './theme.js';

const theme = extendTheme({
  colors: {
    brand: {
      100: '#FCFAF7',
      200: '#EBE7E0',
      300: '#BFB5A6',
      400: '#DFBD8E',
      500: '#454545',
      600: '#F16161',
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
          </Routes>
        </main>
      </Router>
    </ChakraProvider>
  );
}

export default App;
