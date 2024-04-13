import {
  Button,
  Container,
  Heading,
  VStack,
  Input,
} from '@chakra-ui/react';
import React, { useState } from 'react';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  return (
    <>
      <Container py={'16'} h="90vh">
        <form>
          <Heading
            my="16"
            textTransform={'uppercase'}
            textAlign={['center', 'left']}
            children="Forget Password"
          />
          <VStack spacing={'8'}>
            <Input
              required
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              type="email"
              focusBorderColor="yellow.500"
              placeholder="abc@gmail.com"
            />

            <Button type="submit" w={'full'} colorScheme="yellow">
              Send reset link
            </Button>
          </VStack>
        </form>
      </Container>
    </>
  );
};

export default ForgetPassword;
