import React, { Component } from 'react';

export default class CounterV2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleClickIncrease = () => {
    // Use updater to return new state from old state
    this.setState(oldState => ({
      count: oldState.count + 1,
    }));
  };

  handleClickDecrease = () => {
    this.setState(oldState => ({
      count: oldState.count - 1,
    }));
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
