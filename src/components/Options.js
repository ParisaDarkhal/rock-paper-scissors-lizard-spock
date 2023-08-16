import { Button, Box, Stack } from "@mui/material";

export default function Options({
  setWinCounter,
  setLoseCounter,
  setTieCounter,
}) {
  const handleReset = () => {
    setWinCounter(0);
    setLoseCounter(0);
    setTieCounter(0);
  };
  return (
    <Box>
      <h1>Options</h1>
      <Stack>
        {/* <Button
          variant="outlined"
          color="success"
          style={{ margin: 10, borderRadius: 10, border: "solid" }}
        >
          Play
        </Button>
        <Button
          variant="outlined"
          color="error"
          style={{ margin: 10, borderRadius: 10, border: "solid" }}
        >
          Quit
        </Button> */}
        <Button
          variant="outlined"
          color="secondary"
          style={{ margin: 10, borderRadius: 10, border: "solid" }}
          onClick={handleReset}
        >
          Reset
        </Button>
      </Stack>
    </Box>
  );
}
