import type { Game } from "../hooks/useGames";
import { Card, Heading, HStack, Image } from "@chakra-ui/react";
import PlatformIconsList from "./PlatformIconsList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image_urls";
import GameCardContainer from "./GameCardContainer";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <GameCardContainer>
      <Card.Root>
        <Image src={getCroppedImageUrl(game.background_image)} />
        <Card.Body>
          <Heading fontSize="2xl">{game.name}</Heading>
          <HStack justifyContent="space-between" marginBottom={2}>
            <PlatformIconsList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
        </Card.Body>
      </Card.Root>
    </GameCardContainer>
  );
}

export default GameCard;
