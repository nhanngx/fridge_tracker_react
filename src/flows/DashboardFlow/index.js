import React from 'react';

class DashboardFlow extends React.Component {
  constructor() {
    super();

    this.state = {

    };
  }

  onLogoutClick() {
    localStorage.setItem("isLoggedIn", "false");
    window.location.href = "/";
  }

  render = () => {
    return (
      <React.Fragment>
        <div>this is the dashboard flow</div>
        <button onClick={this.onLogoutClick}>logout</button>
      </React.Fragment>
    );
  }
}

export default DashboardFlow;