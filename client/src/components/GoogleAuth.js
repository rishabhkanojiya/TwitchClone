import React, { Component } from "react";

class GoogleAuth extends Component {
  state = { isSignedIn: null };
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
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.onAuthChange);
        })
        .catch(err => {
          console.log(err);
        });
    });
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
    // ^ to get status without refreshing
  };

  renderAuthStatus = () => {
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn) {
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
export default GoogleAuth;
