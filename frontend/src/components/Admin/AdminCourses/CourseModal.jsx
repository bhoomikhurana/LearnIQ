import {
  Box,
  Button,
  Grid,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { RiDeleteBin7Fill } from 'react-icons/ri';

const CourseModal = ({
  isOpen,
  onClose,
  id,
  deleteButtonHandler,
  addLectureHandler,
  courseTitle,
  lecture = [],
}) => {
  return (
    <Modal isOpen={isOpen} size={'full'}>
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
                <VideoCard
                  title={'React Intro'}
                  description={'This is intro vid'}
                  num={1}
                  lectureId={'dcefvefvcs'}
                  courseId={id}
                  deleteButtonHandler={deleteButtonHandler}
                />
              </Box>
            </Grid>
          </ModalBody>
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
