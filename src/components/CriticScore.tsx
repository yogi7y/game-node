import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

function CriticScore({ score }: Props) {
  return <Badge borderRadius="4px">{score}</Badge>;
}

export default CriticScore;
