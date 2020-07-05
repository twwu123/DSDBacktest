import React from "react";
import Navbar from "./navbar";
import Header from "./Header";
import Particles from "react-particles-js";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  particlesCanvas: {
    postiion: "absolute",
    opacity: "0.3",
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <Navbar />
      <Header />
      <Particles
        width={"90%"}
        canvasClassName={classes.particlesCanva}
        params={{
          particles: {
            number: {
              value: 45,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            size: {
              value: 8,
              random: true,
              anim: {
                enable: true,
                speed: 10,
                size_min: 0.1,
                sync: true,
              },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 1,
                color: "cyan",
              },
            },
          },
          opacity: {
            value: 1,
            random: true,
            anime: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
              sync: true,
            },
          },
        }}
      ></Particles>
    </div>
  );
};

export default Home;
