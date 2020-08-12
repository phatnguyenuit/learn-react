import React, { Component } from 'react';
import ThemeContext from '../../context/ThemeContext';

export default class UseContext extends Component {
  static contextType = ThemeContext;

  render() {
    const { color } = this.context;
    return (
      <span style={{ color }}>Hello React Context! (color = {color})</span>
    );
  }
}

// Or
// UseContext.contextType = ThemeContext
