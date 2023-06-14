import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  HStack,
  Link,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Link as ReactLink, useNavigate } from 'react-router-dom';

import ReactPlayer from 'react-player';
import Video from '../../otherassets/AnderHillVideo.mp4';
import { ArrowForwardIcon } from '@chakra-ui/icons';

const VideoSection = () => {
  return (
    <Box width='full' h='auto' backgroundColor='brand.100' mb={12} position='relative'>
      {/* <Flex
        direction={{ base: 'column', lg: 'row' }}
        align='center'
        justify='space-between'
        gap={5}
        backgroundColor='brand.200'
      >
        <Box w='40%'>
          <Text fontFamily='heading' fontWeight='bold' fontSize='6xl' color='brand.500'>
            Elevating pottery to unparalleled perfection
          </Text>
        </Box>
        <Box w='40%'>
          <Text fontSize='2xl' color='brand.500'>
            Since 1985, AnderHill has passionately honed the art of pottery, creating exquisite masterpieces that embody
            the perfect harmony of form, function, and timeless beauty.
          </Text>
          <Button variant='none' p={0} color='brand.500'>
            Read More About Us
          </Button>
          <ArrowForwardIcon w={8} h={8} color='brand.500' />
        </Box>
      </Flex> */}
      <Flex py={10} w='auto' justifyContent='center' alignItems='center'>
        <Box mx='auto'>
          <SimpleGrid
            columns={{
              base: 1,
              lg: 2,
            }}
            spacingY={{
              base: 5,
              lg: 32,
            }}
            spacingX={{
              base: 10,
              lg: 24,
            }}
            px={{ base: 5, lg: 0 }}
          >
            <Box textAlign={{ base: 'center', lg: 'left' }}>
              <Heading as='h3' size={{ base: 'xl', md: '2xl' }} color='brand.500'>
                Elevate your home decor with our exceptional selection of pottery
              </Heading>
            </Box>
            <VStack direction='column' flexGrow={1} spacing={5} alignItems='start'>
              <Box textAlign={{ base: 'center', lg: 'left' }}>
                <Text
                  fontSize={{
                    base: 'lg',
                    md: 'xl',
                  }}
                  color='brand.500'
                >
                  Since 1985, AnderHill has passionately honed the art of pottery, creating exquisite masterpieces that
                  embody the perfect harmony of form, function, and timeless beauty.
                </Text>
                <Button
                  p={0}
                  variant='none'
                  // _hover={{ backgroundColor: 'brand.3001' }}
                  as={ReactLink}
                  to='/aboutus'
                  w={{
                    base: 'full',
                    sm: 'auto',
                  }}
                  color='brand.500'
                  fontSize={{
                    base: 'sm',
                    md: 'md',
                  }}
                >
                  Read More About Us
                </Button>
                <ArrowForwardIcon w={5} h={5} ml={2} color='brand.500' />
              </Box>
            </VStack>
          </SimpleGrid>
        </Box>
      </Flex>
      <ReactPlayer url={Video} playing={true} loop={true} muted={true} volume={0} width='100%' height='lg' />
    </Box>
  );
};

export default VideoSection;
