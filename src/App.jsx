import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { useState, useContext } from "react";
import { GlobalStateContext } from "host_app/GlobalStateProvider";
import useCountStore from "host_app/store";

function App() {
  const [count, setCount] = useState(0);
  const { globalCount, toggleIncrement, toggleDecrement } =
    useContext(GlobalStateContext);
  const { counter, increaseCounter, decreaseCounter } = useCountStore();

  console.log(counter);

  const handleIncrementFunc = () => {
    setCount((prev) => prev + 1);
    toggleIncrement();
    // increaseCounter();
  };

  const handleDecrementFunc = () => {
    setCount((prev) => prev - 1);
    toggleDecrement();
    // decreaseCounter();
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
            <Box width={1} display="flex" justifyContent="space-around" mb={5}>
              <Box display="flex" flexDirection="column" alignItems="center">
                <Typography component="h3" variant="h3" color="inherit">
                  {globalCount}
                </Typography>
                <Typography variant="subtitle1">useContext</Typography>
              </Box>
              <Box display="flex" flexDirection="column" alignItems="center">
                <Typography component="h3" variant="h3" color="inherit">
                  {count}
                </Typography>
                <Typography variant="subtitle1">Local State</Typography>
              </Box>
              <Box display="flex" flexDirection="column" alignItems="center">
                <Typography component="h3" variant="h3" color="inherit">
                  {0}
                </Typography>
                <Typography variant="subtitle1">Proxy pub/sub</Typography>
              </Box>
            </Box>
            <Box justifyContent={"space-between"}>
              <Button
                variant="contained"
                sx={{ mx: 10 }}
                onClick={handleDecrementFunc}
              >
                -
              </Button>
              <Button
                variant="contained"
                sx={{ mx: 10 }}
                onClick={handleIncrementFunc}
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
