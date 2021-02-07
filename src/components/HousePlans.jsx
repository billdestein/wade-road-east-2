import React, { Component } from 'react';
import './HousePlans.css';

export default class HousePlans extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    console.log("HousePlans");
  }

  render() {
    return (
      <div>HousePlans</div>
    );
  }
}
