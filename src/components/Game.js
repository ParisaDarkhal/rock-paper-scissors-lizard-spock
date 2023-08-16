import React from "react";
import { useState } from "react";
import { Button, Box, Typography, Paper } from "@mui/material";

export default function Game({ userChoice, setUserChoice, optionsArray }) {
  const handleClick = (btnId) => {
    const userChoiceItem = optionsArray[btnId];
    setUserChoice(userChoiceItem);
    console.log("userChoice :>> ", userChoice);
  };
  return (
    <>
      <Box>
        <h1>Rock Paper Scissors Lizard Spock Shoot!</h1>
        <Button
          id="0"
          variant="contained"
          color="secondary"
          style={{ margin: 4 }}
          onClick={handleClick(0)}
        >
          Rock
        </Button>
        <Button
          id="1"
          variant="contained"
          color="primary"
          style={{ margin: 4 }}
          onClick={handleClick(1)}
        >
          Paper
        </Button>
        <Button
          id="2"
          variant="contained"
          color="success"
          style={{ margin: 4 }}
          onClick={handleClick(2)}
        >
          Scissors
        </Button>
        <Button
          id="3"
          variant="contained"
          color="error"
          style={{ margin: 4 }}
          onClick={handleClick(3)}
        >
          Lizard
        </Button>
        <Button
          id="4"
          variant="contained"
          color="warning"
          style={{ margin: 4 }}
          onClick={handleClick(4)}
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
