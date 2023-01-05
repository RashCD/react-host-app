import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <>
      <Grid container spacing={3} mt={3}>
        <Grid item xs={12}>
          <Paper
            sx={{
              p: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              minHeight: 140,
            }}
          >
            <Typography
              component="h3"
              variant="h3"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1, p: 2 }}
            >
              {count}
            </Typography>
            <Box justifyContent={"space-between"}>
              <Button
                variant="contained"
                sx={{ mx: 3 }}
                onClick={handleDecrement}
              >
                -
              </Button>
              Test
              <Button
                variant="contained"
                sx={{ mx: 3 }}
                onClick={handleIncrement}
              >
                +
              </Button>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper
            sx={{
              p: 4,
              display: "flex",
              flexDirection: "column",
              minHeight: 140,
            }}
          >
            <Typography component="h4" variant="h6">
              Github:
            </Typography>
            <a
              href={"https://github.com/RashCD/react-host-app"}
              target="_blank"
            >
              {"https://github.com/RashCD/react-host-app"}
            </a>
            <Typography component="h4" variant="h6">
              Website Link:
            </Typography>
            <a href={"https://react-host-app.vercel.app/"} target="_blank">
              {"https://react-host-app.vercel.app/"}
            </a>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
