import React from "react";
import { Link } from 'react-router-dom';
import logo from "../images/logo.png";

const Login = () => {
  return(
    <div className="login container d-flex flex-column align-items-center">
      <div className="logo">
        <img src={logo} alt=""/>
      </div>

      <h1 className="logo-title">TWISTER</h1>

      <h2>Welcome to Twister!</h2>
      <p>Already a member?</p>
      <Link to='/signin' className='btn btn-lg signin-btn signIn-btn'>Sign in</Link>
      <p>New to Twister?</p>
      <Link to='/signup' className='btn btn-lg signup-btn'>Create account</Link>
    </div>
  );
};

export default Login;
