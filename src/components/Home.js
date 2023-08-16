import Guide from "./Guide";
import Game from "./Game";
import Stats from "./Stats";
import Options from "./Options";
import * as React from "react";
import { styled } from "@mui/material/styles";
import { Box, Grid, Paper } from "@mui/material";
import { useState, useEffect } from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const optionsArray = ["ROCK", "PAPER", "SCISSORS", "LIZARD", "SPOCK"];

export default function Home() {
  const [winCouner, setWinCouner] = useState(0);
  const [loseCounter, setLoseCounter] = useState(0);
  const [tieCounter, setTieCounter] = useState(0);
  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  console.log(userChoice);

  useEffect(() => {
    const getComputerChoice = () => {
      const computerChoiceIndex = Math.floor(Math.random() * 5);
      const computerChoiceItem = optionsArray[computerChoiceIndex];
      setComputerChoice(computerChoiceItem);
      console.log(computerChoice);
    };
    getComputerChoice();
  }, [userChoice]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Item>
            <Guide />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <Game
              userChoice={userChoice}
              setUserChoice={setUserChoice}
              optionsArray={optionsArray}
            />
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
            <Stats
              winCouner={winCouner}
              loseCounter={loseCounter}
              tieCounter={tieCounter}
            />
          </Item>
          <Item>
            <Options />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
