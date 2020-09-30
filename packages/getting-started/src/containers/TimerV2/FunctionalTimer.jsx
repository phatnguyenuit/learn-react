import React, { useState } from 'react';

function FunctionalTimer() {
  const [state, setState] = useState({
    starting: false,
    time: 0,
    timerID: undefined,
    error: false,
  });

  const handleStartTimer = () => {
    const timerID = setInterval(() => {
      setState(oldState => ({ ...oldState, time: oldState.time + 1 }));
    }, 1);
    setState(oldState => ({ ...oldState, starting: true, timerID }));
  };

  const handleStopTimer = () => {
    setState(oldState => ({ ...oldState, starting: false }));
    const { timerID } = state;
    clearInterval(timerID);
  };

  const handleResetTimer = () => {
    handleStopTimer();
    setState(oldState => ({ ...oldState, time: 0 }));
  };

  const { time, starting} = state;

  return (
    <div>
      <p>{formatTime(time)}</p>
      {starting && <button onClick={handleStopTimer}>Stop</button>}
      {!starting && <button onClick={handleStartTimer}>Start</button>}
      <button onClick={handleResetTimer}>Reset</button>
    </div>
  );
}

function formatTime(time) {
  let result = '';
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
    return '0' + number;
  }

  return number + '';
}

export default FunctionalTimer;
