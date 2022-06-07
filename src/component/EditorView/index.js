import React, { useMemo } from 'react';
import { Text, Flex, HStack, Textarea, Stack } from '@chakra-ui/react';
import { ChevronUpIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { constrain } from '../../utils/constant';
import { getQueryResult } from '../../utils/getQueryResult';
import { queries, queryResult } from '../../utils/queries';
import { PageloadTime } from '../../utils/getPageLoadTime';

import Table from '../Table';

const EditorView = ({ step, setStep, isDark }) => {
  const loadTime = (window.onload = PageloadTime);
  const columns = useMemo(
    () => [
      {
        Header: 'Query Result',
        columns: [
          {
            Header: 'First Name',
            accessor: 'firstName',
          },
          {
            Header: 'Last Name',
            accessor: 'lastName',
          },
        ],
      },
    ],
    []
  );

  return (
    <Flex width="100%" flexDir="column" p={{ base: '2', md: '4' }}>
      <Stack spacing={{ base: 2, md: 8 }}>
        <Flex
          minH="200px"
          borderRadius="8px"
          backgroundColor="#fff"
          justifyContent="center"
        >
          <HStack width="100%" alignSelf="center">
            <Textarea
              size="lg"
              isDisabled
              color="blue"
              minH="200px"
              boxShadow="lg"
              whiteSpace="pre-wrap"
              value={queries[step]?.text}
              _placeholder={{
                fontSize: '24px',
                color: isDark === 'dark' ? '#fff' : '#000',
              }}
              placeholder="toggle the cheveron Icon to display different queries"
            />
            <Stack>
              <ChevronUpIcon
                w={6}
                h={6}
                cursor="pointer"
                onClick={() => {
                  if (step === constrain.max) {
                    return;
                  } else {
                    setStep(step + 1);
                  }
                }}
                color={isDark === 'dark' ? '#fff' : '#000'}
              />
              <ChevronDownIcon
                w={6}
                h={6}
                cursor="pointer"
                onClick={() => {
                  if (step === constrain.min) {
                    return;
                  } else {
                    setStep(step - 1);
                  }
                }}
                color={isDark === 'dark' ? '#fff' : '#000'}
              />
            </Stack>
          </HStack>
        </Flex>
        <Flex justifyContent="center">
          <HStack spacing="4">
            <Text fontSize="20px">{`Page Load Time: ${loadTime.call()}s `}</Text>
          </HStack>
        </Flex>
        <Flex flexDir="column" width="100%">
          <Table columns={columns} data={getQueryResult(step, queryResult)} />
        </Flex>
      </Stack>
    </Flex>
  );
};

export default EditorView;
