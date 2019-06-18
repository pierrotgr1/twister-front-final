import React, { Component } from "react";

class PostTwist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  handleChange = event => {
    this.setState({
      content: event.target.value
    });
  };

  handlePostTwist = event => {
    event.preventDefault();
    let newTwist = {
      content: this.state.content
    };
    fetch(`http://localhost:8081/api/twists/${this.props.authenticated}/new`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTwist)
    })
      .then(res => res.json())
      .then(res => res)
      .catch(err => err);
  };

  render() {
    return (
      <div className="post-twist mb-4">
        <form
          onSubmit={this.handlePostTwist}
          className="d-flex align-items-start"
        >
          <div className="form-group flex-grow-1">
            <textarea
              onChange={this.handleChange}
              value={this.state.content}
              className="form-control"
              placeholder="What's up today ?"
            />
          </div>
          <button type="submit" className="post-twist-btn btn px-4 py-2 ml-3">
            Post twist
          </button>
        </form>
      </div>
    );
  }
}

export default PostTwist;
