import React, { useState } from 'react';
import WaitingRoom from './components/WaitingRoom';
import Chat from './components/Chat';
import { HubConnectionBuilder } from '@microsoft/signalr';

function App() {
  const [connection, setConnection] = useState(null);
  const [chatRoom, setChatRoom] = useState("");
  const [messages, setMessages] = useState([]);

  const joinChat = async (userName, chatRoom) => {
    var connection = new HubConnectionBuilder()
      .withUrl("http://localhost:5038/chat")
      .withAutomaticReconnect()
      .build();
    
    connection.on("ReceiveMessage", (userName, message) => {
      setMessages((messages)=> [...messages, {userName, message}]);
    });

    try{
      await connection.start()
      await connection.invoke("JoinChat", {userName, chatRoom})

      setConnection(connection);
      setChatRoom(chatRoom);
    } catch(error) {
      console.log(error);
    }
  }

  const sendMessage = (message) => {
    connection.invoke("SendMessage", message)
  }

  const closeChat = async () => {
    await connection.stop();
    setConnection(null);
  }

  return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        {connection ? <Chat messages={messages} chatRoom={chatRoom} sendMessage={sendMessage} closeChat={closeChat}/> : <WaitingRoom joinChat={joinChat}/>}
      </div>
  );
}
export default App;
