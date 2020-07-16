import { connect } from "react-redux";
import { requestGetUsers } from "../Actions/userActions";
import Administration from "../Components/Administration";

function mapDispatchToProps(dispatch) {
  return {
    requestGetUsers: () => dispatch(requestGetUsers()),
  };
}

function mapStateToProps(state) {
  return {
    allUsers: state.userReducer.allUsers,
  };
}

export const ConnectedAdministration = connect(
  mapStateToProps,
  mapDispatchToProps
)(Administration);
