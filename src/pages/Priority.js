import React from "react";
import { Container, Typography } from "@mui/material";

function Priority() {
  return (
    <Container>
      <Typography variant="h4" sx={{ mt: 3 }}>
        Priority Notifications
      </Typography>

      <Typography sx={{ mt: 2 }}>
        Top important notifications display here.
      </Typography>
    </Container>
  );
}

export default Priority;