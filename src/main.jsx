import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Layout from "./Layout";
import Dashboard from "./Dashboard";
import ErrorPage from "./ErrorPage";

import "./index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import ColorModeProvider from "./ColorModeContext";
import { createTheme, ThemeProvider } from "@mui/material";
import { grey } from "@mui/material/colors";
import { enableLegendStateReact } from "@legendapp/state/react";

import AppRemoteA from "./AppRemoteA";
import AppRemoteB from "./AppRemoteB";
import GlobalStateProvider from "host_app/GlobalStateProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <App />,
          },
          {
            path: "/module/a",
            element: <AppRemoteA />,
          },
          {
            path: "/module/b",
            element: <AppRemoteB />,
          },
          {
            path: "/module/c",
            element: <p>Module C</p>,
          },
        ],
      },
    ],
  },
]);

const createOwnTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      background: {
        paper: mode === "light" ? "#fff" : grey[800],
      },
    },
  });

enableLegendStateReact();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ColorModeProvider>
      {({ mode }) => {
        return (
          <ThemeProvider theme={createOwnTheme(mode)}>
            <GlobalStateProvider>
              <RouterProvider router={router} />
            </GlobalStateProvider>
          </ThemeProvider>
        );
      }}
    </ColorModeProvider>
  </React.StrictMode>
);
