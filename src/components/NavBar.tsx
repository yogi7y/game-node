import logo from "../assets/game_node.png";
import { Flex, HStack, Image, Text } from "@chakra-ui/react";
import { ColorModeButton, useColorModeValue } from "./ui/color-mode";

const NavBar = () => {
  // This hook returns different values based on the current theme
  // In light mode: "none", in dark mode: "invert(1)"
  const logoFilter = useColorModeValue("none", "invert(1)");

  return (
    <Flex justify="space-between" align="center" padding={4}>
      <HStack>
        <Image
          src={logo}
          boxSize="60px"
          filter={logoFilter}
          transition="filter 0.2s"
        />
        <Text fontSize="xl" fontWeight="bold">
          Game Node
        </Text>
      </HStack>

      <ColorModeButton />
    </Flex>
  );
};

export default NavBar;
