import React, { Component } from "react";
import { Dropdown } from "react-bootstrap";

export default class Administration extends Component {
  componentDidMount() {
    this.props.requestGetUsers();
  }

  render() {
    return (
      <div className="panel">
        <div className="panel-default">
          <div className="p-3">
            <strong>User</strong> administration
          </div>
          <div className="space-between">
            <div>Overview</div>
          </div>
          <div className="help-block">
            This overview contains a list of each registered user with actions
            to view, edit and delete users.
          </div>
          <div className="table-responsive-md mt-4">
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Last login</th>
                </tr>
              </thead>
              <tbody>
                {this.props.allUsers &&
                  this.props.allUsers.map((item, index) => (
                    <tr key={index}>
                      <td>
                        <div>{item.display_name}</div>
                        <div>{item.account.username}</div>
                      </td>
                      <td>{item.account.email}</td>
                      <td>
                        {item.account.last_login === null
                          ? "never"
                          : item.account.last_login}
                      </td>
                      <td>
                        <Dropdown className="float-right">
                          <Dropdown.Toggle
                            variant="default"
                            id="dropdown-basic"
                          >
                            <i className="fas fa-cog"></i>
                          </Dropdown.Toggle>

                          <Dropdown.Menu className="dropdown-cog-right">
                            <Dropdown.Item href="/settings">Edit</Dropdown.Item>
                            <Dropdown.Item href="/administration">
                              Delete
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
