import React, { Component } from "react";
import { connect } from 'react-redux';

export default ChildComponent => {
  class ComposedComponent extends Component {
    componentDidMount(){
      this.shouldRedirect();
    }

    componentDidUpdate(){
      this.shouldRedirect();
    }

    shouldRedirect() {
      if(!this.props.auth){
        this.props.history.push('/');
      }
    }

    render() {
      return(
        <ChildComponent {...this.props} />
      )
    }
  }

  function mapStateToProps(state){
    return {
      auth: state.authReducer.authenticated
    };
  }

  return connect(mapStateToProps)(ComposedComponent);
};
