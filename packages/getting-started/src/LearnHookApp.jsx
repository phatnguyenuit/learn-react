import React, { useState, useCallback } from 'react';
import useDebounce from './hooks/useBebounce';
import useThrottle from './hooks/useThrottle';
import useDebounceCallback from './hooks/useDebounceCallback';

export default function LearnHookApp() {
  const [text, setText] = useState('');
  const [clicks, setClicks] = useState(0);
  const [throttledClicks, setThrottledClicks] = useState(0);
  const [debouncedClicks, setDebouncedClicks] = useState(0);
  const debouncedText = useDebounce(text, 500);
  const handleChangeText = useCallback(e => {
    const { value } = e.target;
    setText(value);
  }, []);

  const enhancedThrottleClick = useThrottle(
    () => setThrottledClicks(prev => prev + 1),
    500,
  );

  const enhancedDebounceClick = useDebounceCallback(
    () => setDebouncedClicks(prev => prev + 1),
    500,
  );

  const handleClick = useCallback(
    e => {
      setClicks(prev => prev + 1);
      enhancedThrottleClick();
      enhancedDebounceClick();
    },
    [enhancedDebounceClick, enhancedThrottleClick],
  );

  return (
    <div>
      <p>Learn Hook App</p>
      <input
        autoComplete="off"
        name="search"
        value={text}
        onChange={handleChangeText}
      />{' '}
      <p>Text: {text}</p>
      <p>Searching: {debouncedText}</p>
      <button onClick={handleClick}>Click</button>
      <p>Click times: {clicks}</p>
      <p>Throttled click times: {throttledClicks}</p>
      <p>Debounced click times: {debouncedClicks}</p>
    </div>
  );
}
