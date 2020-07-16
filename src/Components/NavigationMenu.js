import React from "react";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import Dashboard from "../Components/Dashboard";
import { ConnectedLogin } from "../Containers/ConnectedLogin";

import PrivateRoute from "../Utils/PrivateRoute";
import PublicRoute from "../Utils/PublicRoute";
import SignUp from "../Components/SignUp";
import { ConnectedSettings } from "../Containers/ConnectedSettings";
import { ConnectedLogout } from "../Containers/ConnectedLogout";
import { ConnectedNewSpace } from "../Containers/ConnectedNewSpace";
import { ConnectedAdministration } from "../Containers/ConnectedAdministration";
import { Dropdown } from "react-bootstrap";

function NavigationMenu(props) {
  return (
    <BrowserRouter>
      <div>
        <div className="header">
          <div className="container d-flex align-items-center">
            <NavLink activeClassName="active" to="/" className="flex-grow-1">
              Dashboard
            </NavLink>
            {!props.token && (
              <NavLink activeClassName="active" to="/login">
                Sign in
              </NavLink>
            )}

            {props.token && (
              <>
                <Dropdown>
                  <Dropdown.Toggle variant="settings" id="dropdown-basic">
                    Settings
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="dropdown-navigation">
                    <Dropdown.Item href="/settings">
                      <i className="fa fa-user"></i> My profile
                    </Dropdown.Item>
                    <Dropdown.Item href="/administration">
                      <i className="fa fa-cogs"></i> Administration
                    </Dropdown.Item>
                    <Dropdown.Item href="/space">
                      <i className="fa fa-inbox"></i> Spaces
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <NavLink activeClassName="active" to="/logout">
                  Logout
                </NavLink>
              </>
            )}
          </div>
        </div>
        <div className="content">
          <div className="container d-flex justify-content-center">
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <PublicRoute exact path="/login" component={ConnectedLogin} />
              <PublicRoute exact path="/register" component={SignUp} />
              <PrivateRoute path="/logout" component={ConnectedLogout} />
              <PrivateRoute path="/space" component={ConnectedNewSpace} />
              <PrivateRoute
                path="/administration"
                component={ConnectedAdministration}
              />
              <PrivateRoute
                exact
                path="/settings"
                component={ConnectedSettings}
              />
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default NavigationMenu;
