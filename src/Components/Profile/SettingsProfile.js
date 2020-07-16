import React from "react";
import {
  ConnectedProfile,
  ConnectedCommunication,
  ConnectedSocialBookmarks,
} from "../../Containers/ConnectedProfile";

// TODO Move to file for constants

const SETTINGS_TABS = ["General", "Communication", "Social bookmarks"];

class SettingsProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: this.props.currentLayout,
    };

    this.handleClick = this.handleClick.bind(this);
    this.renderSwitch = this.renderSwitch.bind(this);
  }

  handleClick = (layout) => {
    this.props.changeLayout(layout);
    this.setState({ activeTab: layout });
  };

  renderSwitch = () => {
    switch (this.props.currentLayout) {
      case "General":
        return <ConnectedProfile />;
      case "Communication":
        return <ConnectedCommunication />;
      case "Social bookmarks":
        return <ConnectedSocialBookmarks />;
      default:
        return <ConnectedProfile />;
    }
  };

  render() {
    return (
      <div className="tab-container">
        <div className="p-4">
          <strong>Your</strong> profile
        </div>
        <nav className="pl-2 pr-2">
          <div className="nav nav-tabs" role="tablist">
            {SETTINGS_TABS.map((tabName, index) => (
              <div
                className={`nav-item nav-link ${
                  this.state.activeTab === tabName ? "active" : ""
                }`}
                data-toggle="tab"
                role="tab"
                key={index}
                onClick={() => this.handleClick(tabName)}
              >
                {tabName}
              </div>
            ))}
          </div>
        </nav>

        {this.renderSwitch()}
      </div>
    );
  }
}

export default SettingsProfile;
