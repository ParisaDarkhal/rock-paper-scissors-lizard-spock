import React from "react";
import RPSLSimg from "../images/Rock_paper_scissors_lizard_spock.png";
import { Box } from "@mui/material";
export default function Guide() {
  return (
    <Box>
      <h1>How to play</h1>
      <img src={RPSLSimg} alt="Guide Image" style={{ marginTop: 10 }} />

      <iframe
        style={{ marginTop: 20 }}
        width="350"
        height="197"
        src="https://www.youtube.com/embed/x5Q6-wMx-K8"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </Box>
  );
}
