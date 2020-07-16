import React from "react";
import { InputGroup } from "./UniversalComponents/InputGroup";
import { Notification } from "./UniversalComponents/Notification";
import { Redirect } from "react-router-dom";
import { getToken } from "../Utils/Common";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      errors: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.goToRegister = this.goToRegister.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({
          [name]: checked,
        })
      : this.setState({
          [name]: value,
        });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.requestSignIn({
      username: this.state.username,
      password: this.state.password,
    });
  }

  goToRegister() {
    this.props.history.push("/register");
  }

  render() {
    if (getToken()) {
      return <Redirect to={{ pathname: "/" }} />;
    }
    return (
      <div className="login-page">
        <h2 className="mb-4">Sign in</h2>
        <form onSubmit={this.handleSubmit}>
          <InputGroup
            wrapperClasses="form-group"
            htmlFor="username"
            labelName="Username or email"
            inputName="username"
            inputType="text"
            inputValue={this.state.username}
            inputClasses="form-control"
            onChange={this.handleChange}
          />
          <InputGroup
            wrapperClasses="form-group"
            htmlFor="password"
            labelName="Password"
            inputName="password"
            inputType="password"
            inputValue={this.state.password}
            inputClasses="form-control"
            onChange={this.handleChange}
          />
          <InputGroup
            wrapperClasses="form-group"
            htmlFor="remember_me"
            labelName="Remember me"
            inputName="remembe"
            inputType="checkbox"
            labelBefore={false}
          />
          {this.props.errorMessage && (
            <Notification
              alertClasses="alert-danger"
              message={this.props.errorMessage}
            />
          )}
          <div className="form-group d-flex justify-content-between align-items-center">
            <button type="submit" className="btn btn-primary btn-login">
              Sign in
            </button>
            {/* <div className="button-go-to" onClick={this.goToRegister}>
              Sign up
            </div> */}
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
