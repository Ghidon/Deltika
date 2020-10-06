import React, { Component } from "react";
import { findExplanationData } from "./Api";
import "./CSS/Explanation.css";

class Explanations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pclass: "",
      sex: "",
      age: "",
      fare: "",
      embarked: "",
      IsAlone: "",
    };
  }

  async componentDidMount() {
    this.fetchExplanationData();
  }

  fetchExplanationData() {
    findExplanationData().then((res) => {
      const data = res.data.explanations;

      let filteredData = []; //filtering relevant surving cases
      Object.keys(data).forEach(function (key) {
        if (data[key].survived === 100) {
          filteredData.push(data[key]);
        }
      });

      filteredData.forEach((element) => {
        if (!this.state.pclass) {
          this.setState({ pclass: element.pclass });
        }
        if (this.state.pclass === undefined) {
          this.setState({ pclass: "Irrelevant" });
        }
        if (!this.state.sex) {
          this.setState({ sex: element.sex });
        }
        if (this.state.sex === undefined) {
          this.setState({ sex: "Irrelevant" });
        }
        if (!this.state.age) {
          this.setState({ age: element.age });
        }
        if (this.state.age === undefined) {
          this.setState({ age: "Irrelevant" });
        }
        if (!this.state.fare) {
          this.setState({ fare: element.fare });
        }
        if (this.state.fare === undefined) {
          this.setState({ fare: "Irrelevant" });
        }
        if (element.embarked === 0) {
          this.setState({ embarked: "no" });
        } else {
          this.setState({ embarked: "yes" });
        }
        // if (!this.state.embarked) {
        //   this.setState({ embarked: element.embarked });
        // }
        if (!this.state.IsAlone) {
          this.setState({ IsAlone: element.IsAlone });
        }
        if (this.state.IsAlone === undefined) {
          this.setState({ IsAlone: "Irrelevant" });
        }
      });
      this.sendData();
    });
  }

  sendData = () => {
    this.props.parentCallback(
      this.state.pclass,
      this.state.sex,
      this.state.age,
      this.state.fare,
      this.state.embarked,
      this.state.IsAlone
    );
  };

  render() {
    return (
      <div>
        <h4>Suggested Data</h4>
        <ul className="list-group list-group-horizontal-lg explanationTable">
          <il className="list-group-item d-flex justify-content-between">
            Class:{" "}
            <span className="tableExplanationValue">{this.state.pclass}%</span>
          </il>
          <il className="list-group-item d-flex justify-content-between">
            Sex: <span className="tableExplanationValue">{this.state.sex}</span>
          </il>
          <il className="list-group-item d-flex justify-content-between">
            Age:{" "}
            <span className="tableExplanationValue">{this.state.age}%</span>
          </il>
          <il className="list-group-item d-flex justify-content-between">
            Fare:{" "}
            <span className="tableExplanationValue">{this.state.fare}%</span>
          </il>
          <il className="list-group-item d-flex justify-content-between">
            Embark:{" "}
            <span className="tableExplanationValue">{this.state.embarked}</span>
          </il>
          <il className="list-group-item d-flex justify-content-between">
            Was alone:{" "}
            <span className="tableExplanationValue">{this.state.IsAlone}</span>
          </il>
        </ul>
      </div>
    );
  }
}

export default Explanations;
