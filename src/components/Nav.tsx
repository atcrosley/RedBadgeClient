import React, {Component} from 'react';
import clsx from 'clsx';
import { AppBar, Toolbar, Typography, Button, IconButton  } from '@material-ui/core'
import withStyles from "@material-ui/core/styles/withStyles"
import { styles } from "./styles"
import { Menu, Mail, Build, Home, Work } from '@material-ui/icons';

interface NavState {
    setAnchorEl: any;
}
interface Iclasses {
    classes: any
}

class Nav extends Component <Iclasses , NavState>{
    constructor(props: any) {
        super(props)
    }
  
    
    render(){
        return(
            <>
              <div className={this.props.classes.title}>
      <AppBar position="static"  >
        <Toolbar className={this.props.classes.title} >
        <IconButton edge="start" className={this.props.classes.menuButton} color="inherit" aria-label="menu">
            <Menu />
          </IconButton>
          <Typography variant="h6" className={this.props.classes.title}>
            Weber Construction
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
            </>
            )
          }}
          
          
          export default withStyles(styles)(Nav);
          {/* <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            className={clsx(this.state.open && this.props.classes.hide)}
            >
            <Menu />
          </IconButton> */}
          {/* <IconButton onClick={handleDrawerClose}>
          {this.state.open ? <ChevronRight /> : <ChevronLeft />}
        </IconButton> */}
        {/* <List>
        <ListItem button>
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Build />
          </ListItemIcon>
          <ListItemText primary="Work" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Mail />
          </ListItemIcon>
          <ListItemText primary="Contact" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Work />
          </ListItemIcon>
          <ListItemText primary="Work" />
        </ListItem>
        </List> */}