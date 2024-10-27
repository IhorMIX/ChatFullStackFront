import { Button, Heading, Input, Text } from "@chakra-ui/react";
import { useState } from "react";

export const WaitingRoom = ({joinChat}) => {
  const [userName, setUserName] = useState();
  const [chatRoom, setChatRoom] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
    joinChat(userName, chatRoom);
  }

  return (
    <form onSubmit={onSubmit} className="max-w-sm w-full bg-white p-8 rounded shadow-lg">
      <Heading>Online</Heading>
      <div className="mb-4">
        <Text fontSize={"sm"}>User Name</Text>
        <Input onChange={(e)=>setUserName(e.target.value)} name="userName" placeholder="Input your name" />
      </div>
      <div className="mb-4">
        <Text fontSize={"sm"}>Chat Name</Text>
        <Input onChange={(e)=>setChatRoom(e.target.value)} name="charRoom" placeholder="Input chat name" />
      </div>
      <Button type="submit" colorScheme="blue">
        Join
      </Button>
    </form>
  );
};

export default WaitingRoom;