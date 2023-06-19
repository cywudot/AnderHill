import { Box, Button, Flex, Heading, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';
import ReactPlayer from 'react-player';
import Video from '../../otherassets/AnderHillVideo.mp4';
import { ArrowForwardIcon } from '@chakra-ui/icons';

const VideoSection = () => {
  return (
    <Box width='full' h='auto' px={{ base: '0', lg: '12' }} backgroundColor='brand.100' mb={12} position='relative'>
      <Flex pt={{ base: '0', lg: '16' }} pb={16} w='auto' justifyContent='center' alignItems='center'>
        <Box mx='auto' px={{ base: 10, lg: 0 }}>
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
                    base: 'md',
                    md: 'lg',
                  }}
                  color='brand.500'
                >
                  Since 1985, AnderHill has passionately honed the art of pottery, creating exquisite masterpieces that
                  embody the perfect harmony of form, function, and timeless beauty.
                </Text>
                <Button
                  p={0}
                  variant='none'
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
      <ReactPlayer url={Video} playing={true} loop={true} muted={true} volume={0} width='100%' height='auto' />
    </Box>
  );
};

export default VideoSection;
