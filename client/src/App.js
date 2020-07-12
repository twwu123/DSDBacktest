import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Home from "./components";
import CssBaseline from "@material-ui/core/CssBaseline";
import Resume from "./components/Resume";
import Strategies from "./components/Strategies";

function App() {
  return (
    <>
      <CssBaseline />
      <Route exact path="/" component={Home} />
      <Route path="/Resume" component={Resume} />
      <Route path="/Strategies" component={Strategies} />
    </>
  );
}

export default App;
