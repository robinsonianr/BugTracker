import { Typography } from "@mui/material";
import { Container } from "@mui/material";
import React from "react";

export default function Issues() {
  return (
    <Container sx={{ marginLeft: 30, marginTop: 8 }}>
      <Typography
        align="left"
        variant="h6"
        // component="h6"
        // sx={{ marginLeft: 30, marginTop: 8, maxWidth: 200 }}
      >
        This Is The Issues
      </Typography>
    </Container>
  );
}
