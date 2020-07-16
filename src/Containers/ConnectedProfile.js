import { connect } from "react-redux";
import General from "../Components/Profile/General";
import Communication from "../Components/Profile/Communication";
import SocialBookmarks from "../Components/Profile/SocialBookmarks";
import {
  requestUserById,
  requestUpdateProfile,
  clearUpdateStatus,
} from "../Actions/userActions";

function mapDispatchToProps(dispatch) {
  return {
    requestUserById: () => dispatch(requestUserById()),
    requestUpdateProfile: (data) => dispatch(requestUpdateProfile(data)),
    clearUpdateStatus: () => dispatch(clearUpdateStatus()),
  };
}

function mapStateToProps(state) {
  return {
    allUsers: state.userReducer.allUsers,
    profile: state.userReducer.currentUserProfile,
    updateProfile: state.userReducer.updateProfileStatus,
  };
}

export const ConnectedProfile = connect(
  mapStateToProps,
  mapDispatchToProps
)(General);

export const ConnectedCommunication = connect(
  mapStateToProps,
  mapDispatchToProps
)(Communication);

export const ConnectedSocialBookmarks = connect(
  mapStateToProps,
  mapDispatchToProps
)(SocialBookmarks);
