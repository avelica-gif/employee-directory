//this is where we manage state

import React, { Component } from "react";
// import axios from "axios";
import Api from "../utils/API";

export default class Wrapper extends Component {
  state = {
    employees: [{}],
  };

  componentDidMount() {
    Api.loadUsers().then((results) => {
      console.log(results);
      this.setState({
        employees: results.data.results,
      });
    });
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    );
  }
}
