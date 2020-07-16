import { connect } from "react-redux";
import SettingsProfile from "../Components/Profile/SettingsProfile";
import { changeLayout } from "../Actions/layoutActions";

function mapDispatchToProps(dispatch) {
  return {
    changeLayout: (layout) => dispatch(changeLayout(layout))
  };
}

function mapStateToProps(state) {
  return {
    currentLayout: state.layoutReducer.currentLayout
  };
}

export const ConnectedSettings = connect(mapStateToProps, mapDispatchToProps)(SettingsProfile);
