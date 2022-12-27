import { Typography, Grid } from "@mui/material";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Grid id="error-page">
      <Typography variant="h1">Oops!</Typography>
      <Typography>Sorry, an unexpected error has occurred.</Typography>
      <Typography>
        <Typography variant="info">
          {error.statusText || error.message}
        </Typography>
      </Typography>
    </Grid>
  );
}
