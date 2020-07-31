import React, { Component } from 'react';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleClickIncrease = () => {
    const { count } = this.state;
    this.setState({
      count: count + 1,
    });
  };

  handleClickDecrease = () => {
    const { count } = this.state;
    this.setState({
      count: count - 1,
    });
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <div>
          <button onClick={this.handleClickDecrease}>Decrease</button>{' '}
          <button onClick={this.handleClickIncrease}>Increase</button>
        </div>
        <p>{count}</p>
      </div>
    );
  }
}
