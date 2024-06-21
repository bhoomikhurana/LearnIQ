import {
  Container,
  FormLabel,
  Heading,
  Input,
  VStack,
  Box,
  Button,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/actions/user';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const submitHandler = e => {
    e.preventDefault();
    dispatch(login(email, password));
  };
  return (
    <>
      <Container h={'95vh'}>
        <VStack h={'full'} justifyContent="center" spacing={'16'}>
          <Heading children="Welcome to LearnIQ" />
          <form onSubmit={submitHandler} style={{ width: '100%' }}>
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
              <FormLabel htmlFor="password" children="Password" />
              <Input
                required
                id="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                type="password"
                focusBorderColor="yellow.500"
                placeholder="Enter your password"
              />
            </Box>
            <Box>
              <Link to="/forgetpassword">
                <Button fontSize={'sm'} variant="link" colorScheme="yellow">
                  Forget Password?
                </Button>
              </Link>
            </Box>
            <Button my={'4'} colorScheme="yellow">
              Login
            </Button>
            <Box>
              New User?
              <Link to="/register">
                <Button colorScheme="yellow" variant="link">
                  Sign Up
                </Button>
              </Link>{' '}
              here
            </Box>
          </form>
        </VStack>
      </Container>
    </>
  );
};

export default Login;
