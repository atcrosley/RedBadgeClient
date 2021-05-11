import * as React from 'react';
import { Component } from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import { styles } from '../styles';
import {  TextField } from '@material-ui/core';
import PMIndex from './PMIndex';

interface IProps{
    classes: any,
    token: string
}

class ProjectManager extends Component<IProps, {}>{
    
    render(){
        return(<div>
          <PMIndex  token={this.props.token}/>
          </div>

            )
    }
}

export default  withStyles(styles)(ProjectManager);