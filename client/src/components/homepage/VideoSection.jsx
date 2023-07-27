import { Box, Button, Heading, SimpleGrid, Text, VStack, useMediaQuery } from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { ArrowForwardIcon } from '@chakra-ui/icons';

const VideoSection = () => {
  const Video = 'https://storage.googleapis.com/anderhillproducts/AnderHillVideoLarge.mp4';

  const [isLargerThan] = useMediaQuery('(min-width: 768px)');

  return (
    <Box
      as='section'
      width='full'
      h='auto'
      px={{ base: '0', lg: '12' }}
      backgroundColor='brand.100'
      pb={{ base: '0', md: '14' }}
      position='relative'
    >
      <SimpleGrid
        pt={{ base: '0', lg: '10' }}
        pb={10}
        columns={{
          base: 1,
          lg: 2,
        }}
        spacingX={{
          base: 10,
          lg: 24,
        }}
        mx={{ base: '4', md: '0' }}
        gap={3}
        px={{ base: '3', lg: '0' }}
      >
        <Box textAlign={{ base: 'center', lg: 'left' }}>
          <Heading as='h3' size={{ base: 'xl', md: '2xl' }} color='brand.500'>
            Enhance your living space with our exquisite ceramic artistry
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
              pb={2}
            >
              Since 1985, AnderHill has passionately honed the art of pottery, creating exquisite masterpieces that
              embody the perfect harmony of form, function, and timeless beauty.
            </Text>

            <Button
              as={ReactLink}
              variant='link'
              to='/aboutus'
              _hover={{ textDecoration: 'none' }}
              fontSize={{
                base: 'sm',
                md: 'md',
              }}
              fontWeight='bold'
              color='brand.500'
            >
              Read More About Us
              <ArrowForwardIcon w={5} h={5} ml={2} color='brand.500' />
            </Button>
          </Box>
        </VStack>
      </SimpleGrid>
      {isLargerThan && (
        <ReactPlayer
          url={Video}
          playing={true}
          loop={true}
          muted={true}
          volume={0}
          width='100%'
          height='auto'
          title='Behind the scenes of creating of pottery vase'
        />
      )}
    </Box>
  );
};

export default VideoSection;
