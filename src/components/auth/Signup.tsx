import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { RouteComponentProps, withRouter } from "react-router-dom";

interface Iprops extends RouteComponentProps {
  updateToken: any;
}
interface Istate {
  email: string;
  password: string;
  role: string;
}

class Signup extends Component<Iprops, Istate> {
  constructor(props: any) {
    super(props);

    this.state = {
      email: "",
      password: "",
      role: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit = (event: any) => {
    const { email, password } = this.state;

    event.preventDefault();
    fetch("http://localhost:3000/user/create/", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        this.props.updateToken(data.sessionToken);
        this.props.history.push("/");
      });
  };
  render() {
    return (
      <div>
        <h1>Sign Up</h1>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label htmlFor="username">Username</Label>
            <Input
              onChange={(e) => this.setState({ email: e.target.value })}
              name="username"
              value={this.state.email}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <Input
              onChange={(e) => this.setState({ password: e.target.value })}
              name="password"
              value={this.state.password}
            />
          </FormGroup>

          {/* <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="role"
                onChange={(e) => this.setState({ role: e.target.value })}
                value={this.state.role}
              />{" "}
              Employee
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="role"
                onChange={(e) => this.setState({ password: e.target.value })}
                value={this.state.role}
              />{" "}
              Client
            </Label>
          </FormGroup> */}

          <Button type="submit">Signup</Button>
        </Form>
      </div>
    );
  }
}

export default withRouter(Signup);
