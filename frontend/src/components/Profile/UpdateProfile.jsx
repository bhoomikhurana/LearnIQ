import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

const UpdateProfile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  return (
    <Container minH={'92vh'} py={'16'} textAlign="center">
      <Heading>Update Profile</Heading>
      <form>
        <VStack py={'16'} spacing={'4'}>
          <Input
            value={name}
            type="text"
            focusBorderColor="yellow.500"
            placeholder="Name"
            onChange={e => setName(e.target.value)}
          />
          <Input
            value={email}
            type="email"
            focusBorderColor="yellow.500"
            placeholder="Email"
            onChange={e => setEmail(e.target.value)}
          />
          <Button w={'full'} colorScheme="yellow" type="submit">
            Update
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default UpdateProfile;
