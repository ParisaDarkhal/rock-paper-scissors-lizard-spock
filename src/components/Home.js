import Guide from "./Guide";
import Game from "./Game";
import Stats from "./Stats";
import Options from "./Options";
import * as React from "react";
import { styled } from "@mui/material/styles";
import { Box, Grid, Paper } from "@mui/material";
import { useState, useEffect, useRef } from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const optionsArray = ["rock", "paper", "scissors", "lizard", "spock"];

export default function Home() {
  const [winCounter, setWinCounter] = useState(0);
  const [loseCounter, setLoseCounter] = useState(0);
  const [tieCounter, setTieCounter] = useState(0);
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const computerChoiceRef = useRef(computerChoice);
  const [winner, setwinner] = useState("");

  useEffect(() => {
    if (userChoice === null) {
      return;
    } else {
      const getComputerChoice = () => {
        const computerChoiceIndex = Math.floor(Math.random() * 5);
        const computerChoiceItem = optionsArray[computerChoiceIndex];
        setComputerChoice(computerChoiceItem);
        computerChoiceRef.current = computerChoiceItem;
      };
      getComputerChoice();
      getWinner(userChoice, computerChoiceRef.current);
    }
  }, [userChoice]);

  /////////////////////////
  function getWinner(p1, p2) {
    console.log(p1);
    console.log(p2);
    switch (p1 + p2) {
      case "rockscissors":
      case "rocklizard":
      case "paperrock":
      case "paperspock":
      case "scissorspaper":
      case "scissorslizard":
      case "lizardspock":
      case "lizardpaper":
      case "spockrock":
      case "spockscissors":
        setWinCounter(winCounter + 1);
        setwinner("User Wins! 😊");
        break;
      case "scissorsrock":
      case "lizardrock":
      case "rockpaper":
      case "spockpaper":
      case "paperscissors":
      case "lizardscissors":
      case "spocklizard":
      case "paperlizard":
      case "rockspock":
      case "scissorsspock":
        setLoseCounter(loseCounter + 1);
        setwinner("Computer Wins! 😒");
        break;
      default:
        setTieCounter(tieCounter + 1);
        setwinner("It's a tie! 🪢");
    }
  }

  ////////////////////////////

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
              winner={winner}
            />
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
            <Stats
              winCounter={winCounter}
              loseCounter={loseCounter}
              tieCounter={tieCounter}
            />
          </Item>
          <Item>
            <Options
              setWinCounter={setWinCounter}
              setLoseCounter={setLoseCounter}
              setTieCounter={setTieCounter}
            />
          </Item>
        </Grid>
      </Grid>
      <Box style={{ marginTop: -200 }}>
        <h3>User's Choice: {userChoice}</h3>
        <h3>Computer's Choice: {computerChoice}</h3>
      </Box>
    </Box>
  );
}
