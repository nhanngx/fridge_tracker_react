import React from 'react';
import LoginFlow from '../LoginFlow';
import DashboardFlow from '../DashboardFlow';

class MainFlow extends React.Component {
  constructor() {
    super();

    this.state = {
      isUserLoggedIn: false
    };
  }

  componentDidMount() {
    this.checkIfLoggedIn();
  }

  checkIfLoggedIn() {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn === "true") {
      this.setState({
        isUserLoggedIn: true
      });
    }
  }

  render = () => {
    return (
      <React.Fragment>
        <div>{"isLoggedIn in localStorage is: " + localStorage.getItem("isLoggedIn")}</div>
        <div>{"isUserLoggedIn in state is: " + this.state.isUserLoggedIn}</div>
        {this.state.isUserLoggedIn ? <DashboardFlow /> : <LoginFlow />}
      </React.Fragment>
    );
  }
}

export default MainFlow;