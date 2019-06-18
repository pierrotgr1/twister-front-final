import React, { Component } from "react";
import { connect } from "react-redux";
import { getUserData } from "../redux/actions/user";
import { getUserTwistsList } from "../redux/actions/twist";

import NavBar from "./NavBar";
import PostTwist from "./PostTwist";
import ProfileCard from "./ProfileCard";
import TwistsList from "./TwistsList";

class Home extends Component {
  componentDidMount() {
    this.props.getUserData(this.props.authenticated);
    this.props.getUserTwistsList(this.props.authenticated);
  }

  render() {
    let {
      currentUser,
      authenticated,
      currentUserTwistsList,
      errorTwistsMessage
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
              <PostTwist authenticated={authenticated} />
              <TwistsList
                twistsList={currentUserTwistsList}
                error={errorTwistsMessage}
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
    currentUserTwistsList: state.twistReducer.currentUserTwistsList,
    errorTwistsMessage: state.twistReducer.errorTwistsMessage
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getUserData: currentUserFbid => dispatch(getUserData(currentUserFbid)),
    getUserTwistsList: currentUserFbid =>
      dispatch(getUserTwistsList(currentUserFbid))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
