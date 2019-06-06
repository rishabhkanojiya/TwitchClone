import React, { Component } from "react";
import { fetchStreams } from "../../actions";
import { connect } from "react-redux";

class StreamList extends Component {
  componentDidMount() {
    this.props.fetchStreams();
  }
  renderAdmin = userId => {
    if (userId === this.props.currentUserId) {
      return (
        <div>
          <button type="button" className="btn btn-success px-4 ">
            Edit
          </button>
          <button type="button" className="btn btn-danger px-3 ml-2">
            Delete
          </button>
        </div>
      );
    }
  };

  renderList = () => {
    return this.props.stream.map(({ id, title, description, userId }) => {
      return (
        <div className="list-group" key={id}>
          <a
            href="#"
            className="list-group-item list-group-item-action flex-column align-items-start mt-2"
          >
            <div className="d-flex w-100 justify-content-between">
              <div>
                <h5 className="mb-1">{title}</h5>
                <p className="mb-1">{description}</p>
              </div>
              {this.renderAdmin(userId)}
            </div>
          </a>
        </div>
      );
    });
  };
  render() {
    return (
      <div>
        <div>
          <h2>Streams</h2>
          <hr />
        </div>
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    stream: Object.values(state.stream),
    currentUserId: state.auth.userId
  };
};

export default connect(
  mapStateToProps,
  { fetchStreams }
)(StreamList);
