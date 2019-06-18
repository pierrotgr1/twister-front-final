import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import logo from "../images/logo.png";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      isSearching: false
    };
  }

  handleSearch = event => {
    event.preventDefault();
    if (this.state.searchText !== "") {
      this.setState({
        isSearching: true
      });
    }
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <>
        {this.state.isSearching ? (
          <Redirect
            to={{
              pathname: "/twister-profile",
              search: `?twister=${this.state.searchText}`
            }}
          />
        ) : (
          <nav className="navbar navbar-expand-lg navbar-light bg-light justify-between px-5 py-3">
            <Link to="/" className="navbar-brand d-flex align-items-center">
              <div className="logo-navbar mr-2">
                <img src={logo} alt="" />
              </div>
              <h1>Twister</h1>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#mainMenu"
              aria-controls="mainMenu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="mainMenu">
              <form
                onSubmit={this.handleSearch}
                className="form-inline my-2 my-lg-0 searchForm"
              >
                <input
                  onChange={this.handleChange}
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search your friends :)"
                  aria-label="Search"
                  value={this.state.searchText}
                  name="searchText"
                />
                <button className="btn my-2 my-sm-0" type="submit">
                  Search
                </button>
              </form>

              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="my-profile" className="nav-link">
                    My Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/signout" className="nav-link logout-btn py-2 px-3">
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        )}
      </>
    );
  }
}

export default NavBar;
