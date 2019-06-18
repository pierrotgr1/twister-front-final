import React, { Component } from "react";
import requireAuth from "./requireAuth";
import { compose } from "redux";
import { connect } from "react-redux";
import { getTwisterData } from "../redux/actions/twister";
import { getUserData } from "../redux/actions/user";

import NavBar from "./NavBar";
import ProfileCard from "./ProfileCard";
import TwistsList from "./TwistsList";

class TwisterProfile extends Component {
  componentDidMount() {
    let twisterToSearch = this.props.location.search.split("=")[1];
    this.props.getTwisterData(twisterToSearch);
    this.props.getUserData(this.props.authenticated);
  }

  render() {
    let {
      twister,
      twisterTwistList,
      errorTwisterMessage,
      errorTwisterTwistsMessage,
      authenticated,
      currentUser
    } = this.props;

    return (
      <div>
        <NavBar />
        <div className="home container mt-5">
          {errorTwisterMessage !== "" ? (
            <div className="alert alert-danger" role="alert">
              {errorTwisterMessage}
            </div>
          ) : (
            <div className="row">
              <div className="col-3 d-none d-lg-block">
                <ProfileCard
                  user={twister}
                  currentUserFbId={authenticated}
                  path={window.location.href}
                  isFollowed={
                    currentUser.followings
                      ? currentUser.followings.includes(twister.firebaseId)
                      : false
                  }
                />
              </div>
              <div className="col-9">
                <TwistsList
                  twistsList={twisterTwistList}
                  error={errorTwisterTwistsMessage}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.authReducer.authenticated,
    twister: state.twisterReducer.twister,
    errorTwisterMessage: state.twisterReducer.errorTwisterMessage,
    twisterTwistList: state.twisterReducer.twisterTwistList,
    errorTwisterTwistsMessage: state.twisterReducer.errorTwisterTwistsMessage,
    currentUser: state.userReducer.currentUser
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getTwisterData: twisterUsername =>
      dispatch(getTwisterData(twisterUsername)),
    getUserData: currentUserId => dispatch(getUserData(currentUserId))
  };
}

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  requireAuth
)(TwisterProfile);
