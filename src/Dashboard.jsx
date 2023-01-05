import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

function DashboardContent() {
  return (
    <>
      <Grid container spacing={3} mt={3}>
        {/* Chart */}
        <Grid item xs={6}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 240,
            }}
          >
            <p>chart</p>
          </Paper>
        </Grid>
        {/* Recent Deposits */}
        <Grid item xs={6}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 240,
            }}
          >
            <p>deposits</p>
          </Paper>
        </Grid>
        {/* Recent Orders */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <p>orders</p>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
