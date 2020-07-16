import React from "react";
import { InputGroup } from "./UniversalComponents/InputGroup";
import Modal from "react-modal";
import minions from "../assets/source.gif";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      isModalOpen: false
    };
    this.goToLogin = this.goToLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({
          [name]: checked
        })
      : this.setState({
          [name]: value
        });
  }

  goToLogin() {
    this.props.history.push("/login");
  }

  handleSignUp() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  render() {
    return (
      <div className="login-page">
        <div>
          <h2 className="mb-4">Sign up</h2>
          <p>Don't have an account? Join the network by entering your e-mail address.</p>
          <InputGroup
            wrapperClasses="form-group"
            labelClasses="d-none"
            inputName="email"
            inputType="email"
            inputValue={this.state.email}
            placeholder="Your email"
            inputClasses="form-control"
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group d-flex justify-content-between align-items-center">
          <div className="button-go-to" onClick={this.goToLogin}>
            Sign in
          </div>
          <button type="button" className="btn btn-primary btn-login" onClick={this.handleSignUp}>
            Sign up
          </button>
          <Modal isOpen={this.state.isModalOpen} onRequestClose={this.handleSignUp} style={this.customStyles}>
            <div>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.handleSignUp}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <h4 className="modal-title" id="globalModal-title">
              <strong>Service is unavailable :(</strong>
            </h4>
            <p>Our minions are working on it</p>
            <img src={minions} alt="Test" style={{ width: "50%" }} />
          </Modal>
        </div>
      </div>
    );
  }

  customStyles = {
    content: {
      top: "20%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      margin: "auto",
      width: 400,
      transform: "translate(-50%, -50%)"
    }
  };
}

export default SignUp;
