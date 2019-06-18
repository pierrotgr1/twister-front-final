import React, { Component } from "react";
import { connect } from 'react-redux';
import * as actions from '../redux/actions/auth';
import { Link } from 'react-router-dom';

class SignOut extends Component {
  componentDidMount() {
    this.props.signout();
  }

  render() {
    return (
      <>
        <div>See you soon!</div>
        <Link to='/'>Go back to Login page</Link>
      </>
    );
  }
}

export default connect(null, actions)(SignOut);
