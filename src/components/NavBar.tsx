import logo from "../assets/game_node.png";
import { Flex, Image } from "@chakra-ui/react";
import { ColorModeButton, useColorModeValue } from "./ui/color-mode";
import SearchInput from "./SearchInput";

interface NavBarProps {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: NavBarProps) => {
  const logoFilter = useColorModeValue("none", "invert(1)");

  return (
    <Flex justify="space-between" align="center" padding={10} gap={4}>
      <Image
        src={logo}
        boxSize="60px"
        filter={logoFilter}
        transition="filter 0.2s"
      />
      <SearchInput onSearch={onSearch} />
      <ColorModeButton />
    </Flex>
  );
};

export default NavBar;
