import { Button, Container, Heading, VStack, Input } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const params = useParams();
  console.log(params.token);
  return (
    <>
      <Container py={'16'} h="90vh">
        <form>
          <Heading
            my="16"
            textTransform={'uppercase'}
            textAlign={['center', 'left']}
            children="Reset Password"
          />
          <VStack spacing={'8'}>
            <Input
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="password"
              focusBorderColor="yellow.500"
              placeholder="New Password"
            />

            <Button type="submit" w={'full'} colorScheme="yellow">
              Reset Password
            </Button>
          </VStack>
        </form>
      </Container>
    </>
  );
};

export default ResetPassword;
