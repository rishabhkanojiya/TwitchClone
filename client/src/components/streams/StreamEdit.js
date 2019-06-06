import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";

class StreamEdit extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>edit</h1>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.stream[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchStream }
)(StreamEdit);
