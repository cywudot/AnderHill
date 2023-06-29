import { Formik, Form, Field } from 'formik';
import { FormControl, FormErrorMessage, Button, Input, HStack, Box, Text } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/toast';

const FooterTest = () => {
  const toast = useToast();

  function validateName(value) {
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return undefined;
    } else if (!value) {
      return 'Please enter an email';
    } else {
      return 'Please enter a valid email';
    }
  }

  const handleSubmit = (values, actions) => {
    actions.setSubmitting(true);

    setTimeout(() => {
      toast({ description: 'Subscribed', status: 'success', isClosable: true });
      actions.setSubmitting(false);
    }, 500);
    actions.resetForm();
  };

  return (
    <Formik initialValues={{ email: '' }} onSubmit={handleSubmit}>
      {(props) => (
        <Form>
          <HStack>
            <Field name='email' validate={validateName}>
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.email && form.touched.email} h='25px'>
                  <Input
                    {...field}
                    placeholder='Your email'
                    label='email'
                    variant='flushed'
                    borderColor='brand.100'
                    focusBorderColor='brand.800'
                    color='brand.100'
                    _placeholder={{ color: 'brand.800' }}
                    size='sm'
                  />
                  <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                  <Box>
                    <Text color='brand.750' fontSize='sm' pt={1}>
                      Subscribe to our newsletter
                    </Text>
                  </Box>
                </FormControl>
              )}
            </Field>
            <Button
              mt={4}
              p={5}
              backgroundColor='brand.100'
              variant='primary'
              size='sm'
              color='brand.500'
              isLoading={props.isSubmitting}
              type='submit'
              rounded={2}
            >
              Subscribe
            </Button>
          </HStack>
        </Form>
      )}
    </Formik>
  );
};

export default FooterTest;
