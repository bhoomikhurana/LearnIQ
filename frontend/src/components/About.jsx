import {
  Avatar,
  Box,
  Button,
  Container,
  HStack,
  Heading,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import introVideo from '../assets/videos/intro2.mp4';
import { RiSecurePaymentFill } from 'react-icons/ri';
import termsAndCondition from '../assets/docs/termsAndCondition.js';
// const Founder = () => {
//   <Stack direction={['column', 'row']} spacing={['4', '16']} padding={'8'}>
//     <VStack>
//       <Avatar size={'lg'} boxSize={['40', '48']} />
//       <Text children="Founder" opacity={0.7} />
//     </VStack>
//     <VStack justifyContent={'center'} alignItems={['center', 'flex-start']}>
//       <Heading children="Bhoomi Khurana" size={['md', 'xl']} />
//       <Text
//         textAlign={['center', 'left']}
//         children="Hi,I am a full stack developer and a Java programmer"
//       />
//     </VStack>
//   </Stack>;
// };
const Founder = () => (
  <Stack direction={['column', 'row']} spacing={['4', '16']} padding={'8'}>
    <VStack>
      <Avatar
        src="https://avatars.githubusercontent.com/u/96761198?s=400&u=abecd9e490e7ab178e8e972a0bda6967b0e7426f&v=4"
        boxSize={['40', '48']}
      />
      <Text children="Founder" opacity={0.7} />
    </VStack>

    <VStack justifyContent={'center'} alignItems={['center', 'flex-start']}>
      <Heading children="Bhoomi Khurana" size={['md', 'xl']} />
      <Text
        textAlign={['center', 'left']}
        children={`Hi, I am a full stack developer and a Java programmer.
      Our mission is to provide quality content at reasonable price.`}
      />
    </VStack>
  </Stack>
);
const VideoPlayer = () => (
  <Box>
    <video
      autoPlay
      loop
      muted
      controls
      controlsList="nodownload nofullscreen noremoteplayback"
      disablePictureInPicture
      disableRemotePlayback
      src={introVideo}
    ></video>
  </Box>
);
const TandC = ({ termsAndCondition }) => (
  <Box>
    <Heading
      size={'md'}
      children="Terms & Condition"
      textAlign={['center', 'left']}
      my="4"
    />

    <Box h="sm" p="4" overflowY={'scroll'}>
      <Text
        fontFamily={'heading'}
        letterSpacing={'widest'}
        textAlign={['center', 'left']}
      >
        {termsAndCondition}
      </Text>
      <Heading
        my="4"
        size={'xs'}
        children="Refund only applicable for cancellation within 7 days."
      />
    </Box>
  </Box>
);
const About = () => {
  return (
    <Container maxW={'container.lg'} padding="16" boxShadow={'lg'}>
      <Heading children="About Us" textAlign={['center', 'left']} />
      <Founder />
      <Stack m="8" direction={['column', 'row']} alignItems="center">
        <Text m="8" textAlign={['center', 'left']}>
          We are a course provider as well as streamer platform with multiple
          courses available only for premium users.
        </Text>

        <Link to="/subscribe">
          <Button variant={'ghost'} colorScheme="yellow">
            Checkout Our Plan
          </Button>
        </Link>
      </Stack>
      <VideoPlayer />
      <HStack>
        <RiSecurePaymentFill />
        <Heading
          my={'4'}
          p={'4'}
          textTransform={'uppercase'}
          size={'xs'}
          fontFamily={'sans-serif'}
          children="Transaction is secured by RazorPay"
        />
      </HStack>
      <TandC termsAndCondition={termsAndCondition} />
    </Container>
  );
};

export default About;
