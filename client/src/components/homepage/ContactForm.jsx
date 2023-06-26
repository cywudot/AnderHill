import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Heading,
  Stack,
  Textarea,
  Text,
  Container,
  Image,
  useBreakpointValue,
  useToast,
} from '@chakra-ui/react';
import React from 'react';
import TextField from '../TextField';
import QuotesImage from '../../otherassets/about-us-barnimages-02.jpg';
import { Formik } from 'formik';
import * as Yup from 'yup';

const ContactForm = () => {
  const boxBR = useBreakpointValue({ base: 'transparent', md: 'bg-surface' });
  const toast = useToast();

  return (
    <Formik
      initialValues={{ name: '', email: '', message: '' }}
      validationSchema={Yup.object({
        //defining email and password validation requirements
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email.').required('An email address is required.'),
        message: Yup.string()
          .min(6, 'Your message is too short - much contain at least 10 character.')
          .required('Message is required'),
      })}
      onSubmit={(values, actions) => {
        actions.resetForm();
        toast({ description: 'Message Submitted', status: 'success', isClosable: true });
      }}
    >
      {(formik) => (
        <Container maxW='7xl' px={{ base: '2', md: '4' }} pb={6}>
          <Flex
            bg={{ boxBR }}
            boxShadow='sm'
            display='flex'
            direction='row'
            w='100%'
            gap={3}
            backgroundColor='white'
            rounded={2}
          >
            <Stack
              spacing='5'
              as='form'
              onSubmit={formik.handleSubmit}
              width={{ base: 'full', md: '50%' }}
              py={{ base: '3', sm: '6' }}
              px={{ base: '3', sm: '6' }}

              // backgroundColor='brand.600'
            >
              <Stack spacing='0'>
                <Stack spacing='6'>
                  <Stack spacing={{ base: '2', md: '3' }} textAlign='center'>
                    <Heading size={{ base: 'md', md: 'lg' }} fontFamily='body' color='brand.500'>
                      Get in touch
                    </Heading>
                    <Text color='brand.500'>We are here for you! How can we help?</Text>
                  </Stack>
                </Stack>
                <FormControl>
                  <TextField type='text' name='name' placeholder='Your name' label='Name' />
                </FormControl>
                <FormControl>
                  <TextField type='text' name='email' placeholder='you@example.com' label='Email' />
                </FormControl>
                <FormControl isInvalid={formik.touched.message && formik.errors.message}>
                  <FormLabel htmlFor='message'>Message</FormLabel>
                  <Textarea
                    type='text'
                    name='message'
                    placeholder='Your message'
                    resize='none'
                    rows={4}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.message}
                  />
                  <FormErrorMessage>{formik.errors.message}</FormErrorMessage>
                </FormControl>
              </Stack>
              <Stack spacing='5'>
                <Button
                  backgroundColor='brand.300'
                  color='brand.100'
                  _hover={{ backgroundColor: 'brand.3001' }}
                  size='lg'
                  fontSize='md'
                  type='submit'
                  rounded={2}
                >
                  Submit
                </Button>
              </Stack>
            </Stack>
            <Stack w='50%' display={{ base: 'none', md: 'block' }}>
              <Box mx='auto' my='auto' rounded='2px' overflow='hidden' width='100%' height='full'>
                <Image
                  w='full'
                  h='full'
                  fit='cover'
                  rounded={2}
                  objectPosition='center'
                  src={QuotesImage}
                  alt='work studio'
                />
              </Box>
            </Stack>
          </Flex>
        </Container>
      )}
    </Formik>
  );
};

export default ContactForm;
