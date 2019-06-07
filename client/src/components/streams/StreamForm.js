import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends Component {
  renderError = ({ error, touched }) => {
    if (touched && error) {
      return error;
    }
  };
  renderOutput = ({ input, label, meta }) => {
    return (
      <div className="form-group">
        <label htmlFor="">{label}</label>
        <input
          {...input}
          type="text"
          className="form-control"
          aria-describedby="helpId"
          placeholder=""
          autoComplete="off"
        />

        <small id="helpId" className="form-text text-danger ">
          {this.renderError(meta)}
        </small>
      </div>
    );
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-8 col-sm-5">
            <form
              onSubmit={this.props.handleSubmit(formValues =>
                this.props.onSubmit(formValues)
              )}
            >
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

const validate = formValues => {
  const error = {};

  if (!formValues.title) {
    error.title = "You must enter a title";
  }
  if (!formValues.description) {
    error.description = "You must enter a description";
  }

  return error;
};

export default reduxForm({
  form: "streamForm",
  validate
})(StreamForm);
