import { Card, Skeleton } from "@chakra-ui/react";

function GameCardSkeleton() {
  return (
    <Card.Root width="300px" borderRadius="12px" overflow="hidden">
      <Skeleton height="200px" />
      <Card.Body>
        <Skeleton height="20px" width="100%" />
        <Skeleton height="20px" width="100%" />
      </Card.Body>
    </Card.Root>
  );
}

export default GameCardSkeleton;
