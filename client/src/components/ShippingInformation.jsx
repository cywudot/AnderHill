import { Box, Heading, VStack, FormControl, Flex, Stack, Text, Radio, RadioGroup, Tooltip } from '@chakra-ui/react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import TextField from './TextField';
import { useDispatch } from 'react-redux';
import { setExpress } from '../redux/actions/cartActions';
import { useState } from 'react';
import { setShippingAddress, setShippingAddressError } from '../redux/actions/orderActions';

const ShippingInformation = () => {
  const dispatch = useDispatch();
  const [formStateChanged, setFormStateChanged] = useState(false);

  const setErrorState = (input, data) => {
    if (!input) {
      dispatch(setShippingAddress(data));
    }
    if ((!formStateChanged && !input) || (formStateChanged && input)) {
      return;
    } else {
      setFormStateChanged(input);
      dispatch(setShippingAddressError(input));
    }
  };

  return (
    <Formik
      initialValues={{ address: '', postalCode: '', city: '', province: '', country: '' }}
      validationSchema={Yup.object({
        address: Yup.string().required('This field is required.').min(2, 'This address is too short'),
        postalCode: Yup.string()
          .required('This field is required.')
          .matches(/^[A-Za-z]\d[A-Za-z] ?\d[A-Za-z]\d$/, 'Invalid postal code')
          .test(
            'maxPostalCodeLength',
            'This postal code is too long.',
            (value) => value && value.replace(/\s/g, '').length <= 6
          ),
        city: Yup.string().required('This field is required.').min(2, 'This city is too short'),
        province: Yup.string().required('This field is required.').min(2, 'This province is too short'),
        country: Yup.string().required('This field is required.').min(2, 'This country is too short'),
      })}
    >
      {(formik) => (
        <VStack as='form' backgroundColor='white' p={5} boxShadow='base'>
          <FormControl
            onChange={
              Object.keys(formik.errors).length === 0 && Object.keys(formik.touched).length >= 2
                ? setErrorState(false, formik.values)
                : setErrorState(true)
            }
          >
            <TextField name='address' placeholder='' label='Street Address' />

            <Flex>
              <Box flex='1' mr='3'>
                <TextField name='postalCode' placeholder='' label='Postal Code' />
              </Box>
              <Box flex='1'>
                <TextField name='city' placeholder='' label='City' />
              </Box>
            </Flex>

            <Flex>
              <Box flex='1' mr='3'>
                <TextField name='province' placeholder='' label='Province' />
              </Box>
              <Box flex='2'>
                <TextField name='country' placeholder='' label='Country' />
              </Box>
            </Flex>
          </FormControl>

          <Box w='100%' pr='5'>
            <Heading fontSize={['lg', 'xl']} fontWeight='extrabold' mb='5' textTransform='uppercase'>
              Shipping Method
            </Heading>
            <RadioGroup
              defaultValue='false'
              onChange={(e) => {
                dispatch(setExpress(e));
              }}
            >
              <Stack direction={{ base: 'column', lg: 'row' }} align={{ lg: 'flex-start' }}>
                <Stack pr='10' flex='1.5'>
                  <Box value='true'>
                    <Radio value='true'>
                      <Text fontWeight='bold' fontSize={['sm', 'md']}>
                        Express $14.99
                      </Text>
                      <Text fontSize={['sm', 'md']}>Dispatched in 24 hours </Text>
                    </Radio>
                  </Box>
                  <Stack spacing='6'>Express</Stack>
                </Stack>
                <Radio value='false'>
                  <Tooltip label='Free Shipping for orders of $300 or more' bg='brand.500' color='brand.100'>
                    <Box>
                      <Text fontWeight='bold' fontSize={['sm', 'md']}>
                        Standard $4.99
                      </Text>
                      <Text fontSize={['sm', 'md']}>Dispatched in 2-3 days</Text>
                    </Box>
                  </Tooltip>
                </Radio>
              </Stack>
            </RadioGroup>
          </Box>
        </VStack>
      )}
    </Formik>
  );
};

export default ShippingInformation;
