import React from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Box, Container, Toolbar } from "@mui/material";

export default function Dashboard() {
  return (
    <Container sx={{ marginLeft: 30, marginTop: 8 }}>
      <Typography align="center" variant="h3">
        We Want To Help You Code Better
      </Typography>
      <Typography variant="h6">
        We hope that this services allows developers to track and fix their code
        at a convience
      </Typography>

      <Button variant="contained" color="primary" size="large">
        Look at the Issues
      </Button>
    </Container>
  );
}
