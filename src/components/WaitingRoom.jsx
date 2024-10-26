import { Button, Heading, Input, Text } from "@chakra-ui/react";

export const WaitingRoom = () => {
  return (
    <form className="max-w-sm w-full bg-white p-8 rounded shadow-lg">
      <Heading>Online</Heading>
      <div className="mb-4">
        <Text fontSize={"sm"}>User Name</Text>
        <Input name="userName" placeholder="Input your name" />
      </div>
      <div className="mb-4">
        <Text fontSize={"sm"}>Chat Name</Text>
        <Input name="charRoom" placeholder="Input chat name" />
      </div>
      <Button type="submit" colorScheme="blue">
        Join
      </Button>
    </form>
  );
};

export default WaitingRoom;