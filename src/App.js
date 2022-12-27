import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ErrorPage from "./ErrorPage";
import TestTheme from "./Intro";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Typography, Grid, CssBaseline } from "@mui/material";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#00092C",
    },
    secondary: {
      main: "#FF5F00",
    },
    error: {
      main: "#B20600",
    },
    third: {
      main: "#B20600",
    },
  },
  typography: {
    fontFamily: '"Press Start 2P", "Arial", "sans-serif"',
  },
});

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Grid id="app-container">
          <CssBaseline />
          <ThemeProvider theme={theme}>
            <img src={logo} className="App-logo" alt="logo" />
            <Typography style={{ color: theme.palette.primary }}>
              Edit <code>src/App.js</code> and save to reload.
            </Typography>
            <Outlet></Outlet>
          </ThemeProvider>
        </Grid>
      ),
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/contacts/:contactId",
          element: <TestTheme></TestTheme>,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
