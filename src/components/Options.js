import { Button, Box, Stack } from "@mui/material";

export default function Options() {
  return (
    <Box>
      <h1>Options</h1>
      <Stack>
        <Button variant="contained" color="success" style={{ margin: 10 }}>
          Play
        </Button>
        <Button variant="contained" color="error" style={{ margin: 10 }}>
          Quit
        </Button>
        <Button variant="contained" color="secondary" style={{ margin: 10 }}>
          Reset
        </Button>
      </Stack>
    </Box>
  );
}
