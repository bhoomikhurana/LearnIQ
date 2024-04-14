import {
  Avatar,
  Button,
  Container,
  HStack,
  Heading,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { fileUploadCss } from '../Auth/Register';

const Profile = () => {
  const user = {
    name: 'Bhoomi',
    email: 'bhoomi0612@gmail.com',
    createdAt: String(new Date().toISOString()),
    role: 'admin',
    subscription: undefined,
    playlist: [
      {
        course: 'dwed',

        poster:
          'chttps://foundr.com/wp-content/uploads/2023/04/How-to-create-an-online-course.jpg',
      },
    ],
  };
  const removeFromPlaylist = id => {
    console.log(id);
  };
  const changeImageOnSubmitHandler = (e, image) => {
    e.preventDefault();
    console.log(image);
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Container minH={'95vh'} maxW="container.lg" py="8">
      <Heading m="8" textTransform={'uppercase'}>
        Profile
      </Heading>
      <Stack
        justifyContent={'flex-start'}
        direction={['column', 'row']}
        alignItems={'center'}
        spacing={['8', '16']}
        padding="8"
      >
        <VStack>
          <Avatar boxSize={'48'} />
          <Button onClick={onOpen} colorScheme="yellow" variant={'ghost'}>
            Change Photo
          </Button>
        </VStack>
        <VStack spacing={'4'} alignItems={['center', 'flex-start']}>
          <HStack>
            <Text fontWeight={'bold'}>Name</Text>
            <Text>{user.name}</Text>
          </HStack>
          <HStack>
            <Text fontWeight={'bold'}>Email</Text>
            <Text>{user.email}</Text>
          </HStack>
          <HStack>
            <Text fontWeight={'bold'}>CreatedAt</Text>
            <Text>{user.createdAt.split('T')[0]}</Text>
          </HStack>
          <HStack>
            <Text fontWeight={'bold'}>Subscription</Text>
            {user.subscription === 'active' ? (
              <Button color={'yellow.500'}>Cancel subscription</Button>
            ) : (
              <Link to={'/subscribe'}>
                <Button colorScheme="yellow">Subscribe</Button>
              </Link>
            )}
          </HStack>
          <Stack direction={['column', 'row']} alignItems={'center'}>
            <Link to={'/updateprofile'}>
              <Button>Update Profile</Button>
            </Link>
            <Link to={'/changepassword'}>
              <Button>Change Password</Button>
            </Link>
          </Stack>
        </VStack>
      </Stack>
      <Heading size={'md'} my="8">
        Playlist
      </Heading>
      {user.playlist.length > 0 && (
        <Stack
          direction={['column', 'row']}
          alignItems={'center'}
          flexWrap="wrap"
          p="4"
        >
          {user.playlist.map(item => (
            <VStack w={'48'} m="2" key={item.course}>
              <Image objectFit={'contain'} boxSize={'full'} src={item.poster} />
              <HStack>
                <Link to={`/course/${item.course}`}>
                  <Button variant={'ghost'} colorScheme="yellow">
                    Watch Now
                  </Button>
                </Link>
                <Button
                  size={'sm'}
                  onClick={() => removeFromPlaylist(item.course)}
                >
                  <RiDeleteBin7Fill />
                </Button>
              </HStack>
            </VStack>
          ))}
        </Stack>
      )}
      <ChangePhotoBox
        changeImageOnSubmitHandler={changeImageOnSubmitHandler}
        isOpen={isOpen}
        onClose={onClose}
      />
    </Container>
  );
};

export default Profile;
function ChangePhotoBox({ isOpen, onClose, changeImageOnSubmitHandler }) {
  const [image, setImage] = useState('');
  const [imagePrev, setImagePrev] = useState('');
  const changeImage = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };
  const closeHandler = () => {
    onClose();
    setImagePrev('');
    setImage('');
  };
  return (
    <Modal isOpen={isOpen} onClose={closeHandler}>
      <ModalOverlay backdropFilter={'blur(10px)'} />
      <ModalContent>
        <ModalHeader>Change Photo</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={e => changeImageOnSubmitHandler(e, image)}>
            <VStack spacing={'8'}>
              {imagePrev && <Avatar src={imagePrev} boxSize={'4'} />}

              <Input
                type="file"
                css={{ '&::file-selector-button': fileUploadCss }}
                onChange={changeImage}
              />

              <Button w={'full'} variant={'ghost'} type="submit">
                Change
              </Button>
            </VStack>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button mr={'3'} onClose={closeHandler}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
