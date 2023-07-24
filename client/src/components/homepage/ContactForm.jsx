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
  Image,
  useBreakpointValue,
  useToast,
} from '@chakra-ui/react';
import React from 'react';
import TextField from '../TextField';
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
        <Flex
          maxW='7xl'
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
            p={{ base: '3', sm: '6' }}
          >
            <Stack spacing='0'>
              <Stack spacing={{ base: '2', md: '3' }} textAlign='center' pb={2}>
                <Heading as='h3' size={{ base: 'md', md: 'lg' }} textTransform='uppercase' color='brand.500'>
                  Get in touch
                </Heading>
                <Text color='brand.500'>We are here for you! How can we help?</Text>
              </Stack>
              <Box>
                <TextField type='text' name='name' placeholder='Your name' id='name' label='Name' />
              </Box>
              <Box>
                <TextField type='text' name='email' placeholder='you@example.com' id='email' label='Email' />
              </Box>
              <FormControl id='message' isInvalid={formik.touched.message && formik.errors.message}>
                <FormLabel color='brand.500'>Message</FormLabel>
                <Textarea
                  type='text'
                  id='message'
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
            <Image
              w='full'
              h='full'
              fit='cover'
              rounded={2}
              objectPosition='center'
              src='https://storage.googleapis.com/anderhillproducts/otherassets/about-us-barnimages-02.jpg'
              alt='work studio'
            />
          </Stack>
        </Flex>
      )}
    </Formik>
  );
};

export default ContactForm;
