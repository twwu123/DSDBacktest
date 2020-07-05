import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import Typed from "react-typed";
import avatar from "../assets/temmie.png";

const useStyles = makeStyles((themes) => ({
  avatar: {
    width: themes.spacing(15),
    height: themes.spacing(15),
    margin: themes.spacing(1),
  },
  tite: {
    color: "cyan",
  },
  subtitle: {
    color: "white",
    marginBottom: "3rem",
  },
  typedContainer: {
    position: "absolute",
    top: "35%",
    left: "50%",
    transform: "translate(-50%, 0%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
}));
const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar src={avatar} alt="Tsz Wai" className={classes.avatar}></Avatar>
      </Grid>

      <Typography variant="h3" className={classes.tite}>
        <Typed strings={["DSD"]} typeSpeed={40} />
      </Typography>
      <br />
      <Typography variant="h4" className={classes.subtitle}>
        <Typed
          strings={[
            "Dog Shit Developers?",
            "Duck Sucking Developers?",
            "Downright Stupid Developers?",
            "DTsz S DWaiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
          ]}
          typeSpeed={40}
          back={50}
          loop
        />
      </Typography>
    </Box>
  );
};
export default Header;
