import React, { Component } from "react";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Sample from "./components/Titanic/Sample";
import Sample2 from "./components/Titanic/Sample2";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Dashboard />
          <Route exact path="/" component={Sample} />
          <Route exact path="/Sample2" component={Sample2} />

          {/* <Route exact path="/table" component={Table} /> */}
        </div>
      </Router>
    );
  }
}

export default App;
