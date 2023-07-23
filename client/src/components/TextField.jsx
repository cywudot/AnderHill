import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Field, useField } from 'formik';

const TextField = ({ label, type, name, placeholder, showLabel = true }) => {
  const [field, meta] = useField({ type, name, placeholder });
  return (
    // gives error and touched state to show the error message when the input is invalid and blurred.
    <FormControl isInvalid={meta.error && meta.touched} mb='5'>
      {showLabel && ( // Conditionally render the FormLabel
        <FormLabel noOfLines={1} color='brand.500' fontSize={['sm', 'md']}>
          {label}
        </FormLabel>
      )}
      <Field as={Input} {...field} type={type} name={name} placeholder={placeholder} color='brand.500' rounded='1' />
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};
export default TextField;
