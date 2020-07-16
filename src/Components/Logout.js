import React from "react";
import { removeUserSession } from "../Utils/Common";
import { Redirect } from "react-router-dom";

class Logout extends React.Component {
  componentDidMount() {
    removeUserSession();
    this.props.clearToken();
  }

  render() {
    return <Redirect to={{ pathname: "/login" }} />;
  }
}

export default Logout;
