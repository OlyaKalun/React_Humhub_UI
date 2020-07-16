import React from "react";
import Modal from "react-modal";
import { ChromePicker } from "react-color";
import { validateRegExp } from "../../Utils/validate";
import { validateRulesObject } from "../../Constants/RegularExpressions";
import { Textarea } from "../UniversalComponents/Textarea";

export default class ManageSpaces extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      background: "#fff",
      color: "",
      isModalOpen: false,
      isSubmitted: false,
      isVisibility: false,
      validateResults: {
        name: {
          status: true,
          errorMessage: "",
        },
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleAddSpace = this.handleAddSpace.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateBeforeSubmit = this.validateBeforeSubmit.bind(this);
    this.handlePicker = this.handlePicker.bind(this);
    this.setStateAsync = this.setStateAsync.bind(this);
  }

  componentDidMount() {
    this.props.requestGetSpace();
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

  clearField = () => {
    this.setState({
      isModalOpen: false,
      name: "",
      description: "",
      validateResults: {
        name: {
          status: true,
          errorMessage: "",
        },
      },
    });
  };

  handleChangeComplete = (color) => {
    this.setState({ background: color.hex });
  };

  handleAddSpace() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
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

  async handleSubmit(event) {
    event.preventDefault();

    // Gather data from state
    const dataForValidation = {
      name: this.state.name,
    };

    // Validate the data
    const validationResults = this.validateBeforeSubmit(dataForValidation);

    await this.setStateAsync({ validateResults: validationResults });
    const validateResultsFromState = this.state.validateResults;
    const hasErrors = Object.values(validateResultsFromState).some(
      (fieldObject) => fieldObject.status === false
    );

    if (hasErrors) {
      return;
    }

    await this.props.requestNewSpace({
      name: this.state.name,
      description: this.state.description,
      color: this.state.background,
    });

    await this.setStateAsync({
      isSubmitted: true,
      isModalOpen: false,
      name: "",
      description: "",
    });
  }

  setStateAsync(state) {
    return new Promise((resolve) => {
      this.setState(state, resolve);
    });
  }

  handlePicker() {
    this.setState({
      isVisibility: !this.state.isVisibility,
    });
  }

  render() {
    return (
      <div className="panel">
        <div className="panel-default">
          <div className="p-3">
            <strong>Manage</strong> spaces
          </div>
          <div className="space-between">
            <div>Overview</div>
            <button
              type="button"
              className="btn btn-success"
              onClick={this.handleAddSpace}
            >
              <i className="fa fa-plus fa-sm" aria-hidden="true"></i> Add new
              space
            </button>
          </div>
          <div className="help-block">
            This overview contains a list of each space with actions to view,
            edit and delete spaces.
          </div>
          <div className="table-responsive-md mt-4">
            <table className="table">
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Members</th>
                  <th>Owner</th>
                </tr>
              </thead>
              <tbody>
                {this.props.allSpaces.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <div
                        style={{
                          width: 34,
                          height: 34,
                          borderColor: "#ccc",
                          borderWidth: 1,
                          borderStyle: "solid",
                          backgroundColor: `${item.color}`,
                        }}
                      ></div>
                    </td>
                    <td>
                      <div>{item.name}</div>
                      <div>{item.description}</div>
                    </td>
                    <td>1</td>
                    <td>{item.owner.display_name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Modal Add Space */}
          <Modal
            isOpen={this.state.isModalOpen}
            onRequestClose={this.clearField}
            style={this.customStyles}
          >
            <div>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={this.clearField}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div
              className="modal-title text-center mb-3 mt-4"
              id="globalModal-title"
            >
              <strong>Create</strong> new space
            </div>
            <form onSubmit={this.handleSubmit}>
              <div className="input-group">
                <div className="form-group required w-100">
                  <label
                    htmlFor="name"
                    className={
                      this.state.validateResults.name.status ? "" : "invalid"
                    }
                  >
                    Name
                  </label>
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i
                        style={{
                          backgroundColor: this.state.background,
                        }}
                        onClick={this.handlePicker}
                      ></i>
                    </span>
                    <input
                      type="text"
                      placeholder="Space name"
                      name="name"
                      value={this.state.name}
                      className={
                        this.state.validateResults.name.status
                          ? "form-control"
                          : "form-control invalid-border"
                      }
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="invalid">
                    {this.state.validateResults.name.status
                      ? ""
                      : this.state.validateResults.name.errorMessage}
                  </div>
                </div>
                <div
                  style={
                    this.state.isVisibility
                      ? { display: "block", height: 36 }
                      : { display: "none" }
                  }
                  onChange={this.handlePicker}
                >
                  <ChromePicker
                    color={this.state.background}
                    onChangeComplete={this.handleChangeComplete}
                  ></ChromePicker>
                </div>
              </div>
              <Textarea
                wrapperClasses="form-group"
                htmlFor="description"
                labelName="Description"
                textareaName="description"
                textareaClasses="form-control"
                textareaValue={this.state.description}
                rows="3"
                placeholder="Space description"
                onChange={this.handleChange}
              />
              <div>
                <button
                  type="submit"
                  className="btn btn-primary btn-login mt-3"
                >
                  Done
                </button>
              </div>
            </form>
          </Modal>
          {/* END OF Modal Add Space */}
        </div>
      </div>
    );
  }

  customStyles = {
    content: {
      top: "42%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      margin: "auto",
      width: 600,
      transform: "translate(-50%, -50%)",
      minHeight: 416,
    },
  };
}
