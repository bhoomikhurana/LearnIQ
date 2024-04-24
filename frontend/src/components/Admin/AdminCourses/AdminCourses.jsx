import {
  Box,
  Button,
  Grid,
  HStack,
  Heading,
  Image,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import Sidebar from '../Sidebar';
import cursor from '../../../assets/images/cursor.png';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import CourseModal from './CourseModal';

const AdminCourses = () => {
  const users = [
    {
      _id: 'dwcvdfvcscf',
      poster: {
        url: 'https://foundr.com/wp-content/uploads/2023/04/How-to-create-an-online-course.jpg.webp',
      },
      title: 'React Course',
      category: 'WEB DEVELOPMENT',
      creator: 'Bhoomi Khurana',
      views: 123,
      numOfVideos: 12,
    },
  ];
  const courseDetailsHandler = userId => {
    onOpen();
  };
  const deleteButtonHandler = userId => {
    console.log(userId);
  };
  const { isOpen, onClose, onOpen } = useDisclosure();
  const deleteLectureButtonHandler = (courseId, lectureId) => {
    console.log(courseId);
    console.log(lectureId);
  };
  const addLectureHandler = (e, courseId, title, description) => {
    e.preventDefault();
  };
  return (
    <Grid
      css={{ cursor: `url(${cursor}),default` }}
      minH={'100vh'}
      templateColumns={['1fr', '5fr 1fr']}
    >
      <Box p={['0', '8']} overflowX="auto">
        <Heading
          textTransform={'uppercase'}
          children="All Courses"
          my="16"
          textAlign={['center', 'left']}
        />
        <TableContainer w={['100vw', 'full']}>
          <Table variant={'simple'} size="lg">
            <TableCaption>All available courses in the database</TableCaption>
            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Poster</Th>
                <Th>Title</Th>
                <Th>Category</Th>
                <Th>Creator</Th>
                <Th isNumeric>Views</Th>
                <Th isNumeric>Lectures</Th>
                <Th isNumeric>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {users &&
                users.map(item => (
                  <Row
                    courseDetailsHandler={courseDetailsHandler}
                    deleteButtonHandler={deleteButtonHandler}
                    item={item}
                    key={item._id}
                  />
                ))}
            </Tbody>
          </Table>
        </TableContainer>
        <CourseModal
          isOpen={isOpen}
          onClose={onClose}
          id="dcefvefvcs"
          deleteButtonHandler={deleteLectureButtonHandler}
          courseTitle="React Course"
          addLectureHandler={addLectureHandler}
        />
      </Box>
      <Sidebar />
    </Grid>
  );
};

export default AdminCourses;

function Row({ item, courseDetailsHandler, deleteButtonHandler }) {
  return (
    <Tr>
      <Td>#{item._id}</Td>
      <Td>
        <Image src={item.poster.url} />
      </Td>
      <Td>{item.title}</Td>
      <Td>{item.category}</Td>
      <Td>{item.creator}</Td>
      <Td isNumeric>{item.views}</Td>
      <Td isNumeric>{item.numOfVideos}</Td>
      <Td isNumeric>
        <HStack justifyContent={'flex-end'}>
          <Button
            onClick={() => courseDetailsHandler(item._id)}
            variant={'outline'}
            color={'purple.500'}
          >
            View Lectures
          </Button>
          <Button
            onClick={() => deleteButtonHandler(item._id)}
            color={'purple.500'}
          >
            <RiDeleteBin7Fill />
          </Button>
        </HStack>
      </Td>
    </Tr>
  );
}
