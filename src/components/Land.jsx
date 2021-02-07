import React, { Component } from 'react';
import './Land.css';

export default class Land extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    console.log("Land");
  }

  render() {
    return (
      <div>Land</div>
    );
  }
}
