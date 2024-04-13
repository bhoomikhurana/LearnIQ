import { Grid, Box, Heading, VStack, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import introVideo from '../../assets/videos/intro2.mp4';
const CoursePage = () => {
  const [lectureNumber, setLectureNumber] = useState(0);
  const lectures = [
    {
      id: 1,
      title: 'xwc1',
      description: 'cecdc',
      video: {
        url: 'cecacc',
      },
    },
    {
      id: 1,
      title: 'xwc2',
      description: 'cecdc',
      video: {
        url: 'cecacc',
      },
    },
    {
      id: 1,
      title: 'xwc3',
      description: 'cecdc',
      video: {
        url: 'cecacc',
      },
    },
  ];
  return (
    <Grid minHeight={'98vh'} templateColumns={['1fr', '3fr 1fr']}>
      <Box>
        <video
          width={'100%'}
          controls
          controlsList="nodownload noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
          src={introVideo}
        ></video>
        <Heading m={4}>{`#${lectureNumber + 1} ${
          lectures[lectureNumber].title
        }`}</Heading>
        <Heading m={4}>Description</Heading>
        <Text m={4}>{lectures[lectureNumber].description}</Text>
      </Box>
      <VStack>
        {lectures.map((item, index) => (
          <button
            key={item._id}
            onClick={() => setLectureNumber(index)}
            on
            style={{
              width: '100%',
              padding: '1rem',
              textAlign: 'center',
              margin: 0,
              borderBottom: '1px solid rgba(0,0,0,0.2)',
            }}
          >
            <Text noOfLines={1}>
              #{index + 1} {item.title}
            </Text>
          </button>
        ))}
      </VStack>
    </Grid>
  );
};

export default CoursePage;
