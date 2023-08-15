import React from "react";
import { Button, Box, Typography, Paper } from "@mui/material";

export default function Game() {
  return (
    <>
      <Box>
        <h1>Rock Paper Scissors Lizard Spock Shoot!</h1>
        <Button variant="contained" color="secondary" style={{ margin: 4 }}>
          Rock
        </Button>
        <Button variant="contained" color="primary" style={{ margin: 4 }}>
          Paper
        </Button>
        <Button variant="contained" color="success" style={{ margin: 4 }}>
          Scissors
        </Button>
        <Button variant="contained" color="error" style={{ margin: 4 }}>
          Lizard
        </Button>
        <Button variant="contained" color="warning" style={{ margin: 4 }}>
          Spock
        </Button>
        <Box>
          <Typography style={{ margin: 50 }}>Result</Typography>
        </Box>
      </Box>
    </>
  );
}
