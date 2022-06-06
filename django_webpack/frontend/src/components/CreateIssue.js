import { Container, Typography } from "@mui/material";
import React from "react";

export default function CreateIssue() {
  return (
    <Container sx={{ marginLeft: 30, marginTop: 8 }}>
      <Typography
        align="left"
        variant="h2"
        // component="h6"
        // sx={{ marginLeft: 30, marginTop: 8, maxWidth: 200 }}
      >
        This Is The Create page
      </Typography>
    </Container>
  );
}
