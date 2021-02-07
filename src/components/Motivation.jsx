import React, { Component } from 'react';
import './Motivation.css';

export default class Motivation extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    console.log("Motivation");
  }

  render() {
    return (
      <div>Motivation</div>
    );
  }
}
