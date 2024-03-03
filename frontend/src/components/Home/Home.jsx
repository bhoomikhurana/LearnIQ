import {
  Stack,
  VStack,
  Heading,
  Text,
  Button,
  HStack,
  Box,
  Image,
} from '@chakra-ui/react';
import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import vg from '../../assets/images/logo.png';
import logomain from '../../assets/images/logo-main.png';
import introVideo from '../../assets/videos/intro2.mp4';
import { CgGoogle, CgYoutube } from 'react-icons/cg';
import { SiCoursera, SiUdemy } from 'react-icons/si';
import { DiAws } from 'react-icons/di';
const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <Image className="logomain" src={logomain} />
        <Stack
          direction={['column', 'row']}
          height="100%"
          justifyContent={['center', 'space-between']}
          alignItems="center"
          spacing={['16', '56']}
        >
          <VStack
            width={'full'}
            alignItems={['center', 'flex-end']}
            spacing="8"
          >
            <Heading
              children="LEARN FROM THE EXPERTS"
              size={'2xl'}
              textAlign={['center', 'right']}
              spacing={'4'}
            />
            <Text
              children="Find valuable content at reasonable prices"
              fontSize={'2xl'}
              textAlign={['center', 'left']}
            />
            <Link to="/courses">
              <Button size={'lg'} colorScheme="yellow">
                EXPLORE NOW
              </Button>
            </Link>
          </VStack>
          <Image
            className="vector-graphics"
            boxSize={'md'}
            src={vg}
            objectFit="contain"
          />
        </Stack>
        <Box padding={'2'} bg="blackAlpha.800" width={'100%'}>
          <Heading
            textAlign={'center'}
            fontFamily="body"
            color={'yellow.400'}
            children="OUR PLATFORMS"
          />
          <HStack
            className="brandsbanner"
            justifyContent={'space-evenly'}
            marginTop={'10px'}
          >
            <CgGoogle />
            <CgYoutube />
            <SiCoursera />
            <SiUdemy />
            <DiAws />
          </HStack>
        </Box>
        <div className="container2">
          <video
            // autoPlay
            controls
            controlsList="nodownload nofullscreen noremoteplayback"
            disablePictureInPicture
            disableRemotePlayback
            src={introVideo}
          ></video>
        </div>
      </div>
    </section>
  );
};

export default Home;
