import React, { useState, useEffect } from 'react';
import { createStore } from 'redux';
import './styles.css';

// General action includes type and payload (data sent in action)

// reducer is pure function receives prevState/currentState and action
// returns new state
const reducer = (prevState, action) => {
  const { type, payload } = action;
  console.log(
    `Dispatching action has type = '${type}' with payload:\n${JSON.stringify(
      payload,
      null,
      2,
    )}`,
  );
  switch (type) {
    case 'increase': {
      const { count = 1 } = payload;
      return prevState + count;
    }
    case 'decrease': {
      const { count = 1 } = payload;
      return prevState - count;
    }
    default:
      return prevState;
  }
};

// create a redux store with createStore method
// which receives reducer, initial state, and enhancers (middlewares)
const store = createStore(reducer, 0);

// store.getStet() => current state of store

// store.dispatch({type, payload}) => Trigger action with payload (optional)
// to store and make reducer run => new state

// store.subscribe(listerner) => unsubscribe func;
// Invoked after every single dispatch

const SimpleRedux = () => {
  const initialState = store.getState();
  const [value, setValue] = useState(initialState);
  const handleIncrease = () => {
    // Use store.dispatch to invoke an action to reducer
    store.dispatch({
      type: 'increase',
      payload: {
        count: 1,
      },
    });
  };

  const handleDecrease = () => {
    // Use store.dispatch to invoke an action to reducer
    store.dispatch({
      type: 'decrease',
      payload: {
        count: 1,
      },
    });
  };

  const handleDecreaseWithCount = (count = 1) => () => {
    // Use store.dispatch to invoke an action to reducer
    store.dispatch({
      type: 'decrease',
      payload: {
        count,
      },
    });
  };

  const handleIncreaseWithCount = (count = 1) => () => {
    // Use store.dispatch to invoke an action to reducer
    store.dispatch({
      type: 'increase',
      payload: {
        count,
      },
    });
  };

  // Update state based on current state of store after invoked store.dispatch
  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      const newState = store.getState();
      console.log('Current state', value);
      console.log('New state', newState);
      setValue(newState);
    });
    return unsubscribe;
  });

  return (
    <div className="app-root">
      <h4>Show you:</h4>
      <ul>
        <li>How to setup redux ?</li>
        <li>How does redux works?</li>
      </ul>
      <div>
        <code>
          Store =&gt; UI =&gt; Actions =&gt; Reducer =&gt; Store (updated)
        </code>
        <ol>
          <li>
            <code>Create store with initialState</code>
          </li>
          <li>
            <code>Get current state of store</code>
          </li>
          <li>
            <code>Show current state to UI</code>
          </li>
          <li>
            <code>Dispatch an action to make store change</code>
          </li>
          <li>
            <code>Reducer invoked with action</code>
          </li>
          <li>
            <code>New state of store returned</code>
          </li>
          <li>
            <code>Store updated</code>
          </li>
          <li>
            <code>UI updated</code>
          </li>
        </ol>
        <div className="flex flex-row flex-align-center counter-root">
          <button type="button" onClick={handleDecreaseWithCount(2)}>
            --
          </button>
          <button type="button" onClick={handleDecrease}>
            -
          </button>
          <span className="flex-grow text-center">{value}</span>
          <button type="button" onClick={handleIncrease}>
            +
          </button>
          <button type="button" onClick={handleIncreaseWithCount(2)}>
            ++
          </button>
        </div>
      </div>
    </div>
  );
};

export default SimpleRedux;
