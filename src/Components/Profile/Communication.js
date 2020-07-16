import React from "react";
import { InputGroup } from "../UniversalComponents/InputGroup";
import { Notification } from "../UniversalComponents/Notification";
import { validateRegExp } from "../../Utils/validate";
import { validateRulesObject } from "../../Constants/RegularExpressions";

class Communication extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phone_private: "",
      phone_work: "",
      mobile: "",
      fax: "",
      im_skype: "",
      im_xmpp: "",
      isSubmitted: false,
      validateResults: {
        phone_private: {
          status: true,
          errorMessage: "",
        },
        phone_work: {
          status: true,
          errorMessage: "",
        },
        mobile: {
          status: true,
          errorMessage: "",
        },
        fax: {
          status: true,
          errorMessage: "",
        },
        im_skype: {
          status: true,
          errorMessage: "",
        },
        im_xmpp: {
          status: true,
          errorMessage: "",
        },
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateBeforeSubmit = this.validateBeforeSubmit.bind(this);
  }

  componentDidMount() {
    this.props.requestUserById();
    this.props.clearUpdateStatus();
  }

  static getDerivedStateFromProps(props, state) {
    const hasNullsInData = props.profile
      ? Object.values(props.profile).some((elem) => elem === null)
      : false;
    if (props.profile && hasNullsInData) {
      const modifiedProfile = props.profile;
      for (let prop in modifiedProfile) {
        if (modifiedProfile[prop] === null) {
          modifiedProfile[prop] = "";
        }
      }
      return modifiedProfile;
    }
    return state;
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
    if (this.state.isSubmitted) {
      this.props.clearUpdateStatus();
      this.setState({ isSubmitted: false });
    }
  }

  validateBeforeSubmit(data) {
    const validationResults = {};
    for (const key in data) {
      validationResults[key] = {
        status: validateRegExp(validateRulesObject[key]["reg"], data[key]),
        errorMessage: validateRulesObject[key]["errorMessage"],
      };
    }

    return validationResults;
  }

  handleSubmit(event) {
    event.preventDefault();

    // Gather data from state
    const dataForValidation = {
      phone_private: this.state.phone_private,
      phone_work: this.state.phone_work,
      mobile: this.state.mobile,
      fax: this.state.fax,
      im_skype: this.state.im_skype,
      im_xmpp: this.state.im_xmpp,
    };

    // Validate the data
    const validationResults = this.validateBeforeSubmit(dataForValidation);

    this.setState(
      {
        validateResults: validationResults,
      },
      () => {
        const validateResultsFromState = this.state.validateResults;
        const hasErrors = Object.values(validateResultsFromState).some(
          (fieldObject) => fieldObject.status === false
        );

        if (hasErrors) {
          return;
        }
        this.props.requestUpdateProfile({
          profile: {
            phone_private: this.state.phone_private,
            phone_work: this.state.phone_work,
            mobile: this.state.mobile,
            fax: this.state.fax,
            im_skype: this.state.im_skype,
            im_xmpp: this.state.im_xmpp,
          },
        });
      }
    );
    this.setState({ isSubmitted: true });
  }

  render() {
    return (
      <div className="profile-container">
        <form onSubmit={this.handleSubmit}>
          <InputGroup
            wrapperClasses="form-group"
            htmlFor="phone_private"
            labelName="Phone private"
            labelClasses={
              this.state.validateResults.phone_private.status ? "" : "invalid"
            }
            inputName="phone_private"
            inputType="text"
            inputValue={this.state.phone_private}
            inputClasses={
              this.state.validateResults.phone_private.status
                ? "form-control"
                : "form-control invalid-border"
            }
            onChange={this.handleChange}
            invalidClasses=""
            messageInvalid={
              this.state.validateResults.phone_private.status
                ? ""
                : this.state.validateResults.phone_private.errorMessage
            }
          />
          <InputGroup
            wrapperClasses="form-group"
            htmlFor="phone_work"
            labelName="Phone work"
            labelClasses={
              this.state.validateResults.phone_work.status ? "" : "invalid"
            }
            inputName="phone_work"
            inputType="text"
            inputValue={this.state.phone_work}
            inputClasses={
              this.state.validateResults.phone_work.status
                ? "form-control"
                : "form-control invalid-border"
            }
            onChange={this.handleChange}
            invalidClasses=""
            messageInvalid={
              this.state.validateResults.phone_work.status
                ? ""
                : this.state.validateResults.phone_work.errorMessage
            }
          />
          <InputGroup
            wrapperClasses="form-group"
            htmlFor="mobile"
            labelName="Mobile"
            labelClasses={
              this.state.validateResults.mobile.status ? "" : "invalid"
            }
            inputName="mobile"
            inputType="text"
            inputValue={this.state.mobile}
            inputClasses={
              this.state.validateResults.mobile.status
                ? "form-control"
                : "form-control invalid-border"
            }
            onChange={this.handleChange}
            invalidClasses=""
            messageInvalid={
              this.state.validateResults.mobile.status
                ? ""
                : this.state.validateResults.mobile.errorMessage
            }
          />
          <InputGroup
            wrapperClasses="form-group"
            htmlFor="fax"
            labelName="Fax"
            labelClasses={
              this.state.validateResults.fax.status ? "" : "invalid"
            }
            inputName="fax"
            inputType="text"
            inputValue={this.state.fax}
            inputClasses={
              this.state.validateResults.fax.status
                ? "form-control"
                : "form-control invalid-border"
            }
            onChange={this.handleChange}
            invalidClasses=""
            messageInvalid={
              this.state.validateResults.fax.status
                ? ""
                : this.state.validateResults.fax.errorMessage
            }
          />
          <InputGroup
            wrapperClasses="form-group"
            htmlFor="im_skype"
            labelName="Skype Nickname"
            labelClasses={
              this.state.validateResults.im_skype.status ? "" : "invalid"
            }
            inputName="im_skype"
            inputType="text"
            inputValue={this.state.im_skype}
            inputClasses={
              this.state.validateResults.im_skype.status
                ? "form-control"
                : "form-control invalid-border"
            }
            onChange={this.handleChange}
            invalidClasses=""
            messageInvalid={
              this.state.validateResults.im_skype.status
                ? ""
                : this.state.validateResults.im_skype.errorMessage
            }
          />
          <InputGroup
            wrapperClasses="form-group"
            htmlFor="im_xmpp"
            labelName="XMPP Jabber Address"
            labelClasses={
              this.state.validateResults.im_xmpp.status ? "" : "invalid"
            }
            inputName="im_xmpp"
            inputType="text"
            inputValue={this.state.im_xmpp}
            inputClasses={
              this.state.validateResults.im_xmpp.status
                ? "form-control"
                : "form-control invalid-border"
            }
            onChange={this.handleChange}
            invalidClasses=""
            messageInvalid={
              this.state.validateResults.im_xmpp.status
                ? ""
                : this.state.validateResults.im_xmpp.errorMessage
            }
          />
          {this.props.updateProfile && (
            <Notification
              alertClasses="alert-success mt-3"
              message="Success!"
            />
          )}
          <div>
            <button type="submit" className="btn btn-primary btn-login mt-3">
              Save profile
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Communication;
