import { connect } from "react-redux";
import { requestSignIn, clearErrors } from "../Actions/authActions";
import Login from "../Components/Login";

function mapDispatchToProps(dispatch) {
  return {
    requestSignIn: params => dispatch(requestSignIn(params)),
    clearErrors: () => dispatch(clearErrors())
  };
}

function mapStateToProps(state) {
  return {
    token: state.authReducer.token,
    errorMessage: state.authReducer.errorMessage
  };
}

export const ConnectedLogin = connect(mapStateToProps, mapDispatchToProps)(Login);
