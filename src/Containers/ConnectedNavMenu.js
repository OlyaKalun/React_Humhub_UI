import { connect } from "react-redux";
import NavigationMenu from "../Components/NavigationMenu";

function mapDispatchToProps(dispatch) {
  return {};
}

function mapStateToProps(state) {
  return {
    token: state.authReducer.token,
  };
}

export const ConnectedNavMenu = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationMenu);
