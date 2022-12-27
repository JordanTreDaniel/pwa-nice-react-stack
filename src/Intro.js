import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
  return {
    secondMain: {
      color: theme.palette.secondary.main,
    },
    box: {
      backgroundColor: theme.palette.primary.main,
    },
  };
});

const TestTheme = () => {
  const classes = useStyles();
  return (
    <Grid container justifyContent="center" className={classes.box}>
      <Typography
        className={classes.secondMain}
        variant="h1"
        textAlign="center"
      >
        Verbocity
      </Typography>
    </Grid>
  );
};

export default TestTheme;
