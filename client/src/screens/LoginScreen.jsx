import {
  Button,
  Box,
  Checkbox,
  Container,
  FormControl,
  Heading,
  HStack,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  useToast,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link as ReactLink, useLocation } from 'react-router-dom';
import PasswordTextField from '../components/PasswordTextField';
import TextField from '../components/TextField';
import { login } from '../redux/actions/userActions';

//TODO: refine password length
const LoginScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const redirect = '/products';
  const toast = useToast();

  const user = useSelector((state) => state.user);
  const { loading, error, userInfo } = user;

  const headingBR = useBreakpointValue({ base: 'xs', md: 'sm' });
  const boxBR = useBreakpointValue({ base: 'transparent', md: 'bg-surface' });

  useEffect(() => {
    if (userInfo) {
      //where user came from
      if (location.state?.from) {
        //send user where they want to go
        navigate(location.state.from);
      } else {
        navigate(redirect);
      }
      toast({ description: 'Login successful.', status: 'success', isClosable: true });
    }
  }, [userInfo, redirect, error, navigate, location.state, toast]);

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={Yup.object({
        //defining email and password validation requirements
        email: Yup.string().email('Invalid email.').required('An email address is required.'),
        password: Yup.string()
          .min(1, 'Password is too short - much contain at least 1 character.')
          .required('Password is required'),
      })}
      //once data validated, dispatch login function with the values aka data
      onSubmit={(values) => {
        dispatch(login(values.email, values.password));
      }}
    >
      {(formik) => (
        <Container maxW='lg' py={{ base: '12', md: '24' }} px={{ base: '0', md: '8' }} minH='4xl'>
          <Stack spacing='8'>
            <Stack spacing='6'>
              <Stack spacing={{ base: '2', md: '3' }} textAlign='center'>
                <Heading size={{ headingBR }} fontFamily='body' color='brand.500'>
                  Log in to your account
                </Heading>
                <HStack spacing='1' justify='center' gap={1}>
                  <Text color='brand.5001'>Don't have an account?</Text>
                  <Button as={ReactLink} to='/registration' variant='link' color='brand.4001'>
                    Sign up
                  </Button>
                </HStack>
              </Stack>
            </Stack>
            <Box
              py={{ base: '0', sm: '8' }}
              px={{ base: '4', sm: '10' }}
              bg={{ boxBR }}
              boxShadow={{ base: 'none', md: 'xl' }}
            >
              <Stack spacing='6' as='form' onSubmit={formik.handleSubmit}>
                {error && (
                  <Alert
                    status='error'
                    flexDirection='column'
                    alignItems='center'
                    justifyContent='center'
                    textAlign='center'
                  >
                    <AlertIcon />
                    <AlertTitle>We are sorry!</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}
                <Stack spacing='5'>
                  <FormControl>
                    <TextField type='text' name='email' placeholder='you@example.com' label='Email' />
                    <PasswordTextField type='password' name='password' placeholder='your password' label='Password' />
                  </FormControl>
                </Stack>
                <Stack spacing='6'>
                  <Button
                    backgroundColor='brand.300'
                    color='brand.100'
                    _hover={{ backgroundColor: 'brand.300' }}
                    size='lg'
                    isLoading={loading}
                    fontSize='md'
                    type='submit'
                    rounded={2}
                  >
                    Sign in
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Container>
      )}
    </Formik>
  );
};

export default LoginScreen;
