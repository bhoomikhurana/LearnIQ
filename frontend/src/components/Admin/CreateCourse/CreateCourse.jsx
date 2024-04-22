import {
  Box,
  Button,
  Container,
  Grid,
  Heading,
  Image,
  Input,
  Select,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import cursor from '../../../assets/images/cursor.png';
import { fileUploadCss } from '../../Auth/Register';
const CreateCourse = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [creator, setCreator] = useState('');
  const [category, setCategory] = useState('');
  const [imagePrev, setImagePrev] = useState('');
  const [image, setImage] = useState('');
  const changeImageHandler = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };
  const categories = [
    'Web development',
    'Artificial Intelligence',
    'Data Structure & Algorithm',
    'App Development',
    'Data Science',
    'Game development',
  ];
  return (
    <Grid
      css={{ cursor: `url(${cursor}),default` }}
      minH={'100vh'}
      templateColumns={['1fr', '5fr 1fr']}
    >
      <Container py="16">
        <form>
          <Heading
            textTransform={'uppercase'}
            children="Create course"
            my="16"
            textAlign={['center', 'left']}
          />
          <VStack m="auto" spacing={'8'}>
            <Input
              placeholder="Title"
              value={title}
              type="text"
              focusBorderColor="purple.300"
              onChange={e => setTitle(e.target.value)}
            />
            <Input
              placeholder="Description"
              value={description}
              type="text"
              focusBorderColor="purple.300"
              onChange={e => setDescription(e.target.value)}
            />
            <Input
              placeholder="Creator Name"
              value={creator}
              type="text"
              focusBorderColor="purple.300"
              onChange={e => setCreator(e.target.value)}
            />
            <Select
              focusBorderColor="purple.300"
              value={category}
              onChange={e => setCategory(e.target.value)}
            >
              <option value={''}>Category</option>
              {categories.map(item => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </Select>
            <Input
              accept="image/*"
              required
              type="file"
              focusBorderColor="purple.300"
              css={{
                '&::file-selector-button': {
                  ...fileUploadCss,
                  color: 'purple',
                },
              }}
              onChange={changeImageHandler}
            />
            {imagePrev && (
              <Image src={imagePrev} boxSize="64" objectFit={'contain'} />
            )}
            <Button colorScheme="purple" w={'full'} type="submit">
              Create
            </Button>
          </VStack>
        </form>
      </Container>
      <Sidebar />
    </Grid>
  );
};

export default CreateCourse;
