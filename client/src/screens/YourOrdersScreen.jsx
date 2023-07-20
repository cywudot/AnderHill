import {
  TableContainer,
  Stack,
  Spinner,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Box,
  Th,
  Table,
  Tbody,
  Tr,
  Td,
  Thead,
  Button,
  ListItem,
  UnorderedList,
  Wrap,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserOrders } from '../redux/actions/userActions';
import { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const YourOrdersScreen = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const { loading, error, orders, userInfo } = user;
  const location = useLocation();

  useEffect(() => {
    if (userInfo) {
      dispatch(getUserOrders());
    }
  }, []);

  return userInfo ? (
    <Box justify='center' w='full'>
      {loading ? (
        <Wrap justify='center' direction='column' mt='20px' minH='100vh'>
          <Stack direction='row' spacing={4}>
            <Spinner
              mt={20}
              thickness='2px'
              speed='0.65s'
              emptyColor='gray.200'
              color='brand.400'
              size='xl'
              mx='auto'
            />
          </Stack>
        </Wrap>
      ) : error ? (
        <Alert status='error'>
          <AlertIcon />
          <AlertTitle>We are sorry!</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      ) : (
        orders && (
          <Box color='brand.500' pt={4} className='orders'>
            <TableContainer color='brand.500' pt={4} overflowY={{ base: 'scroll', lg: 'unset' }}>
              <Table variant='simple'>
                <Thead>
                  <Tr>
                    <Th fontSize='lg'>Order Id</Th>
                    <Th fontSize='lg'>Order Date</Th>
                    <Th fontSize='lg'>Paid Total</Th>
                    <Th fontSize='lg'>Items</Th>
                    <Th fontSize='lg'>Print Receipt</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {orders.map((order, index) => (
                    <Tr key={order._id} bg={index % 2 ? 'brand.300' : 'brand.100'}>
                      <Td>{order._id}</Td>
                      <Td>{new Date(order.createdAt).toDateString()}</Td>
                      <Td>
                        ${order.totalPrice} via {order.paymentMethod}
                      </Td>
                      <Td>
                        {order.orderItems.map((item) => (
                          <UnorderedList key={item._id}>
                            <ListItem>
                              {item.qty} X {item.name} (${item.price} each)
                            </ListItem>
                          </UnorderedList>
                        ))}
                      </Td>
                      <Td>
                        <Button
                          rounded='sm'
                          variant='outline'
                          borderColor='brand.500'
                          _hover={{ backgroundColor: 'none' }}
                        >
                          Receipt
                        </Button>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
        )
      )}
    </Box>
  ) : (
    <Navigate to='/login' replace={true} state={{ from: location }} />
  );
};

export default YourOrdersScreen;
