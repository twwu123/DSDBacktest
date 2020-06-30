import React from "react";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import Typed from "react-typed";
import avatar from "../assets/tsz wai.PNG";
const Header = () => {
  return (
    <Box srvc>
      <Avatar src={avatar} alt="Tsz Wai"></Avatar>
      <h1>DSD</h1>
      <Typography variant="h4">
        <Typed
          strings={[
            "Dog Shit Developers?",
            "Duck Sucking Developers?",
            "Downright Stupid Developers?",
            "DTsz S DWaiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
          ]}
          typeSpeed={40}
        />
      </Typography>
    </Box>
  );
};
export default Header;
