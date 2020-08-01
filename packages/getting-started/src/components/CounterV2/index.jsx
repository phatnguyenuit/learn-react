import React, { Component } from 'react';

export default class CounterV2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log(
      'Component did mount. It means your UI has been rendered on the browser.',
    );
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(
      'Component did update. It means your UI has been re-rendered on the browser.',
    );
    console.log('Updated props | state');
    console.log(prevProps, this.props);
    console.log(prevState, this.state);
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

  handleIncreaseTwoTimes = () => {
    this.handleClickIncrease();
    this.handleClickIncrease();
  };

  handleDecreaseTwoTimes = () => {
    this.handleClickDecrease();
    this.handleClickDecrease();
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <div>
          <button onClick={this.handleClickDecrease}>Decrease</button>{' '}
          <button onClick={this.handleIncreaseTwoTimes}>Increase</button>{' '}
          <button onClick={this.handleIncreaseTwoTimes}>
            Increase 2 times
          </button>{' '}
          <button onClick={this.handleDecreaseTwoTimes}>
            Decrease 2 times
          </button>
        </div>
        <p>{count}</p>
      </div>
    );
  }
}
