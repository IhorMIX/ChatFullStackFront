import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import WaitingRoom from './components/WaitingRoom';
import { HubConnectionBuilder } from '@microsoft/signalr';

function App() {
  const joinChat = async (userName, chatRoom) => {
    var connection = new HubConnectionBuilder()
    .withUrl("http://localhost:5038/chat")
    .withAutomaticReconnect()
    .build();

    try{
      await connection.start()
      await connection.invoke("JoinChat", {userName, chatRoom})

      console.log(connection);  
    } catch(error) {
      console.log(error);
    }
  }


  return (
    <ChakraProvider>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <WaitingRoom joinChat={joinChat}/>
      </div>
    </ChakraProvider>
  );
}

export default App;
