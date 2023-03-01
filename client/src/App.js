import Navbar from './components/Navbar';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import theme from './theme.js';

const colors = {
  brand: {
    100: '#FCFAF7',
    200: '#EBE7E0',
    300: '#BFB5A6',
    400: '#DFBD8E',
    500: '#454545',
  },
};

const fonts = {
  body: 'Poppins',
  heading: 'Cormorant Garamond',
};

const theme = extendTheme({ colors, fonts });

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Navbar />
        <main>{/* <Routes></Routes> */}</main>
      </Router>
    </ChakraProvider>
  );
}

export default App;
