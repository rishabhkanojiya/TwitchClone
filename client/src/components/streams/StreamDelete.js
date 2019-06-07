import React, { Component } from "react";
import { connect } from "react-redux";
import Modal from "../Modal";
import history from "../../history";
import { fetchStream, deleteStream } from "../../actions";

class StreamDelete extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = () => {
    this.props.deleteStream(this.props.stream.id);
  };

  action = () => {
    return (
      <>
        <button
          type="button"
          className="btn btn-danger"
          onClick={this.onSubmit}
          data-dismiss="modal"
        >
          Delete
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          data-dismiss="modal"
        >
          Close
        </button>
      </>
    );
  };

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <div className="row">
          <h2>Delete Stream</h2>
        </div>
        <hr />
        <div className="row mb-4">
          <h4>{`Title : ${this.props.stream.title}`}</h4>
        </div>
        <div className="row mb-4">
          <h4>{`Description : ${this.props.stream.description}`}</h4>
        </div>
        <div className="row">
          <div className="row d-flex w-100 justify-content-start">
            <div className="col-sm-8">
              <button
                type="button"
                className="btn btn-danger px-4"
                data-toggle="modal"
                data-target="#modelId"
              >
                Launch
              </button>
            </div>
          </div>
        </div>

        <Modal
          title="Delete Stream"
          content={`Are you sure you want to delete this '${
            this.props.stream.title
          }'`}
          action={this.action()}
          onDismiss={() =>
            history.push(`/streams/delete/${this.props.stream.id}`)
          }
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.stream[ownProps.match.params.id]
  };
};

export default connect(
  mapStateToProps,
  { fetchStream, deleteStream }
)(StreamDelete);
