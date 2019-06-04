import React, { Component } from "react";

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientId:
          "44004226974-13uaqlj43eb5la5u4qcon8pmm1ut8lar.apps.googleusercontent.com",
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
