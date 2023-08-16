import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
export default function Stats({ winCounter, loseCounter, tieCounter }) {
  return (
    <>
      <h1>Statistics</h1>
      <TableContainer component={Paper}>
        <Table sx={{ wSidth: 250 }} aria-label="simple table">
          <TableBody>
            <TableRow>
              <TableCell>
                <h3>Wins</h3>
              </TableCell>
              <TableCell>{winCounter}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <h3>Loses</h3>
              </TableCell>
              <TableCell>{loseCounter}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <h3>Ties</h3>
              </TableCell>
              <TableCell>{tieCounter}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
