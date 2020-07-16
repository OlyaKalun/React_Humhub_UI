import React from "react";
import { InputGroup } from "../UniversalComponents/InputGroup";
import { Notification } from "../UniversalComponents/Notification";
import { SelectMenu } from "../UniversalComponents/SelectMenu";
import countries from "../../Dataset/countries";
import gender from "../../Dataset/gender";
import { validateRegExp } from "../../Utils/validate";
import { validateRulesObject } from "../../Constants/RegularExpressions";

class General extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      title: "",
      street: "",
      city: "",
      zip: "",
      country: "",
      state: "",
      gender: "",
      birthday: "",
      optionsGender: gender,
      optionsCountry: countries,
      isSubmitted: false,
      validateResults: {
        firstname: {
          status: true,
          errorMessage: "",
        },
        lastname: {
          status: true,
          errorMessage: "",
        },
        title: {
          status: true,
          errorMessage: "",
        },
        street: {
          status: true,
          errorMessage: "",
        },
        city: {
          status: true,
          errorMessage: "",
        },
        zip: {
          status: true,
          errorMessage: "",
        },
        country: {
          status: true,
          errorMessage: "",
        },
        state: {
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
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      title: this.state.title,
      street: this.state.street,
      city: this.state.city,
      zip: this.state.zip,
      state: this.state.state,
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
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            title: this.state.title,
            gender: this.state.gender,
            street: this.state.street,
            city: this.state.city,
            zip: this.state.zip,
            country: this.state.country,
            state: this.state.state,
            birthday: this.state.birthday,
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
            wrapperClasses="form-group required"
            htmlFor="firstname"
            labelName="First name"
            labelClasses={
              this.state.validateResults.firstname.status ? "" : "invalid"
            }
            inputName="firstname"
            inputType="text"
            inputValue={this.state.firstname}
            inputClasses={
              this.state.validateResults.firstname.status
                ? "form-control"
                : "form-control invalid-border"
            }
            onChange={this.handleChange}
            invalidClasses=""
            messageInvalid={
              this.state.validateResults.firstname.status
                ? ""
                : this.state.validateResults.firstname.errorMessage
            }
          />
          <InputGroup
            wrapperClasses="form-group required"
            htmlFor="lastname"
            labelName="Last name"
            labelClasses={
              this.state.validateResults.lastname.status ? "" : "invalid"
            }
            inputName="lastname"
            inputType="text"
            inputValue={this.state.lastname}
            inputClasses={
              this.state.validateResults.lastname.status
                ? "form-control"
                : "form-control invalid-border"
            }
            onChange={this.handleChange}
            invalidClasses=""
            messageInvalid={
              this.state.validateResults.lastname.status
                ? ""
                : this.state.validateResults.lastname.errorMessage
            }
          />
          <InputGroup
            wrapperClasses="form-group"
            htmlFor="title"
            labelName="Title"
            labelClasses={
              this.state.validateResults.title.status ? "" : "invalid"
            }
            inputName="title"
            inputType="text"
            inputValue={this.state.title}
            inputClasses={
              this.state.validateResults.title.status
                ? "form-control"
                : "form-control invalid-border"
            }
            onChange={this.handleChange}
            invalidClasses=""
            messageInvalid={
              this.state.validateResults.title.status
                ? ""
                : this.state.validateResults.title.errorMessage
            }
          />
          <SelectMenu
            wrapperClasses="form-group"
            htmlFor="gender"
            labelName="Gender"
            selectName="gender"
            selectId="gender"
            selectClasses="form-control"
            selectValue={this.state.gender}
            options={this.state.optionsGender}
            onChange={this.handleChange}
          />
          <InputGroup
            wrapperClasses="form-group"
            htmlFor="street"
            labelName="Street"
            labelClasses={
              this.state.validateResults.street.status ? "" : "invalid"
            }
            inputName="street"
            inputType="text"
            inputValue={this.state.street}
            inputClasses={
              this.state.validateResults.street.status
                ? "form-control"
                : "form-control invalid-border"
            }
            onChange={this.handleChange}
            invalidClasses=""
            messageInvalid={
              this.state.validateResults.street.status
                ? ""
                : this.state.validateResults.street.errorMessage
            }
          />
          <InputGroup
            wrapperClasses="form-group"
            htmlFor="city"
            labelName="City"
            labelClasses={
              this.state.validateResults.city.status ? "" : "invalid"
            }
            inputName="city"
            inputType="text"
            inputValue={this.state.city}
            inputClasses={
              this.state.validateResults.city.status
                ? "form-control"
                : "form-control invalid-border"
            }
            onChange={this.handleChange}
            invalidClasses=""
            messageInvalid={
              this.state.validateResults.city.status
                ? ""
                : this.state.validateResults.city.errorMessage
            }
          />
          <InputGroup
            wrapperClasses="form-group"
            htmlFor="zip"
            labelName="ZIP"
            labelClasses={
              this.state.validateResults.zip.status ? "" : "invalid"
            }
            inputName="zip"
            inputType="text"
            inputValue={this.state.zip}
            inputClasses={
              this.state.validateResults.zip.status
                ? "form-control"
                : "form-control invalid-border"
            }
            onChange={this.handleChange}
            invalidClasses=""
            messageInvalid={
              this.state.validateResults.zip.status
                ? ""
                : this.state.validateResults.zip.errorMessage
            }
          />
          <SelectMenu
            wrapperClasses="form-group"
            htmlFor="country"
            labelName="Country"
            selectName="country"
            selectId="country"
            selectClasses="form-control"
            selectValue={this.state.country}
            options={this.state.optionsCountry}
            onChange={this.handleChange}
          />
          <InputGroup
            wrapperClasses="form-group"
            htmlFor="state"
            labelName="State"
            labelClasses={
              this.state.validateResults.state.status ? "" : "invalid"
            }
            inputName="state"
            inputType="text"
            inputValue={this.state.state}
            inputClasses={
              this.state.validateResults.state.status
                ? "form-control"
                : "form-control invalid-border"
            }
            onChange={this.handleChange}
            invalidClasses=""
            messageInvalid={
              this.state.validateResults.state.status
                ? ""
                : this.state.validateResults.state.errorMessage
            }
          />
          <InputGroup
            wrapperClasses="form-group"
            htmlFor="birthday"
            labelName="Birthday"
            inputName="birthday"
            inputType="date"
            inputValue={this.state.birthday}
            inputClasses="form-control"
            onChange={this.handleChange}
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

export default General;
