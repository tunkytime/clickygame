import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

class Navbar extends Component {
  render() {
    return (
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit">
            Clicky Game
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Navbar;
