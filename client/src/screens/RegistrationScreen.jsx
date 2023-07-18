import {
  Box,
  Button,
  Container,
  FormControl,
  Heading,
  HStack,
  Stack,
  Text,
  useBreakpointValue,
  AlertIcon,
  AlertTitle,
  Alert,
  AlertDescription,
  useToast,
} from '@chakra-ui/react';

import TextField from '../components/TextField';
import PasswordTextField from '../components/PasswordTextField';
import { useEffect } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link as ReactLink } from 'react-router-dom';
import { register } from '../redux/actions/userActions';

const RegistrationScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const { loading, error, userInfo } = user;
  const redirect = '/products';
  const toast = useToast();
  const headingBR = useBreakpointValue({ base: 'xs', md: 'sm' });

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
      toast({ description: 'Account created. Welcome aboard.', status: 'success', isClosable: true });
    }
  }, [userInfo, redirect, error, navigate, toast]);

  return (
    <Formik
      initialValues={{ email: '', password: '', name: '' }}
      validationSchema={Yup.object({
        name: Yup.string().required('A name is required.'),
        email: Yup.string().email('Invalid email.').required('An email address is required.'),
        password: Yup.string()
          .min(1, 'Password is too short - much contain at least 1 character.')
          .required('Password is required'),
        confirmPassword: Yup.string()
          .min(1, 'Password is too short - much contain at least 1 character.')
          .required('Password is required')
          .oneOf([Yup.ref('password'), null], 'Passwords must match.'),
        //YUP checks if passwords matches
      })}
      onSubmit={(values) => {
        dispatch(register(values.name, values.email, values.password));
      }}
    >
      {(formik) => (
        <Container maxW='lg' py={{ base: '12', md: '24' }} px={{ base: '0', md: '8' }} minH='4xl'>
          <Stack spacing='8'>
            <Stack spacing='6'>
              <Stack spacing={{ base: '2', md: '3' }} textAlign='center'>
                <Heading size={{ headingBR }} fontFamily='body' color='brand.500'>
                  Create an account
                </Heading>
                <HStack spacing='1' justify='center' gap={1}>
                  <Text color='brand.5001'>Already a user?</Text>
                  <Button as={ReactLink} to='/login' variant='link' color='brand.4001'>
                    Sign in
                  </Button>
                </HStack>
              </Stack>
            </Stack>
            <Box
              py={{ base: '0', sm: '8' }}
              px={{ base: '4', sm: '10' }}
              boxShadow={{ base: 'none', md: 'xl' }}
              backgroundColor='white'
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
                    <TextField type='text' name='name' placeholder='Your first and last name' label='Full name' />
                    <TextField type='text' name='email' placeholder='you@example.com' label='Email' />
                    <PasswordTextField type='password' name='password' placeholder='your password' label='Password' />
                    <PasswordTextField
                      type='password'
                      name='confirmPassword'
                      placeholder='Confirm your password'
                      label='Confirm your password'
                    />
                  </FormControl>
                </Stack>
                <Stack spacing='6'>
                  <Button
                    backgroundColor='brand.300'
                    color='brand.100'
                    _hover={{ backgroundColor: 'brand.300' }}
                    size='lg'
                    isLoading={loading}
                    type='submit'
                    fontSize='md'
                    rounded={2}
                  >
                    Sign up
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

export default RegistrationScreen;
