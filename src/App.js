import React from 'react';
import {
  ChakraProvider,
  Flex,
  Button,
  Grid,
  GridItem,
  Text,
  Icon,
  Textarea,
  Box,
  theme,
  useColorMode,
  HStack,
  Stack,
} from '@chakra-ui/react';
import { ChevronUpIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';

function App() {
  const isDark = useColorMode();

  return (
    <ChakraProvider theme={theme}>
      <Flex flexDir="column" w="100%" minH="100vh" p="1" overflowX="hidden">
        <Flex justifyContent="flex-end" mb={{ base: '2' }} p="4">
          <HStack>
            <ColorModeSwitcher justifySelf="flex-end" />
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
          </HStack>
        </Flex>
        {/* <Box minH="500px" width="100%"> */}
        <Grid
          h="lg"
          templateRows="repeat(1, 1fr)"
          templateColumns="repeat(4, 1fr)"
          gap={2}
        >
          <GridItem rowSpan={1} colSpan={1} bg="tomato" />
          <GridItem colSpan={2}>
            <Flex
              p={{ base: '2', md: '4' }}
              justifyContent="center"
              minH="200px"
              width="100%"
              // backgroundColor="red"
            >
              <HStack width="100%">
                <Textarea
                  size="lg"
                  minH="200px"
                  boxShadow="md"
                  isDisabled
                  placeholder="toggle the cheveron Icon to display different queries"
                  _placeholder={{
                    fontSize: '24px',
                    color: isDark === 'dark' ? '#fff' : '#000',
                  }}
                />
                <Stack>
                  <ChevronUpIcon
                    w={6}
                    h={6}
                    cursor="pointer"
                    color={isDark === 'dark' ? '#fff' : '#000'}
                  />
                  <ChevronDownIcon
                    w={6}
                    h={6}
                    cursor="pointer"
                    color={isDark === 'dark' ? '#fff' : '#000'}
                  />
                </Stack>
              </HStack>
            </Flex>
          </GridItem>
          <GridItem rowSpan={1} bg="tomato" display="none" />
        </Grid>
        {/* </Box> */}
      </Flex>
    </ChakraProvider>
  );
}

export default App;
