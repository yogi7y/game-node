import { Button, Menu, Portal, Spinner } from "@chakra-ui/react";
import usePlatforms from "../hooks/usePlatforms";

function PlatformSelector() {
  const { data, isLoading, error } = usePlatforms();

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline">Platforms</Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {data.map((platform) => (
              <Menu.Item key={platform.id} value={platform.id.toString()}>
                {platform.name}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
}

export default PlatformSelector;
