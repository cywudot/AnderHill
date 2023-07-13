import {
  Box,
  Button,
  Heading,
  Stack,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Flex,
  Card,
  CardHeader,
  CardBody,
  StackDivider,
  useToast,
} from '@chakra-ui/react';
import TextField from '../components/TextField';
import PasswordTextField from '../components/PasswordTextField';
import { useEffect } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile, resetUpdateSuccess } from '../redux/actions/userActions';
import { useLocation } from 'react-router';
import { Navigate } from 'react-router-dom';

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const { userInfo, error, loading, updateSuccess } = user;
  const location = useLocation();
  const toast = useToast();

  useEffect(() => {
    if (updateSuccess) {
      toast({ description: 'Profile updated.', status: 'success', isCloseable: true });
      dispatch(resetUpdateSuccess());
    }
  }, [dispatch, toast, updateSuccess]);

  return userInfo ? (
    <Formik
      initialValues={{ email: userInfo.email, password: '', name: userInfo.name, confirmPassword: '' }}
      validationSchema={Yup.object({
        name: Yup.string().required('A name is required.'),
        email: Yup.string().email('Invalid email.').required('An email address is required.'),
        password: Yup.string().required('Password is required'),
        confirmPassword: Yup.string()
          .required('Password is required')
          .oneOf([Yup.ref('password'), null], 'Passwords must match.'),
        //YUP checks if passwords matches
      })}
      onSubmit={(values) => {
        dispatch(updateProfile(userInfo._id, values.name, values.email, values.password));
      }}
    >
      {(formik) => (
        <Box
          minH='100vh'
          maxW={{ base: '3xl', lg: '6xl' }}
          mx='auto'
          px={{ base: '4', md: '8', lg: '12' }}
          py={{ base: '6', md: '8', lg: '12' }}
          className='main-content'
        >
          <Stack
            direction={{ base: 'column', lg: 'row' }}
            align={{ lg: 'flex-start' }}
            spacing={{ base: '8', md: '10' }}
            w='full'
          >
            <Stack flex='2' backgroundColor='white' p={5} rounded={2} boxShadow='base' as='section'>
              <Heading
                as='h2'
                fontSize={['2xl', '3xl']}
                fontWeight='extrabold'
                pb={4}
                textTransform='uppercase'
                color='brand.500'
              >
                Profile
              </Heading>
              <Stack spacing='5'>
                <Stack spacing='5' as='form' onSubmit={formik.handleSubmit}>
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
                    <Box>
                      <TextField type='text' name='name' placeholder='First and last name' label='Full name' />
                      <TextField type='text' name='email' placeholder='you@example.com' label='Email' />
                      <PasswordTextField type='password' name='password' placeholder='Your password' label='Password' />
                      <PasswordTextField
                        type='password'
                        name='confirmPassword'
                        placeholder='Confirm your password'
                        label='Password Confirmation'
                      />
                    </Box>
                  </Stack>
                  <Stack spacing='5'>
                    <Button
                      backgroundColor='brand.800'
                      _hover={{ backgroundColor: 'brand.500' }}
                      color='brand.100'
                      size='lg'
                      fontWeight='regular'
                      fontSize='md'
                      isLoading={loading}
                      type='submit'
                      rounded={2}
                    >
                      Update Profile
                    </Button>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>

            <Flex direction='column' flex='1' as='section'>
              <Card boxShadow='base' rounded={2}>
                <CardHeader>
                  <Heading as='h3' color='brand.500' size='md' fontWeight='semibold'>
                    Welcome, {userInfo.name}
                  </Heading>
                </CardHeader>
                <CardBody>
                  <Stack divider={<StackDivider />} spacing='4'>
                    <Box pt='2' fontSize='sm' color='brand.500'>
                      Registered on {new Date(userInfo.createdAt).toDateString()}
                    </Box>
                  </Stack>
                </CardBody>
              </Card>
            </Flex>
          </Stack>
        </Box>
      )}
    </Formik>
  ) : (
    <Navigate to='/login' replace={true} state={{ from: location }} />
  );
};

export default ProfileScreen;
