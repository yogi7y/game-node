import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image_urls";

function GenreList() {
  const { data } = useGenres();
  return (
    <List.Root>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="6px">
          <HStack>
            <Image
              src={getCroppedImageUrl(genre.image_background)}
              boxSize="32px"
              borderRadius={8}
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List.Root>
  );
}

export default GenreList;
