import React, { Component } from "react";
import history from "../../history";
import { fetchStream } from "../../actions";
import { connect } from "react-redux";

class StreamShow extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  renderList = () => {
    return (
      <div className="card ">
        <div className="row justify-content-center">
          <div className="col-sm-4">
            <img
              src="https://i.ytimg.com/vi/d_T5P-zIIAs/maxresdefault.jpg"
              alt=""
              style={{
                height: "90px",
                width: "140px",
                margin: "10px",
                padding: "5px",
                backgroundSize: "cover"
              }}
            />
          </div>
          <div className="col-sm-8">
            <div className="card-body ">
              <h5 className="card-title">Title</h5>
              <p className="card-text">Text</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  renderCard = () => {
    return (
      <div class="card">
        <img
          class="card-img-top"
          src="https://i.ytimg.com/vi/d_T5P-zIIAs/maxresdefault.jpg"
          alt=""
        />
        <div class="card-body">
          <h4 class="card-title">{this.props.stream.title}</h4>
          <p class="card-text">{this.props.stream.description}</p>
        </div>
      </div>
    );
  };
  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <div className="row">
          <div className="col-sm-8">{this.renderCard()}</div>
          <div className="col-sm-4">{this.renderList()}</div>
        </div>
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
  { fetchStream }
)(StreamShow);
