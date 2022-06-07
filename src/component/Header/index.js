import React from 'react';
import { Flex, HStack, Button } from '@chakra-ui/react';
import { CSVLink } from 'react-csv';

const ColorModeSwitcher = React.lazy(() => import('../ColorModeSwitcher'));

const Header = ({ data, isDark }) => {
  return (
    <Flex justifyContent="flex-end" mb={{ base: '2' }} p="4">
      <HStack>
        <ColorModeSwitcher justifySelf="flex-end" />
        <CSVLink data={data} filename="Query_Result.csv">
          <Button
            _hover={{
              backgroundColor: isDark === 'dark' ? '#000' : '#fff',
              color: isDark === 'dark' ? '#fff' : '#000',
            }}
            borderWidth="1px"
            borderColor="#000"
            shadow="md"
          >
            Export CSV
          </Button>
        </CSVLink>
      </HStack>
    </Flex>
  );
};

export default Header;
