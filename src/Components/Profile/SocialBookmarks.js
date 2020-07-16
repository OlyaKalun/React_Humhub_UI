import React from "react";
import { InputGroup } from "../UniversalComponents/InputGroup";
import { Notification } from "../UniversalComponents/Notification";
import { validateRegExp } from "../../Utils/validate";
import { validateRulesObject } from "../../Constants/RegularExpressions";

class SocialBookmarks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      url_facebook: "",
      url_linkedin: "",
      url_xing: "",
      url_youtube: "",
      url_vimeo: "",
      url_flickr: "",
      url_myspace: "",
      url_twitter: "",
      isSubmitted: false,
      validateResults: {
        url: {
          status: true,
          errorMessage: "",
        },
        url_facebook: {
          status: true,
          errorMessage: "",
        },
        url_linkedin: {
          status: true,
          errorMessage: "",
        },
        url_xing: {
          status: true,
          errorMessage: "",
        },
        url_youtube: {
          status: true,
          errorMessage: "",
        },
        url_vimeo: {
          status: true,
          errorMessage: "",
        },
        url_flickr: {
          status: true,
          errorMessage: "",
        },
        url_myspace: {
          status: true,
          errorMessage: "",
        },
        url_twitter: {
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
      url: this.state.url,
      url_facebook: this.state.url_facebook,
      url_linkedin: this.state.url_linkedin,
      url_xing: this.state.url_xing,
      url_youtube: this.state.url_youtube,
      url_vimeo: this.state.url_vimeo,
      url_flickr: this.state.url_flickr,
      url_myspace: this.state.url_myspace,
      url_twitter: this.state.url_twitter,
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
            url: this.state.url,
            url_facebook: this.state.url_facebook,
            url_linkedin: this.state.url_linkedin,
            url_xing: this.state.url_xing,
            url_youtube: this.state.url_youtube,
            url_vimeo: this.state.url_vimeo,
            url_flickr: this.state.url_flickr,
            url_myspace: this.state.url_myspace,
            url_twitter: this.state.url_twitter,
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
            htmlFor="url"
            labelName="Url"
            labelClasses={
              this.state.validateResults.url.status ? "" : "invalid"
            }
            inputName="url"
            inputType="text"
            inputValue={this.state.url}
            inputClasses={
              this.state.validateResults.url.status
                ? "form-control"
                : "form-control invalid-border"
            }
            onChange={this.handleChange}
            invalidClasses=""
            messageInvalid={
              this.state.validateResults.url.status
                ? ""
                : this.state.validateResults.url.errorMessage
            }
          />
          <InputGroup
            wrapperClasses="form-group"
            htmlFor="url_facebook"
            labelName="Facebook URL"
            labelClasses={
              this.state.validateResults.url_facebook.status ? "" : "invalid"
            }
            inputName="url_facebook"
            inputType="text"
            inputValue={this.state.url_facebook}
            inputClasses={
              this.state.validateResults.url_facebook.status
                ? "form-control"
                : "form-control invalid-border"
            }
            onChange={this.handleChange}
            invalidClasses=""
            messageInvalid={
              this.state.validateResults.url_facebook.status
                ? ""
                : this.state.validateResults.url_facebook.errorMessage
            }
          />
          <InputGroup
            wrapperClasses="form-group"
            htmlFor="url_linkedin"
            labelName="LinkedIn URL"
            labelClasses={
              this.state.validateResults.url_linkedin.status ? "" : "invalid"
            }
            inputName="url_linkedin"
            inputType="text"
            inputValue={this.state.url_linkedin}
            inputClasses={
              this.state.validateResults.url_linkedin.status
                ? "form-control"
                : "form-control invalid-border"
            }
            onChange={this.handleChange}
            invalidClasses=""
            messageInvalid={
              this.state.validateResults.url_linkedin.status
                ? ""
                : this.state.validateResults.url.errorMessage
            }
          />
          <InputGroup
            wrapperClasses="form-group"
            htmlFor="url_xing"
            labelName="Xing URL"
            labelClasses={
              this.state.validateResults.url_xing.status ? "" : "invalid"
            }
            inputName="url_xing"
            inputType="text"
            inputValue={this.state.url_xing}
            inputClasses={
              this.state.validateResults.url_xing.status
                ? "form-control"
                : "form-control invalid-border"
            }
            onChange={this.handleChange}
            invalidClasses=""
            messageInvalid={
              this.state.validateResults.url_xing.status
                ? ""
                : this.state.validateResults.url_xing.errorMessage
            }
          />
          <InputGroup
            wrapperClasses="form-group"
            htmlFor="url_youtube"
            labelName="Youtube URL"
            labelClasses={
              this.state.validateResults.url_youtube.status ? "" : "invalid"
            }
            inputName="url_youtube"
            inputType="text"
            inputValue={this.state.url_youtube}
            inputClasses={
              this.state.validateResults.url_youtube.status
                ? "form-control"
                : "form-control invalid-border"
            }
            onChange={this.handleChange}
            invalidClasses=""
            messageInvalid={
              this.state.validateResults.url_youtube.status
                ? ""
                : this.state.validateResults.url_youtube.errorMessage
            }
          />
          <InputGroup
            wrapperClasses="form-group"
            htmlFor="url_vimeo"
            labelName="Vimeo URL"
            labelClasses={
              this.state.validateResults.url_vimeo.status ? "" : "invalid"
            }
            inputName="url_vimeo"
            inputType="text"
            inputValue={this.state.url_vimeo}
            inputClasses={
              this.state.validateResults.url_vimeo.status
                ? "form-control"
                : "form-control invalid-border"
            }
            onChange={this.handleChange}
            invalidClasses=""
            messageInvalid={
              this.state.validateResults.url_vimeo.status
                ? ""
                : this.state.validateResults.url_vimeo.errorMessage
            }
          />
          <InputGroup
            wrapperClasses="form-group"
            htmlFor="url_flickr"
            labelName="Flickr URL"
            labelClasses={
              this.state.validateResults.url_flickr.status ? "" : "invalid"
            }
            inputName="url_flickr"
            inputType="text"
            inputValue={this.state.url_flickr}
            inputClasses={
              this.state.validateResults.url_flickr.status
                ? "form-control"
                : "form-control invalid-border"
            }
            onChange={this.handleChange}
            invalidClasses=""
            messageInvalid={
              this.state.validateResults.url_flickr.status
                ? ""
                : this.state.validateResults.url_flickr.errorMessage
            }
          />
          <InputGroup
            wrapperClasses="form-group"
            htmlFor="url_myspace"
            labelName="MySpace URL"
            labelClasses={
              this.state.validateResults.url_myspace.status ? "" : "invalid"
            }
            inputName="url_myspace"
            inputType="text"
            inputValue={this.state.url_myspace}
            inputClasses={
              this.state.validateResults.url_myspace.status
                ? "form-control"
                : "form-control invalid-border"
            }
            onChange={this.handleChange}
            invalidClasses=""
            messageInvalid={
              this.state.validateResults.url_myspace.status
                ? ""
                : this.state.validateResults.url_myspace.errorMessage
            }
          />
          <InputGroup
            wrapperClasses="form-group"
            htmlFor="url_twitter"
            labelName="Twitter URL"
            labelClasses={
              this.state.validateResults.url_twitter.status ? "" : "invalid"
            }
            inputName="url_twitter"
            inputType="text"
            inputValue={this.state.url_twitter}
            inputClasses={
              this.state.validateResults.url_twitter.status
                ? "form-control"
                : "form-control invalid-border"
            }
            onChange={this.handleChange}
            invalidClasses=""
            messageInvalid={
              this.state.validateResults.url_twitter.status
                ? ""
                : this.state.validateResults.url_twitter.errorMessage
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

export default SocialBookmarks;
