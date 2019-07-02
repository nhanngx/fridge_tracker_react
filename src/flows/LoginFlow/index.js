import React from 'react';

class LoginFlow extends React.Component {
  constructor() {
    super();

    this.state = {

    };
  }

  onLoginClick() {
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "/";
  }

  render = () => {
    return (
      <React.Fragment>
        <button onClick={this.onLoginClick}>click to log in</button>
      </React.Fragment>
    );
  }
}

export default LoginFlow;