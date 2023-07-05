import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Field, useField } from 'formik';

const TextField = ({ label, type, name, placeholder }) => {
  const [field, meta] = useField({ type, name, placeholder });
  return (
    // gives error and touched state to show the error message when the input is invalid and blurred.
    <FormControl isInvalid={meta.error && meta.touched} mb='6'>
      <FormLabel noOfLines={1} color='brand.500'>
        {label}
      </FormLabel>
      <Field as={Input} {...field} type={type} name={name} placeholder={placeholder} color='brand.500' />
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};
export default TextField;
