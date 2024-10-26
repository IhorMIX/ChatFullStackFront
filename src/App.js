import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import WaitingRoom from './components/WaitingRoom';

function App() {
  return (
    <ChakraProvider>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <WaitingRoom/>
      </div>
    </ChakraProvider>
  );
}

export default App;
