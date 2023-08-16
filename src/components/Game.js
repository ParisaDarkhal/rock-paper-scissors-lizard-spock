import React from "react";
import { useState } from "react";
import { Button, Box, Typography, Paper } from "@mui/material";

export default function Game({ userChoice, setUserChoice, optionsArray }) {
  const handleClick = (btnId) => {
    const userChoiceItem = optionsArray[btnId];
    setUserChoice(userChoiceItem);
  };
  return (
    <>
      <Box>
        <h1>Rock Paper Scissors Lizard Spock Shoot!</h1>
        <Button
          variant="contained"
          color="secondary"
          style={{ margin: 4 }}
          onClick={() => handleClick(0)}
        >
          Rock
        </Button>
        <Button
          variant="contained"
          color="primary"
          style={{ margin: 4 }}
          onClick={() => handleClick(1)}
        >
          Paper
        </Button>
        <Button
          variant="contained"
          color="success"
          style={{ margin: 4 }}
          onClick={() => handleClick(2)}
        >
          Scissors
        </Button>
        <Button
          variant="contained"
          color="error"
          style={{ margin: 4 }}
          onClick={() => handleClick(3)}
        >
          Lizard
        </Button>
        <Button
          variant="contained"
          color="warning"
          style={{ margin: 4 }}
          onClick={() => handleClick(4)}
        >
          Spock
        </Button>
        <Box>
          <Typography style={{ margin: 50 }}>Result</Typography>
        </Box>
      </Box>
    </>
  );
}
