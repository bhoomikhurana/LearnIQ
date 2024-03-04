import {
  Stack,
  Heading,
  Input,
  HStack,
  Button,
  Text,
  VStack,
  Image,
  Container,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Course = ({
  views,
  title,
  imageSrc,
  id,
  addToPlaylistHandler,
  creator,
  description,
  lectureCount,
  loading,
}) => {
  return (
    <VStack className="course" alignItems={['center', 'flex-start']}>
      <Image src={imageSrc} boxSize="60" objectFit={'contain'} />
      <Heading
        textAlign={['center', 'left']}
        maxW="200px"
        size={'sm'}
        fontFamily={'sans-serif'}
        noOfLines={3}
        children={title}
      />
      <Text noOfLines={2} children={description} />

      <HStack>
        <Text
          fontWeight={'bold'}
          textTransform="uppercase"
          children={'Creator'}
        />

        <Text
          fontFamily={'body'}
          textTransform="uppercase"
          children={creator}
        />
      </HStack>
      <Heading
        textAlign={'center'}
        size={'xs'}
        textTransform="uppercase"
        children={`Lectures - ${lectureCount}`}
      />
      <Stack direction={['column', 'row']}>
        <Link to={`/course/${id}`}>
          <Button colorScheme="yellow" children="Watch Now" />
        </Link>
        <Button
          variant={'ghost'}
          onClick={addToPlaylistHandler}
          children="Add to playlist"
        />
      </Stack>
    </VStack>
  );
};
const Courses = () => {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');
  const categories = [
    'Web development',
    'Artificial Intelligence',
    'Data Structure & Algorithm',
    'App Development',
    'Data Science',
    'Game development',
  ];
  const addToPlaylistHandler = () => {};
  return (
    <>
      <Container minH={'95vh'} maxW="container.lg" paddingY={'8'}>
        <Heading children="All courses" m={'8'} />
        <Input
          value={keyword}
          onClick={e => setKeyword(e.target.value)}
          placeholder="Search a course"
          type={'text'}
          focusBorderColor="yellow.500"
        />
        <HStack overflowX={'auto'} paddingY="8">
          {categories.map((item, index) => (
            <Button
              key={index}
              onClick={() => {
                setCategory(item);
              }}
              minW={'60'}
            >
              <Text children={item} />
            </Button>
          ))}
        </HStack>
        <Stack
          direction={['column', 'row']}
          flexWrap="wrap"
          justifyContent={['flex-start', 'space-evenly']}
          alignItems={['center', 'flex-start']}
        >
          <Course
            title={'sempal'}
            description={'sem'}
            views={23}
            imageSrc={'sem'}
            id={'sem'}
            creator={'semm'}
            lectureCount={2}
            addToPlaylistHandler={addToPlaylistHandler}
          />
        </Stack>
      </Container>
    </>
  );
};

export default Courses;
