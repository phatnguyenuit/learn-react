import React, { Component } from 'react';
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

class SimpleReduxClassStyle extends Component {
  constructor(props) {
    super(props);
    const initialState = store.getState();
    this.state = {
      value: initialState,
    };
  }

  // Update state based on current state of store after invoked store.dispatch
  componentDidMount() {
    const { value } = this.state;
    this.unsubscribe = store.subscribe(() => {
      const newState = store.getState();
      console.log('Current state', value);
      console.log('New state', newState);
      this.setState(prev => ({ ...prev, value: newState }));
    });
  }

  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }

  handleIncrease = () => {
    // Use store.dispatch to invoke an action to reducer
    store.dispatch({
      type: 'increase',
      payload: {
        count: 1,
      },
    });
  };

  handleDecrease = () => {
    // Use store.dispatch to invoke an action to reducer
    store.dispatch({
      type: 'decrease',
      payload: {
        count: 1,
      },
    });
  };

  handleDecreaseWithCount = (count = 1) => () => {
    // Use store.dispatch to invoke an action to reducer
    store.dispatch({
      type: 'decrease',
      payload: {
        count,
      },
    });
  };

  handleIncreaseWithCount = (count = 1) => () => {
    // Use store.dispatch to invoke an action to reducer
    store.dispatch({
      type: 'increase',
      payload: {
        count,
      },
    });
  };

  render() {
    const { value } = this.state;
    return (
      <div className="app-root">
        <h4>Show you:</h4>
        <ul>
          <li>How to setup redux ?</li>
          <li>How does redux works?</li>
        </ul>
        <hr />
        <h4>Flow:</h4>
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
          <hr />
          <h4>Example:</h4>
          <div className="flex flex-row flex-align-center counter-root">
            <button type="button" onClick={this.handleDecreaseWithCount(2)}>
              --
            </button>
            <button type="button" onClick={this.handleDecrease}>
              -
            </button>
            <span className="flex-grow text-center">{value}</span>
            <button type="button" onClick={this.handleIncrease}>
              +
            </button>
            <button type="button" onClick={this.handleIncreaseWithCount(2)}>
              ++
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SimpleReduxClassStyle;
