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
    background: "#233",
    height: "100%",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    maxWidth: "20vw",
    margin: "3rem auto",
  },
  cardContainer: {
    textAlign: "top",
  },
}));
const Strategies = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Grid container>
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
            <Typography gutterBottom variant="h5">
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
          <CardContent className={classes.cardContainer}>
            <Typography gutterBottom variant="h5" textAlign="top">
              strategy 2
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Nisi velit non commodo esse Lorem. Aute laboris sint Lorem
              nostrud.
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
            <Typography gutterBottom variant="h5">
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
            <Typography gutterBottom variant="h5">
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
            <Typography gutterBottom variant="h5">
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
            <Typography gutterBottom variant="h5">
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

export default Strategies;
/*import React from "react";
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
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: "20vw",
    height: "40vw",
    margin: "3rem",
    margin: "5rem auto",
  },
}));
const Strategies = () => {
  const classes = useStyles();
  return (
    <>
      <Box component="div" className={classes.mainContainer}>
        <Navbar />
        <Grid container justify="center" align="center">
          <Grid item xs={12} sm={8} md={6} lg={3}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="strategy1"
                  height="140"
                  image={algotrading}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Name of Strategy ( Index Fund Rebalancing )
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Description of strategy like: (Index funds have defined
                    periods of rebalancing to bring their holdings to par with
                    their respective benchmark indices. This creates profitable
                    opportunities for algorithmic traders, who capitalize on
                    expected trades that offer 20 to 80 basis points profits
                    depending on the number of stocks in the index fund just
                    before index fund rebalancing. Such trades are initiated via
                    algorithmic trading systems for timely execution and the
                    best prices.)
                  </Typography>
                </CardContent>
              </CardActionArea>
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
            </Card>
          </Grid>
          <Grid item xs={12} sm={8} md={6} lg={3}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="strategy1"
                  height="140"
                  image={algotrading}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    strategy 2
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Nisi velit non commodo esse Lorem. Aute laboris sint Lorem
                    nostrud. Nulla occaecat ex irure sunt ex est eu. Veniam elit
                    ex ex duis et enim eu minim. Duis aliqua excepteur sunt
                    dolor dolore est laborum cupidatat elit veniam aliquip. Sunt
                    nulla ut ullamco non duis ipsum.
                  </Typography>
                </CardContent>
              </CardActionArea>
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
            </Card>
          </Grid>
          <Grid item xs={12} sm={8} md={6} lg={3}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="strategy1"
                  height="140"
                  image={algotrading}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    strategy 3
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Nisi velit non commodo esse Lorem. Aute laboris sint Lorem
                    nostrud. Nulla occaecat ex irure sunt ex est eu. Veniam elit
                    ex ex duis et enim eu minim. Duis aliqua excepteur sunt
                    dolor dolore est laborum cupidatat elit veniam aliquip. Sunt
                    nulla ut ullamco non duis ipsum.
                  </Typography>
                </CardContent>
              </CardActionArea>
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
            </Card>
          </Grid>
          <Grid item xs={12} sm={8} md={6} lg={3}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="strategy1"
                  height="140"
                  image={algotrading}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    strategy 4
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Nisi velit non commodo esse Lorem. Aute laboris sint Lorem
                    nostrud. Nulla occaecat ex irure sunt ex est eu. Veniam elit
                    ex ex duis et enim eu minim. Duis aliqua excepteur sunt
                    dolor dolore est laborum cupidatat elit veniam aliquip. Sunt
                    nulla ut ullamco non duis ipsum.
                  </Typography>
                </CardContent>
              </CardActionArea>
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
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Strategies;


##################

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

 */
