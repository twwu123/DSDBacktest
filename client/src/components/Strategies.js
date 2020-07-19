import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import { makeStyles } from "@material-ui/core/styles";
import algotrading from "../assets/images/algotrading.jpg";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Table from "@material-ui/core/Table";
import {
  Grid,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  mainContainer: {
    height: "100%",
  },
  card: {
    margin: 17,
    display: "flex",
    flexDirection: "column",
    maxWidth: "20vw",
    minWidth: "300px",
  },
  table: {
    textAlign: "center",
  },
}));
const Strategies = () => {
  const [strategiesData, setStrategiesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [dialogAssets, setDialogAssets] = React.useState("");
  const [dialogStrategy, setDialogStrategy] = React.useState("");
  const [dialogDescription, setDialogDescription] = React.useState("");
  const [dialogParams, setDialogParams] = React.useState({});
  const [dialogReturns, setDialogReturns] = React.useState({});
  const [graphData, setGraphData] = React.useState({});

  const handleClickOpen = (value) => {
    const currentStrategy = strategiesData.filter((x) => x.strategy === value);
    setDialogAssets(currentStrategy[0].assets);
    setDialogDescription(currentStrategy[0].description);
    setDialogParams(currentStrategy[0].params);
    setDialogStrategy(currentStrategy[0].strategy);
    setDialogReturns(currentStrategy[0].returns);
    setDialogOpen(true);
  };

  const handleClose = () => {
    setDialogOpen(false);
  };

  useEffect(() => {
    fetch("http://localhost:5000/all_strats")
      .then((data) => {
        return data.json();
      })
      .then((response) => {
        console.log(response);
        setStrategiesData(response);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);
  const classes = useStyles();

  const options = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "light2", // "light1", "dark1", "dark2"
    title: {
      text: "Bounce Rate by Week of Year",
    },
    axisY: {
      title: "Bounce Rate",
      includeZero: false,
      suffix: "%",
    },
    axisX: {
      title: "Week of Year",
      prefix: "W",
      interval: 2,
    },
    data: [
      {
        type: "line",
        toolTipContent: "Week {x}: {y}%",
        dataPoints: [
          { x: 1, y: 64 },
          { x: 2, y: 61 },
          { x: 3, y: 64 },
          { x: 4, y: 62 },
          { x: 5, y: 64 },
          { x: 6, y: 60 },
          { x: 7, y: 58 },
          { x: 8, y: 59 },
          { x: 9, y: 53 },
          { x: 10, y: 54 },
          { x: 11, y: 61 },
          { x: 12, y: 60 },
          { x: 13, y: 55 },
          { x: 14, y: 60 },
          { x: 15, y: 56 },
          { x: 16, y: 60 },
          { x: 17, y: 59.5 },
          { x: 18, y: 63 },
          { x: 19, y: 58 },
          { x: 20, y: 54 },
          { x: 21, y: 59 },
          { x: 22, y: 64 },
          { x: 23, y: 59 },
        ],
      },
    ],
  };
  return (
    <>
      <Navbar />

      <Grid container className={classes.mainContainer} justify="center">
        {strategiesData.map((strat) => {
          const { strategy, assets, returns, description, params } = strat;
          return (
            <Grid
              item
              xs={12}
              sm={8}
              md={6}
              lg={3}
              component={Card}
              className={classes.card}
              key={strategy}
            >
              <CardMedia
                component="img"
                alt="strategy1"
                height="140"
                image={algotrading}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" align="center">
                  {strategy}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Returns (Graph)
                </Button>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => handleClickOpen(strategy)}
                >
                  Returns (table)
                </Button>

                <Button size="small" color="primary">
                  Strategy parameters
                </Button>
              </CardActions>
            </Grid>
          );
        })}
        <Dialog
          open={dialogOpen}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{dialogStrategy}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Assets: {dialogAssets}
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Year</TableCell>
                    <TableCell>Value</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Object.entries(dialogReturns).map(([k, v]) => {
                    return (
                      <TableRow key={k}>
                        <TableCell>{k}</TableCell>
                        <TableCell>{v}</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </Grid>
    </>
  );
};

export default Strategies;
