import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { withRouter, RouteComponentProps } from 'react-router-dom';


interface Iprops extends RouteComponentProps {
    // email: string,
    // password: string,
    // role: string,
    updateToken: any

}
interface Istate {
    email: string,
    password: string,
    role: string,
    successfulPOST: boolean,
    
}

class Login extends Component< Iprops, Istate>{
    constructor(props: any){
        super(props);
        
        this.state={
            email: "",
            password: "",
            role: "",
            successfulPOST: false,
            
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        
        
    }


    handleSubmit = (event: any) => {
        const { email, password } = this.state

        event.preventDefault();
        fetch("http://localhost:3000/user/login/", {
          method: "POST",
          redirect: 'follow',
          body: JSON.stringify({
              email: email,
              password: password },
          ),
          headers: new Headers({
            "Content-Type": "application/json",
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data.sessionToken)
            this.props.updateToken(data.sessionToken)
            this.props.history.push("/")
          })
          
      };

    render(){
            return (
                <div>
                  <h1>Login</h1>
                  <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                      <Label htmlFor="username">Email</Label>
                      <Input
                        onChange={(e) => this.setState({ email: e.target.value})}
                        name="email"
                        value={this.state.email}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label htmlFor="password">Password</Label>
                      <Input
                        onChange={(e) => this.setState({password: e.target.value})}
                        name="password"
                        value={this.state.password}
                      />
                    </FormGroup>
                    <Button type="submit">Login</Button>
                  </Form>
                </div>
              );
            }};
            
            export default withRouter(Login);




 
