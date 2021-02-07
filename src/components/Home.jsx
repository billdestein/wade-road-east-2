import React, { Component } from 'react';
import './Home.css';

export default class Home extends Component {
  async componentDidMount() {
    console.log("Home");
  }

  render() {
    return (
      <div>Home</div>
    );
  }
}
