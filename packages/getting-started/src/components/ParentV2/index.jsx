import React, { Component } from 'react';

export default class Parent extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        I'm parent. Here's my callback children:
        <div>{children('Executed from parent')}</div>
      </div>
    );
  }
}
