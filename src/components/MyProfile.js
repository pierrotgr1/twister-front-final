import React, { Component } from "react";
import requireAuth from "./requireAuth";
import { compose } from "redux";
import { connect } from "react-redux";
import { getUserData } from "../redux/actions/user";
import { getUserOwnTwistsList } from "../redux/actions/twist";

import NavBar from "./NavBar";
import ProfileCard from "./ProfileCard";
import TwistsList from "./TwistsList";

class MyProfile extends Component {
  componentDidMount() {
    this.props.getUserData(this.props.authenticated);
    this.props.getUserOwnTwistsList(this.props.authenticated);
  }

  render() {
    let {
      currentUser,
      currentUserOwnTwistsList,
      errorOwnTwistsMessage
    } = this.props;

    return (
      <div>
        <NavBar />
        <div className="home container mt-5">
          <div className="row">
            <div className="col-3 d-none d-lg-block">
              <ProfileCard user={currentUser} path={window.location.href} />
            </div>
            <div className="col-9">
              <TwistsList
                twistsList={currentUserOwnTwistsList}
                error={errorOwnTwistsMessage}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.authReducer.authenticated,
    currentUser: state.userReducer.currentUser,
    currentUserOwnTwistsList: state.twistReducer.currentUserOwnTwistsList,
    errorOwnTwistsMessage: state.twistReducer.errorOwnTwistsMessage
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getUserData: currentUserFbid => dispatch(getUserData(currentUserFbid)),
    getUserOwnTwistsList: currentUserFbid =>
      dispatch(getUserOwnTwistsList(currentUserFbid))
  };
}

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  requireAuth
)(MyProfile);
