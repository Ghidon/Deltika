import React, { Component } from "react";
import { findSampleData } from "./Api";
import Explanation from "./Explanations";
import "./CSS/Sample.css";

class Sample2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      samplePclass: "",
      sampleSex: "",
      sampleAge: "",
      sampleFare: "",
      sampleEmbarked: "",
      sampleIsAlone: "",
      sampleSurvived: "",
      explanationPclass: "",
      explanationSex: "",
      explanationAge: "",
      explanationFare: "",
      explanationEmbarked: "",
      explanationIsAlone: "",
      explanationSurvived: "",
      toMatchFare: "",
    };
  }

  async componentDidMount() {
    await this.fetchSampleData();
  }

  fetchSampleData() {
    findSampleData().then((res) => {
      const data = res.data.sample[0];
      if (data.sex === 1) {
        this.setState({ sampleSex: "female" });
      } else {
        this.setState({ sampleSex: "male" });
      }
      if (data.embarked === 0) {
        this.setState({ sampleEmbarked: "no" });
      } else {
        this.setState({ sampleEmbarked: "yes" });
      }
      if (data.IsAlone === 0) {
        this.setState({ sampleIsAlone: "no" });
      } else {
        this.setState({ sampleIsAlone: "yes" });
      }
      if (data.survived === 0) {
        this.setState({ sampleSurvived: "no" });
      } else {
        this.setState({ sampleSurvived: "yes" });
      }
      this.setState({
        samplePclass: data.pclass,
        sampleAge: data.age,
        sampleFare: data.fare,
      });
      this.calculations(this.state);
    });
  }
  callbackExplanationState = (pclass, sex, age, fare, embark, IsAlone) => {
    this.setState({ explanationPclass: pclass });
    this.setState({ explanationSex: sex });
    this.setState({ explanationAge: age });
    this.setState({ explanationFare: fare });
    this.setState({ explanationEmbarked: embark });
    this.setState({ explanationIsAlone: IsAlone });
  };

  calculations(state) {
    console.log(state);
    //class
    const classPercent = (state.explanationPclass / 100) * state.samplePclass;
    let classDifference = classPercent.toFixed(2);
    let suggestedClass = +state.samplePclass + +classDifference;
    this.setState({ toMatchClass: suggestedClass });
    //fare
    const farePercent = (state.explanationFare / 100) * state.sampleFare;
    let fareDifference = farePercent.toFixed(2);
    let suggestedFare = (+state.sampleFare + +fareDifference).toFixed(2);
    this.setState({ toMatchFare: suggestedFare });
    //age
    const agePercent = (state.explanationAge / 100) * state.sampleAge;
    let ageDifference = agePercent.toFixed(2);
    let suggestedAge = +state.sampleAge + +ageDifference;
    this.setState({ toMatchAge: suggestedAge });
  }

  populateSuggestion() {}

  render() {
    const {
      toMatchFare,
      toMatchClass,
      toMatchAge,
      explanationEmbarked,
      explanationSex,
      explanationIsAlone,
    } = this.state;
    return (
      <div className="container d-flex justify-content-around flex-wrap">
        <div className="col-4">
          <h4>Sample Data</h4>
          <ul className="list-group list-group-horizontal-lg sampleTable">
            <il className="list-group-item d-flex justify-content-between">
              Passenger Class:{" "}
              <span className="tableValue">{this.state.samplePclass}</span>
            </il>
            <il className="list-group-item d-flex justify-content-between">
              Passenger Sex:{" "}
              <span className="tableValue">{this.state.sampleSex}</span>
            </il>
            <il className="list-group-item d-flex justify-content-between">
              <span>Passenger Age: </span>
              <span className="tableValue">{this.state.sampleAge}</span>
            </il>
            <il className="list-group-item d-flex justify-content-between">
              Paid Fare:{" "}
              <span className="tableValue">{this.state.sampleFare}</span>
            </il>
            <il className="list-group-item d-flex justify-content-between">
              Did Embark:{" "}
              <span className="tableValue">{this.state.sampleEmbarked}</span>
            </il>
            <il className="list-group-item d-flex justify-content-between">
              Was alone:{" "}
              <span className="tableValue">{this.state.sampleIsAlone}</span>
            </il>
            <il className="list-group-item d-flex justify-content-between">
              Survived:{" "}
              <span className="tableValue">{this.state.sampleSurvived}</span>
            </il>
          </ul>
        </div>
        <div className="col-4">
          <Explanation parentCallback={this.callbackExplanationState} />
        </div>
        <div className="col-4">
          <h4>Final Goal</h4>
          <ul className="list-group list-group-horizontal-lg result2">
            <il className="list-group-item d-flex justify-content-between">
              Class to match: <span className="finalValue">{toMatchClass}</span>
            </il>
            <il className="list-group-item d-flex justify-content-between">
              Sex: <span className="finalValue">{explanationSex}</span>
            </il>
            <il className="list-group-item d-flex justify-content-between">
              Age to match: <span className="finalValue">{toMatchAge}</span>
            </il>
            <il className="list-group-item d-flex justify-content-between">
              Fare to match :<span className="finalValue">{toMatchFare}</span>
            </il>
            <il className="list-group-item d-flex justify-content-between">
              Embark to match:{" "}
              <span className="finalValue d-flex justify-content-between">
                {explanationEmbarked}
              </span>
            </il>
            <il className="list-group-item d-flex justify-content-between">
              Was alone:{" "}
              <span className="finalValue">{explanationIsAlone}</span>
            </il>
          </ul>
        </div>
        {/* <div className="result">
          Fare to match : <span className="finalValue">{toMatchFare}</span>
        </div>
        <div className="result">
          Age to match : <span className="finalValue">{toMatchAge}</span>
        </div>
        <div className="result">
          Class to match : <span className="finalValue">{toMatchClass}</span>
        </div>
        <div className="result">
          Embark to match :{" "}
          <span className="finalValue">{explanationEmbarked}</span>
        </div>
        <div className="result">
          Sex to match : <span className="finalValue">{explanationSex}</span>
        </div>
        <div className="result">
          Was Alone : <span className="finalValue">{explanationIsAlone}</span>
        </div> */}
      </div>
    );
  }
}

export default Sample2;
