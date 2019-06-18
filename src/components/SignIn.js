import React, { Component } from "react";
import logo from "../images/logo.png";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../redux/actions/auth';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isEmpty: false,
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    var { email, password } = this.state;
    if (email !== "" && password !== "") {
      this.setState({ isEmpty: false });
      var formData = { email, password };
      this.props.signin(formData, () => {
        this.props.history.push('/');
      });
    } else {
      this.setState({ isEmpty: true });
    }
  };

  render(){
    return(
      <div className="login container d-flex flex-column align-items-center">
        <div className="logo">
          <img src={logo} alt=""/>
        </div>

        <h1 className="logo-title">TWISTER</h1>

        <h1>Welcome back!</h1>

        {this.state.isEmpty && (
          <div className="alert alert-warning" role="alert">
           Oops seems you forgot some fields :(
          </div>
        )}

        {this.props.errorMessage !== undefined && (
          <div className="alert alert-danger" role="alert">
            {this.props.errorMessage}
          </div>
        )}

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input onChange={this.handleChange} name="email" type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="you@youremail.com" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input onChange={this.handleChange} name="password" type="password" className="form-control" id="password" placeholder="Enter your password"/>
          </div>
          <button type="submit" className="btn btn-lg signup-btn w-100 mt-3">Sign in</button>
        </form>
        <Link to='/' className="mt-2 link">Back to welcome page</Link>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    errorMessage: state.authReducer.errorMessage
  };
}

export default connect(mapStateToProps, actions)(SignIn);
