import {
  Box,
  Grid,
  HStack,
  Heading,
  Progress,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import Sidebar from '../Sidebar';
import cursor from '../../../assets/images/cursor.png';
import { RiArrowDownLine, RiArrowUpLine } from 'react-icons/ri';
import { DoughnutChart, LineChart } from './Chart';
const DataBox = ({ title, qty, qtypercentage, profit }) => (
  <Box
    w={['full', '20%']}
    boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}
    p="8"
    borderRadius={'lg'}
  >
    <Text children={title} />
    <HStack spacing={'6'}>
      <Text fontSize={'2xl'} fontWeight="bold" children={qty} />
      <HStack>
        <Text children={`${qtypercentage}%`} />
        {profit ? (
          <RiArrowUpLine color="green" />
        ) : (
          <RiArrowDownLine color="red" />
        )}
      </HStack>
    </HStack>
    <Text opacity={0.5} children="Since last month" />
  </Box>
);
const Bar = ({ title, value, profit }) => (
  <Box py="4" px={['0', '20']}>
    <Heading size="sm" children={title} mb="2" />
    <HStack w="full" alignItems={'center'}>
      <Text children={profit ? '0%' : `-${value}%`} />
      <Progress w="full" colorScheme="purple" value={profit ? value : 0} />
      <Text children={value > 100 ? `${value}%` : '100%'} />
    </HStack>
  </Box>
);
const Dashboard = () => {
  return (
    <Grid
      css={{ cursor: `url(${cursor}),default` }}
      minH={'100vh'}
      templateColumns={['1fr', '5fr 1fr']}
    >
      <Box boxSizing="border-box" py="16" px={['4', '0']}>
        <Text
          textAlign={'center'}
          opacity={0.5}
          children={`Last change was on ${String(new Date()).split('G')[0]}`}
        />
        <Heading
          ml={['0', '81']}
          mb="16"
          mt={'8'}
          textAlign={['center', 'left']}
          children="Dashboard"
        />
        <Stack
          direction={['column', 'row']}
          minH={'24'}
          justifyContent={'space-evenly'}
        >
          <DataBox
            title={'Views'}
            qty={3352}
            qtypercentage={30}
            profit={true}
          />
          <DataBox title={'Users'} qty={424} qtypercentage={10} profit={true} />
          <DataBox
            title={'Subscription'}
            qty={90}
            qtypercentage={5}
            profit={false}
          />
        </Stack>
        <Box
          m={['0', '16']}
          borderRadius="lg"
          p={['0', '16']}
          mt={['4', '16']}
          boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}
        >
          <Heading
            textAlign={['center', 'left']}
            size="md"
            children="Views Graph"
            pt={['8', '0']}
            ml={['0', '16']}
          />
          <LineChart />
        </Box>
        <Grid templateColumns={['1fr', '2fr 1fr']}>
          <Box p="4">
            <Heading
              textAlign={['center', 'left']}
              size="md"
              children="Progress Bar"
              my="8"
              ml={['0', '16']}
            />
            <Bar title="Views" value={30} profit={true} />
            <Bar title="Users" value={5} profit={true} />
            <Bar title="Subscription" value={0} profit={false} />
          </Box>
          <Box p="4">
            <Heading
              textAlign={['center', 'left']}
              size="md"
              children="Users"
              my="8"
              ml={['0', '16']}
            />
            <DoughnutChart />
          </Box>
        </Grid>
      </Box>
      <Sidebar />
    </Grid>
  );
};

export default Dashboard;
