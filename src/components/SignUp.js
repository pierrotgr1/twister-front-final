import React,{ Component }  from 'react';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../redux/actions/auth';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      isEmpty: false,
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    var { username, email, password } = this.state;
    if (username !== "" && email !== "" && password !== "") {
      this.setState({ isEmpty: false });
      var formData = { username, email, password };

      this.props.signup(formData, () => {
        this.props.history.push("/signup");
      });
    } else {
      this.setState({
        isEmpty: true
      });
    }
  }

  render() {
    const { errorMessage } = this.props;

    return(
      <div className="login container d-flex flex-column align-items-center">
        <div className="logo">
          <img src={logo} alt=""/>
        </div>

        <h1 className="logo-title">TWISTER</h1>

        {this.state.isEmpty && (
          <div className="alert alert-warning" role="alert">
           Oops seems you forgot some fields :(
          </div>
        )}

        {errorMessage !== undefined ? (
          <>
            <h4>{errorMessage}</h4>
            <Link to='/signin'>Go to sign in page</Link>
          </>
        ) : (
          <>
            <h2 className="h2">Create an account</h2>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input onChange={this.handleChange} value={this.state.username} name="username" type="text" className="form-control" id="username" placeholder="Choose a cool username" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input onChange={this.handleChange} value={this.state.email} name="email" type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="you@youremail.com" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input onChange={this.handleChange} value={this.state.password} name="password" type="password" className="form-control" id="password" placeholder="Choose a strong password"/>
                <small id="passwordHelp" className="form-text text-muted">Password must have at least 8 caracters, 1 uppercase letter,<br/> 1 lowercase letter and 1 special caracter.</small>
              </div>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="cgu" required/>
                <label className="form-check-label" htmlFor="cgu">I agree to Twister's terms of use</label>
              </div>
              <button type="submit" className="btn btn-lg signup-btn w-100">Create account</button>
            </form>
            <Link to='/' className="mt-2 link">Back to welcome page</Link>
          </>
        )}

      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    errorMessage: state.authReducer.errorMessage,
  };
}

export default connect(mapStateToProps, actions)(SignUp);
