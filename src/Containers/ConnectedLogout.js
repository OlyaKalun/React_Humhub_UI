import { connect } from "react-redux";
import { clearToken } from "../Actions/authActions";
import Logout from "../Components/Logout";

function mapDispatchToProps(dispatch) {
  return {
    clearToken: () => dispatch(clearToken()),
  };
}

function mapStateToProps(state) {
  return {};
}

export const ConnectedLogout = connect(
  mapStateToProps,
  mapDispatchToProps
)(Logout);
