import React from "react";
import { TextControl } from "@wordpress/components";
import { Button } from "react-bootstrap";
import axios from "axios";
import { Form } from "react-bootstrap";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
    this.errorMessage = false;
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const _this = this;
    axios
      .post(this.props.url + "wp-json/jwt-auth/v1/token/", {
        username: this.state.username,
        password: this.state.password,
      })
      .then((res) => {
        if (res.status === 200) {
          const data = res.data;
          localStorage.setItem("login", data.token);
          _this.props.isUserLoggedIn(data.token);
        }
      })
    .catch((error) => { 
        if (error.response.data.message) {
          this.setState({ username: "", password: "" });
          this.errorMessage = this.stripHtmlTags(error.response.data.message);
        } else {
          console.log(error);
        }
    });
  }

  stripHtmlTags(str) {
    if (str === null || str === "") {
      return false;
    } 
    return str.toString().replace(/<[^>]*>/g, "");
  }

  handleUsername(username) {
    this.setState({ username });
  }

  handlePassword(password) {
    this.setState({ password });
  }
  
  render() {
    return (
      <Form className="login" method="post">
        <TextControl
          className="col-md-12"
          label="User name"
          autoComplete="username"
          value={this.state.username}
          onChange={(value) => this.handleUsername(value)}
        />
        <TextControl
          className="col-md-12"
          label="Password"
          type="password"
          autoComplete="password"
          value={this.state.password}
          onChange={(value) => this.handlePassword(value)}
        />
        <div className={(this.errorMessage ? "error-message" : "hide")}> {this.errorMessage} </div>
        <Button className="btn btn-success" onClick={this.handleSubmit}>
          Log in
        </Button>
      </Form>
    );
  }
}

export default Login;
