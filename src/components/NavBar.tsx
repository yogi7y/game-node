import logo from "../assets/game_node.png";
import { HStack, Image, Text } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <Text color="black">Game Node</Text>
    </HStack>
  );
};

export default NavBar;
