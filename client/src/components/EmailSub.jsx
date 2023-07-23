import { Button, Flex, Stack, useToast } from '@chakra-ui/react';
import React from 'react';
import TextField from './TextField';
import { Formik } from 'formik';
import * as Yup from 'yup';

const EmailSub = () => {
  const toast = useToast();

  return (
    <Formik
      initialValues={{ email: '' }}
      validationSchema={Yup.object({
        email: Yup.string().email('Invalid email.').required('An email address is required.'),
      })}
      onSubmit={(values, actions) => {
        actions.resetForm();
        toast({ description: 'Message Submitted', status: 'success', isClosable: true });
      }}
    >
      {(formik) => (
        <Flex display='flex' direction='row' gap={3} minH='90px'>
          <Stack direction='row' as='form' onSubmit={formik.handleSubmit} gap={2}>
            <TextField type='text' name='email' placeholder='Your email' id='email' showLabel={false} />
            <Button
              backgroundColor='white'
              color='brand.500'
              _hover={{ backgroundColor: 'brand.3001' }}
              fontSize='sm'
              type='submit'
              rounded={2}
              p={5}
              py='auto'
            >
              Subscribe
            </Button>
          </Stack>
        </Flex>
      )}
    </Formik>
  );
};

export default EmailSub;
