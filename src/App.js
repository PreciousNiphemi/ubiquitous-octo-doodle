import React, { useState } from 'react';
import { Flex, theme, useColorMode, ChakraProvider } from '@chakra-ui/react';

import { queryResult } from './utils/queries';
import { getQueryResult } from './utils/getQueryResult';

const Header = React.lazy(() => import('./component/Header'));
const EditorView = React.lazy(() => import('./component/EditorView'));

function App() {
  const isDark = useColorMode();
  const [step, setStep] = useState(0);

  const data = getQueryResult(step, queryResult).map(result => {
    return Object.values(result);
  });

  return (
    <ChakraProvider theme={theme}>
      <Flex
        py="1"
        px="10"
        w="100%"
        minH="100vh"
        flexDir="column"
        overflowX="hidden"
      >
        <Header data={data} isDark={isDark} />
        <Flex width="100%" justifyContent="center">
          <EditorView step={step} setStep={setStep} isDark={isDark} />
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
