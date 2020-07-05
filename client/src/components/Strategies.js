import React from "react";
import Navbar from "./navbar";
import { makeStyles } from "@material-ui/core/styles";
import algotrading from "../assets/images/algotrading.jpg";

import {
  Box,
  Grid,
  Card,
  CardActionArea,
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
    margin: 16,
    display: "flex",
    flexDirection: "column",
    maxWidth: "20vw",
    minWidth: "300px",
  },
  actions: { display: "flex", justifyContent: "space-between" },
}));
const Strategies = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Grid
        container
        className={classes.mainContainer}
        textJustify="top"
        justify="space-evenly"
      >
        <Grid
          item
          xs={12}
          sm={8}
          md={6}
          lg={3}
          component={Card}
          className={classes.card}
        >
          <CardMedia
            component="img"
            alt="strategy1"
            height="140"
            image={algotrading}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" align="center">
              Name of Strategy ( Index Fund Rebalancing )
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Description of strategy like: (Index funds have defined periods of
              rebalancing to bring their holdings to par with their respective
              benchmark indices. This creates profitable opportunities for
              algorithmic traders, who capitalize on expected trades that offer
              20 to 80 basis points profits depending on the number of stocks in
              the index fund just before index fund rebalancing. Such trades are
              initiated via algorithmic trading systems for timely execution and
              the best prices.)
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              Returns (Graph)
            </Button>
            <Button size="small" color="primary">
              Returns (table)
            </Button>
            <Button size="small" color="primary">
              Strategy parameters
            </Button>
          </CardActions>
        </Grid>
        <Grid
          item
          xs={12}
          sm={8}
          md={6}
          lg={3}
          component={Card}
          className={classes.card}
        >
          <CardMedia
            component="img"
            alt="strategy1"
            height="140"
            image={algotrading}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" align="center">
              strategy 2
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Nisi velit non commodo esse Lorem. Aute laboris sint Lorem
              nostrud.
            </Typography>
          </CardContent>
          <CardActions className={classes.actions}>
            <Button size="small" color="primary">
              Returns (Graph)
            </Button>
            <Button size="small" color="primary">
              Returns (table)
            </Button>
            <Button size="small" color="primary">
              Strategy parameters
            </Button>
          </CardActions>
        </Grid>
        <Grid
          item
          xs={12}
          sm={8}
          md={6}
          lg={3}
          component={Card}
          className={classes.card}
        >
          <CardMedia
            component="img"
            alt="strategy1"
            height="140"
            image={algotrading}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" align="center">
              strategy 3
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Nisi velit non commodo esse Lorem. Aute laboris sint Lorem
              nostrud. Nulla occaecat ex irure sunt ex est eu. Veniam elit ex ex
              duis et enim eu minim. Duis aliqua excepteur sunt dolor dolore est
              laborum cupidatat elit veniam aliquip. Sunt nulla ut ullamco non
              duis ipsum.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              Returns (Graph)
            </Button>
            <Button size="small" color="primary">
              Returns (table)
            </Button>
            <Button size="small" color="primary">
              Strategy parameters
            </Button>
          </CardActions>
        </Grid>
        <Grid
          item
          xs={12}
          sm={8}
          md={6}
          lg={3}
          component={Card}
          className={classes.card}
        >
          <CardMedia
            component="img"
            alt="strategy1"
            height="140"
            image={algotrading}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" align="center">
              strategy 4
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Nisi velit non commodo esse Lorem. Aute laboris sint Lorem
              nostrud. Nulla occaecat ex irure sunt ex est eu. Veniam elit ex ex
              duis et enim eu minim. Duis aliqua excepteur sunt dolor dolore est
              laborum cupidatat elit veniam aliquip. Sunt nulla ut ullamco non
              duis ipsum.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              Returns (Graph)
            </Button>
            <Button size="small" color="primary">
              Returns (table)
            </Button>
            <Button size="small" color="primary">
              Strategy parameters
            </Button>
          </CardActions>
        </Grid>
        <Grid
          item
          xs={12}
          sm={8}
          md={6}
          lg={3}
          component={Card}
          className={classes.card}
        >
          <CardMedia
            component="img"
            alt="strategy1"
            height="140"
            image={algotrading}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" align="center">
              strategy 5
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Nisi velit non commodo esse Lorem. Aute laboris sint Lorem
              nostrud. Nulla occaecat ex irure sunt ex est eu. Veniam elit ex ex
              duis et enim eu minim. Duis aliqua excepteur sunt dolor dolore est
              laborum cupidatat elit veniam aliquip. Sunt nulla ut ullamco non
              duis ipsum.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              Returns (Graph)
            </Button>
            <Button size="small" color="primary">
              Returns (table)
            </Button>
            <Button size="small" color="primary">
              Strategy parameters
            </Button>
          </CardActions>
        </Grid>
        <Grid
          item
          xs={12}
          sm={8}
          md={6}
          lg={3}
          component={Card}
          className={classes.card}
        >
          <CardMedia
            component="img"
            alt="strategy1"
            height="140"
            image={algotrading}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" align="center">
              strategy 6
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Nisi velit non commodo esse Lorem. Aute laboris sint Lorem
              nostrud. Nulla occaecat ex irure sunt ex est eu. Veniam elit ex ex
              duis et enim eu minim. Duis aliqua excepteur sunt dolor dolore est
              laborum cupidatat elit veniam aliquip. Sunt nulla ut ullamco non
              duis ipsum.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              Returns (Graph)
            </Button>
            <Button size="small" color="primary">
              Returns (table)
            </Button>
            <Button size="small" color="primary">
              Strategy parameters
            </Button>
          </CardActions>
        </Grid>
      </Grid>
    </>
  );
};

export default Strategies;
