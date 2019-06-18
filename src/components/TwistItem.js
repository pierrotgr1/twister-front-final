import React, { Component } from "react";
import { connect } from "react-redux";
import { likeOneTwist } from "../redux/actions/twist";
import { unlikeOneTwist } from "../redux/actions/twist";

class TwistItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLiked: false
    };
  }

  handleLike = () => {
    this.setState({
      isLiked: !this.state.isLiked
    });
    if (this.state.isLiked) {
      this.props.unlikeOneTwist(this.props.twist._id);
    } else {
      this.props.likeOneTwist(this.props.twist._id, this.props.currentUserFbId);
    }
  };

  render() {
    let { twist } = this.props;
    console.log("twist", twist);

    let likeNumber = twist.likersFbId.length;
    console.log("likeNumber", twist.likersFbId.length);

    return (
      <div className="twist-item mb-3">
        <div className="row">
          <div className="profile-pic col-2">
            <i className="fas fa-user-circle" />
          </div>
          <div className="twist-item-text col-10">
            <h4>{twist.twisterName ? twist.twisterName : "Username"}</h4>
            <p>{twist.content ? twist.content : ""}</p>
            <div className="twist-item-likes">
              <i
                className={`fa${this.state.isLiked ? "s" : "r"} fa-heart mr-2`}
                onClick={this.handleLike}
              />
              <span>{likeNumber}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUserFbId: state.authReducer.authenticated
  };
}

function mapDispatchToProps(dispatch) {
  return {
    likeOneTwist: (twist_id, currentUserFbId) =>
      dispatch(likeOneTwist(twist_id, currentUserFbId)),
    unlikeOneTwist: currentTwistId => dispatch(unlikeOneTwist(currentTwistId))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TwistItem);
