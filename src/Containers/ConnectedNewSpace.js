import { connect } from "react-redux";
import ManageSpaces from "../Components/Space/ManageSpaces";
import {
  requestNewSpace,
  clearFieldSpace,
  requestGetSpace,
} from "../Actions/spaceActions";

function mapDispatchToProps(dispatch) {
  return {
    requestNewSpace: (params) => dispatch(requestNewSpace(params)),
    clearFieldSpace: () => dispatch(clearFieldSpace()),
    requestGetSpace: () => dispatch(requestGetSpace()),
  };
}

function mapStateToProps(state) {
  return {
    newSpace: state.spaceReducer.newSpace,
    allSpaces: state.spaceReducer.allSpaces,
  };
}

export const ConnectedNewSpace = connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageSpaces);
