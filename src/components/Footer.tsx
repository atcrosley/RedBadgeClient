import React, { Component } from 'react';
import { BottomNavigationAction, BottomNavigation} from '@material-ui/core';
import { LinkedIn, Instagram, Facebook }from '@material-ui/icons';
import withStyles from "@material-ui/core/styles/withStyles"
import { styles } from "./styles"

interface Iclasses {
    classes: any
}

class Footer extends Component<Iclasses, {}>{

    render(){
        return(
            <>

        <BottomNavigation
         className={this.props.classes.rootFooter}
         showLabels>
      <BottomNavigationAction label="LinkedIn" icon={<LinkedIn />} />
      <BottomNavigationAction label="Instagram" icon={<Instagram />} />
      <BottomNavigationAction label="Facebook" icon={<Facebook />} />
    </BottomNavigation>
            </>
            )
    }
}

export default withStyles(styles)(Footer);
