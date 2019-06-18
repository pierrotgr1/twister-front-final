import React, { Component } from "react";
import { connect } from "react-redux";
import { follow, unfollow } from "../redux/actions/user";

class ProfileCard extends Component {
  handleFollow = () => {
    this.props.follow(this.props.currentUserFbId, this.props.user.firebaseId);
  };

  handleUnfollow = () => {
    this.props.unfollow(this.props.currentUserFbId, this.props.user.firebaseId);
  };

  render() {
    let { user, path, isFollowed } = this.props;

    return (
      <>
        <div className="profile-card">
          <div className="profile-pic">
            <i className="fas fa-user-circle" />
          </div>
          <div className="profile-info">
            <h3>{user && user.username}</h3>
            {/*<p>Twists: 22</p>*/}

            <p>Followers: {user.followers && user.followers.length}</p>
            <p>Followings: {user.followings && user.followings.length}</p>
          </div>
        </div>
        {path.includes("twister-profile") && (
          <button
            onClick={isFollowed ? this.handleUnfollow : this.handleFollow}
            className="btn profile-card-btn mt-3"
          >
            {isFollowed ? "Unfollow" : "Follow"}
          </button>
        )}
      </>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    follow: (currentUserFbId, twisterToFollowFbId) =>
      dispatch(follow(currentUserFbId, twisterToFollowFbId)),
    unfollow: (currentUserFbId, twisterToUnfollowFbId) =>
      dispatch(unfollow(currentUserFbId, twisterToUnfollowFbId))
  };
}

export default connect(
  null,
  mapDispatchToProps
)(ProfileCard);
