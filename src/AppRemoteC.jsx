import React from "react";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import WarningIcon from "@mui/icons-material/Warning";
import { red } from "@mui/material/colors";

const AppRemoteC = () => {
  return (
    <Grid container spacing={3} mt={3}>
      <Grid item xs={12}>
        <Paper
          sx={{
            p: 4,
            display: "flex",
            flexDirection: "column",
            minHeight: 140,
            alignItems: "center",
            backgroundColor: red[100],
          }}
        >
          <WarningIcon color="warning.light" sx={{ fontSize: 100 }} />
          <Typography component="h3" variant="h3" sx={{ my: 3 }}>
            Oppps!
          </Typography>
          <Typography variant="subtitle1" sx={{ my: 3 }}>
            It seem there is an error on this page. Please log this error to the
            respective teams
          </Typography>
          <a
            href={"https://xendit.slack.com/archives/C03RS616ZLJ"}
            target="_blank"
          >
            {"#p-admin-dashboard"}
          </a>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default AppRemoteC;
