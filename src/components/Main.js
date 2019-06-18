import React, { Component } from 'react';
import { connect } from 'react-redux';

import Home from './Home';
import Login from './Login';

class Main extends Component {
  renderComponent() {
    if(this.props.authenticated) {
      return <Home/>;
    } else {
      return <Login/>;
    }
  }

  render() {
    return (
      <>
        {this.renderComponent()}
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.authReducer.authenticated
  };
}

export default connect(mapStateToProps)(Main);
