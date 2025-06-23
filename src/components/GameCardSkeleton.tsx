import { Card, Skeleton } from "@chakra-ui/react";
import GameCardContainer from "./GameCardContainer";

function GameCardSkeleton() {
  return (
    <GameCardContainer>
      {" "}
      <Card.Root borderRadius="12px" overflow="hidden">
        <Skeleton height="200px" />
        <Card.Body>
          <Skeleton height="20px" width="100%" />
          <Skeleton height="20px" width="100%" />
        </Card.Body>
      </Card.Root>
    </GameCardContainer>
  );
}

export default GameCardSkeleton;
