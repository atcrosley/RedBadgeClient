import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap"; //1
import Signup from "./Signup";
import Login from "./Login";
import { Redirect } from 'react-router-dom';

interface IProps{
    updateToken: any
}

class Auth extends Component< IProps, {}>{


    render(){
      // if (localStorage.getItem("token")) {
      //   return <Redirect to="/" />
      // }
        return (
            <Container className="auth-container">
              <Row>
                <Col md="6" className="signup-col">
                  <Signup updateToken={this.props.updateToken} />
                </Col>
                <Col md="6" className="login-col">
                  <Login updateToken={this.props.updateToken} />
                </Col>
              </Row>
            </Container>
          );
}};
        
    export default Auth;

