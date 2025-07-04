import { Box } from "@chakra-ui/react";
import React from "react";

interface Props {
  children: React.ReactNode;
}

function GameCardContainer({ children }: Props) {
  return (
    <Box borderRadius="12px" overflow="hidden">
      {children}
    </Box>
  );
}

export default GameCardContainer;
