import { Grid, GridItem, Show, useBreakpointValue } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav" bg="coral">
        Nav
      </GridItem>
      <Show when={useBreakpointValue({ base: false, lg: true })}>
        <GridItem area="aside" bg="blue.800">
          Aside
        </GridItem>
      </Show>

      <GridItem area="main" bg="green.700">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
