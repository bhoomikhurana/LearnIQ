import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

const ChangePassword = () => {
  const [newpassword, setNewPassword] = useState('');
  const [oldpassword, setOldPassword] = useState('');
  return (
    <Container minH={'92vh'} py={'16'} textAlign="center">
      <Heading>Change Password</Heading>
      <form>
        <VStack py={'16'} spacing={'4'}>
          <Input
            required
            value={oldpassword}
            type="password"
            focusBorderColor="yellow.500"
            placeholder="Old Password"
            onChange={e => setOldPassword(e.target.value)}
          />
          <Input
            required
            value={newpassword}
            type="password"
            focusBorderColor="yellow.500"
            placeholder="New Password"
            onChange={e => setNewPassword(e.target.value)}
          />
          <Button w={'full'} colorScheme="yellow" type="submit">
            Change
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default ChangePassword;
