import React, { Component } from "react";

class Timer extends Component {
  state = { starting: false, time: 0, timerID: undefined };

  componentWillUnmount() {
    this.handleStopTimer();
  }

  handleStartTimer = () => {
    const timerID = setInterval(() => {
      this.setState((oldState) => ({ time: oldState.time + 1 }));
    }, 1);
    this.setState({ starting: true, timerID });
  };

  handleStopTimer = () => {
    this.setState({ starting: false });
    const { timerID } = this.state;
    clearInterval(timerID);
  };

  handleResetTimer = () => {
    this.handleStopTimer();
    this.setState({ time: 0 });
  };

  render() {
    const { starting, time } = this.state;
    return (
      <div>
        <p>{formatTime(time)}</p>
        {starting && <button onClick={this.handleStopTimer}>Stop</button>}
        {!starting && <button onClick={this.handleStartTimer}>Start</button>}
        <button onClick={this.handleResetTimer}>Reset</button>
      </div>
    );
  }
}

function formatTime(time) {
  let result = "";
  let hour = 0,
    minute = 0,
    second = 0,
    millisecond = 0;

  hour = Math.floor(time / 360000);
  time = time - hour * 360000;
  minute = Math.floor(time / 6000);
  time = time - minute * 6000;
  second = Math.floor(time / 100);
  time = time - second * 100;
  millisecond = time;

  result = `${paddingNumber(hour)}:${paddingNumber(minute)}:${paddingNumber(
    second,
  )}.${paddingNumber(millisecond)}`;

  return result;
}

function paddingNumber(number) {
  if (number < 10) {
    return "0" + number;
  }

  return number + "";
}

export default Timer;
