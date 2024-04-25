import {
  Box,
  Button,
  Grid,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import { fileUploadCss } from '../../Auth/Register';

const CourseModal = ({
  isOpen,
  onClose,
  id,
  deleteButtonHandler,
  addLectureHandler,
  courseTitle,
  lectures = [1, 2, 3, 4, 5, 6, 7, 8],
}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [video, setVideo] = useState('');
  const [videoPrev, setVideoPrev] = useState('');
  const changeVideoHandler = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setVideoPrev(reader.result);
      setVideo(file);
    };
  };
  const handleClose = () => {
    setTitle('');
    setDescription('');
    setVideoPrev('');
    setVideo('');
    onClose();
  };
  return (
    <Modal
      isOpen={isOpen}
      size={'full'}
      onClose={handleClose}
      scrollBehavior="outside"
    >
      <ModalOverlay>
        <ModalContent>
          <ModalHeader>{courseTitle}</ModalHeader>
          <ModalCloseButton />
          <ModalBody p="16">
            <Grid templateColumns={['1fr', '3fr 1fr']}>
              <Box px={['0', '16']}>
                <Box my={'5'}>
                  <Heading>{courseTitle}</Heading>
                  <Heading size={'sm'} opacity={0.4}>{`#${id}`}</Heading>
                </Box>
                <Heading size={'lg'}>Lectures</Heading>
                {lectures.map((item, index) => (
                  <VideoCard
                    key={index}
                    title={'React Intro'}
                    description={'This is intro vid'}
                    num={index + 1}
                    lectureId="defewferfrfe"
                    courseId={id}
                    deleteButtonHandler={deleteButtonHandler}
                  />
                ))}
              </Box>
              <Box>
                <form
                  onSubmit={e => {
                    addLectureHandler(e, id, title, description, video);
                  }}
                >
                  <VStack spacing={'4'}>
                    <Heading
                      textTransform={'uppercase'}
                      size={'md'}
                      children="Add Lecture"
                    />
                    <Input
                      focusBorderColor="purple.300"
                      placeholder="Title"
                      value={title}
                      onChange={e => setTitle(e.target.value)}
                    />
                    <Input
                      focusBorderColor="purple.300"
                      placeholder="Description"
                      value={description}
                      onChange={e => setDescription(e.target.value)}
                    />
                    <Input
                      focusBorderColor="purple.300"
                      type="file"
                      required
                      onChange={changeVideoHandler}
                      accept="video/mp4"
                      placeholder="Choose File"
                      css={{
                        '&::file-selector-button': {
                          ...fileUploadCss,
                          color: 'purple',
                        },
                      }}
                    />
                    {videoPrev && (
                      <video
                        controlsList="nodownload"
                        controls
                        src={videoPrev}
                      ></video>
                    )}
                    <Button colorScheme="purple" w={'full'} type="submit">
                      Upload
                    </Button>
                  </VStack>
                </form>
              </Box>
            </Grid>
          </ModalBody>
          <ModalFooter>
            <Button onClick={handleClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
};

export default CourseModal;
function VideoCard({
  title,
  num,
  description,
  lectureId,
  courseId,
  deleteButtonHandler,
}) {
  return (
    <Stack
      direction={['column', 'row']}
      my={'8'}
      borderRadius={'lg'}
      boxShadow={'0 0 10px rgba(107,70,193,0.5)'}
      justifyContent={['flex-start', 'space-between']}
      p={['4', '8']}
    >
      <Box>
        <Heading children={`#${num} ${title}`} />
        <Text children={description} />
      </Box>
      <Button
        color={'purple.600'}
        onClick={() => deleteButtonHandler(courseId, lectureId)}
      >
        <RiDeleteBin7Fill />
      </Button>
    </Stack>
  );
}
