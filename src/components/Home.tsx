import React, {Component} from 'react'
import Nav from "./Nav"
import Footer from "./Footer"
import HomeBody from "./HomeBody"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


class Home extends Component {

    render(){
        return(<div>
            <Router>
            <Nav />
            <HomeBody />
            <Footer /> 
            </Router>
            </div>)
    }
}

export default Home; 
