import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "44004226974-bfth7irh4mrafse0kev65oo6qanr87nt.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        })
        .catch(err => {
          console.log(err);
        });
    });
  }

  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn();
    } else {
      this.props.signOut();
    }
  };

  // onAuthChange = () => {
  //   this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  //   // ^ to get status without refreshing
  // };

  renderAuthStatus = () => {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <div>
          <a
            onClick={() => {
              this.auth.signOut();
            }}
            className="btn btn-danger text-light"
            role="button"
          >
            <i className="fa fa-google pr-3" aria-hidden="true" />
            Sign Out
          </a>
        </div>
      );
    } else {
      return (
        <div>
          <a
            onClick={() => {
              this.auth.signIn();
            }}
            className="btn btn-danger text-light"
            role="button"
          >
            <i className="fa fa-google pr-3" aria-hidden="true" />
            Sign In With Google
          </a>
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        <h5>{this.renderAuthStatus()}</h5>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(
  mapStateToProps,
  { signIn, signOut }
)(GoogleAuth);
