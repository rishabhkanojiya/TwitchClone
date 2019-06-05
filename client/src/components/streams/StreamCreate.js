import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends Component {
  renderOutput = ({ input, label }) => {
    return (
      <div className="form-group">
        <label htmlFor="">{label}</label>
        <input
          {...input}
          type="text"
          className="form-control"
          aria-describedby="helpId"
          placeholder=""
        />
        <small id="helpId" className="form-text text-muted">
          Help text
        </small>
      </div>
    );
  };

  onSubmit = formValues => {
    console.log(formValues);
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-5">
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
              <div>
                <h2>Create Stream</h2>
              </div>
              <hr />
              <Field name="title" component={this.renderOutput} label="Title" />
              <Field
                name="description"
                component={this.renderOutput}
                label="Description"
              />
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default reduxForm({
  form: "streamCreate"
})(StreamCreate);
