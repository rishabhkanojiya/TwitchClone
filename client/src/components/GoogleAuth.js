import React, { Component } from "react";

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientId:
          "44004226974-bfth7irh4mrafse0kev65oo6qanr87nt.apps.googleusercontent.com",
        scope: "email"
      });
    });
  }

  render() {
    return (
      <div>
        <h5>Google Auth</h5>
      </div>
    );
  }
}
export default GoogleAuth;
