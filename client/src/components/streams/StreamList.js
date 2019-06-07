import React, { Component } from "react";
import { fetchStreams } from "../../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class StreamList extends Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderAdmin = stream => {
    if (stream.userId === this.props.currentUserId) {
      return (
        <div>
          <Link
            className="btn btn-success px-4"
            to={`/streams/edit/${stream.id}`}
            role="button"
          >
            Edit
          </Link>
          <Link
            className="btn btn-danger px-3 ml-2 "
            to={`/streams/delete/${stream.id}`}
            role="button"
          >
            Delete
          </Link>
        </div>
      );
    }
  };

  renderCreate = () => {
    if (this.props.isSignedIn) {
      return (
        <div className="col-sm-8">
          <div className="d-flex w-100 justify-content-end">
            <Link
              className="btn btn-primary m-3 px-5"
              to="/streams/new"
              role="button"
            >
              Create Stream
            </Link>
          </div>
        </div>
      );
    }
  };
  renderList = () => {
    return this.props.stream.map(stream => {
      return (
        <div className="col-sm-8" key={stream.id}>
          <div className="list-group">
            <li
              href="#"
              className="list-group-item list-group-item-action flex-column align-items-start mt-2"
            >
              <div className="d-flex w-100 justify-content-between">
                <div>
                  <Link
                    to={`/streams/show/${stream.id}`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <h5 className="mb-1">{stream.title}</h5>
                  </Link>
                  <p className="mb-1">{stream.description}</p>
                </div>
                {this.renderAdmin(stream)}
              </div>
            </li>
          </div>
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
        <div>{this.renderCreate()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    stream: Object.values(state.stream),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(
  mapStateToProps,
  { fetchStreams }
)(StreamList);
