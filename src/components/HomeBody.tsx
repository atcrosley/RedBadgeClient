import React, { Component } from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import { styles } from "./styles";
import { Card, CardActions, CardContent, Button, Typography, Grid, Paper,Container, Divider} from '@material-ui/core';
import wirestrippers from "../images/wire_strippers.jpg";
import '../App.css'
import background from '../images/voltunsplash.jpg'

interface IProps{
    classes: any
    
}


class HomeBody extends Component<IProps, {}>{
    constructor(props:any){
        super(props)
    }

    render(){
        return(
            <>
         
      <div className={this.props.classes.root}>

      <Grid container spacing={3}>
        <Grid item xs={12} className={this.props.classes.header} >  
        </Grid>

        <Grid item xs={6}> 
          <img style={{maxWidth: '100%', maxHeight: 'auto'}} src={wirestrippers} alt="construction pic" />
        </Grid>

        <Grid item xs={6} >
          <Paper className={this.props.classes.paper}><Typography className={this.props.classes.titleWork} variant="h1">Let's get to Work!</Typography>

          <Divider variant="middle" className={this.props.classes.divider}/>
          
          <Typography variant= "subtitle1">Just 22 years ago, I started with a dream and a small nestegg of cash my Parents had set aside for college. With that I bet on myself and went to work around Indiana fixing up odds and ends. Just a man and his tools. Now I run an expansive operation working excavation and electric all across Indiana. Come be apart of it! </Typography>

           <Divider variant="middle" className={this.props.classes.divider}/>

          <Grid container >
            <Grid item xs={6} >
            <Typography variant= "h5">Hiring all levels of experiece! Apply here!</Typography>
            </Grid>
            <Grid item xs={6}>
            <Button variant="contained">Application</Button>
            </Grid>
          </Grid>
          <Grid container >
            <Grid item xs={6}><Typography variant = "h5">Do you need an electrician or excavation done? Let us Know here!</Typography>
            </Grid>
            <Grid item xs={6}>
            <Button variant="contained">
            Job Form
            </Button>
            </Grid>
          </Grid>


          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={this.props.classes.paper}>Its not what you know or who ya know but who ya know who what to do ya know</Paper>
        </Grid>
        
      </Grid>
    </div>

            </>
        )
    }

}

export default withStyles(styles)(HomeBody);