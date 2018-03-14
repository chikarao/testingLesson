import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = { comment: '' };
  }

  HandleChange(event) {
    this.setState({ comment: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    // keep it from form trying to submit itself
    this.props.saveComment(this.state.comment);
    this.setState({ comment: '' });
  }
// controlled component; on change there ia new value,
//state changes and there is a new value for the component
  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)} className="comment-box">
        <h4>Add a Comment</h4>
        <textarea
          value={this.state.comment}
          onChange={this.HandleChange.bind(this)}
        />
        <div>
          <button action="submit">Submit Comment</button>
        </div>
      </form>
    );
  }
}

export default connect(null, actions)(CommentBox);
