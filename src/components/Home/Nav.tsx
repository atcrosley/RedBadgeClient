import React, { Component } from "react";
import clsx from "clsx";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  MenuItem,
  Menu,
  Paper,
  Fade,
  Popper,
} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import { styles } from "../styles";
import { Mail, Build, Home, Work } from "@material-ui/icons";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

interface Istate {
  anchorEl: any;
  open: boolean;
  // event: any
}
interface Iprops {
  classes: any;
}

class Nav extends Component<Iprops, Istate> {
  constructor(props: any) {
    super(props);

    this.state = {
      anchorEl: null,
      open: false,
      // event: null
    };
  }
  handleClick = (event: any) =>
    this.setState({ anchorEl: event.currentTarget });
  handleClose = () => this.setState({ anchorEl: null });

  render() {
    const { anchorEl } = this.state;
    return (
      <>
        <div className={this.props.classes.title}>
          <AppBar position="static">
            <Toolbar className={this.props.classes.title}>
              <IconButton
                edge="start"
                className={this.props.classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={(event) => this.handleClick(event)}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={this.handleClose}
              >
                <Link to="/">
                  <MenuItem onClick={this.handleClose}>Home</MenuItem>
                </Link>
                <Link to="pm">
                  <MenuItem onClick={this.handleClose}>
                    Project Manager
                  </MenuItem>
                </Link>
                <Link to="schedule">
                  <MenuItem onClick={this.handleClose}>Scheduler</MenuItem>
                </Link>
                <Link to="/">
                  <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                </Link>
              </Menu>
              <Typography variant="h6" className={this.props.classes.title}>
                Weber Construction
              </Typography>
              <Link to="/login">
                <Button onClick={this.handleClick} color="inherit">
                  Login
                </Button>
              </Link>
            </Toolbar>
          </AppBar>
        </div>
      </>
    );
  }
}

export default withStyles(styles)(Nav);
