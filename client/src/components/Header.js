import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import Typed from "react-typed";
import avatar from "../assets/temmie.png";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

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
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
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
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
export default Header;
