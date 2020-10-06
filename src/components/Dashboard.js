import React, { Component } from "react";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <h1>Titanic Dashboard</h1>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link" href="/">
              Summary V.1
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Sample2">
              V.2
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Dashboard;
