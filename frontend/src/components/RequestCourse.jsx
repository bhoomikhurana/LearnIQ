import {
  Box,
  Button,
  Container,
  FormLabel,
  Heading,
  Input,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RequestCourse = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState('');
  return (
    <Container h="92vh">
      <VStack h="full" justifyContent={'center'} spacing="16">
        <Heading children="Request a Course" />
        <form style={{ width: '100%' }}>
          <Box my={'4'}>
            <FormLabel htmlFor="name" children="Name" />
            <Input
              required
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              type="text"
              focusBorderColor="yellow.500"
              placeholder="Abc"
            />
          </Box>
          <Box my={'4'}>
            <FormLabel htmlFor="email" children="Email Address" />
            <Input
              required
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              type="email"
              focusBorderColor="yellow.500"
              placeholder="abc@gmail.com"
            />
          </Box>
          <Box my={'4'}>
            <FormLabel htmlFor="course" children="Course" />
            <Input
              required
              id="course"
              value={course}
              onChange={e => setCourse(e.target.value)}
              type="text"
              focusBorderColor="yellow.500"
              placeholder="Explain your course"
            />
          </Box>

          <Button my={'4'} colorScheme="yellow">
            Send Mail
          </Button>
          <Box>
            See available courses!
            <Link to="/courses">
              <Button colorScheme="yellow" variant="link">
                Click
              </Button>
            </Link>{' '}
            here
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default RequestCourse;
