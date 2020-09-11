import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux';

// Implement combineReducers from scratch
// import combineReducers from './combineReducers';
import './styles.css';

// assign default value for prevState
/**
 * Counter reducer
 * @param {number} prevState
 * @param {{type: string; payload: any}} action
 * @returns {number} newState
 */
const counterReducer = (prevState = 0, action) => {
  const { type, payload } = action;
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

/**
 * Toggle reducer
 * @param {boolean} prevState
 * @param {{type: string; payload: any}} action
 * @returns {boolean} newState
 */
const toggleReducer = (prevState = false, action) => {
  const { type } = action;
  switch (type) {
    case 'toggle': {
      return !prevState;
    }
    default:
      return prevState;
  }
};

// key: reducerName
// Store will be
// {
//   counter: returned counterReducer's state,
//   toggle: returned toggleReducer's state
// }
const rootReducer = combineReducers({
  counter: counterReducer,
  toggle: toggleReducer,
});

const store = createStore(rootReducer);

class MultipleReducers extends Component {
  constructor(props) {
    super(props);
    const initialState = store.getState();
    this.state = initialState;
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      const newState = store.getState();
      console.log('Current state', this.state);
      console.log('New state', newState);
      this.setState(newState);
    });
  }

  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }

  handleIncrease = () => {
    store.dispatch({
      type: 'increase',
      payload: {
        count: 1,
      },
    });
  };

  handleDecrease = () => {
    store.dispatch({
      type: 'decrease',
      payload: {
        count: 1,
      },
    });
  };

  handleDecreaseWithCount = (count = 1) => () => {
    store.dispatch({
      type: 'decrease',
      payload: {
        count,
      },
    });
  };

  handleIncreaseWithCount = (count = 1) => () => {
    store.dispatch({
      type: 'increase',
      payload: {
        count,
      },
    });
  };

  handleToggle = () => {
    store.dispatch({
      type: 'toggle',
    });
  };

  render() {
    const { counter, toggle } = this.state;
    return (
      <div className="app-root">
        <h4>Show you:</h4>
        <ul>
          <li>How to use multiple reducers in Redux ?</li>
          <li>
            What is <code>combineReducers</code> ? And how does it work ?
          </li>
        </ul>
        <hr />
        <h4>Example:</h4>
        <div>
          <div className="toogle-container">
            <label htmlFor="toggle">Check: </label>
            <input
              type="checkbox"
              id="toggle"
              checked={toggle}
              onChange={this.handleToggle}
            />
          </div>
          <div className="flex flex-row flex-align-center counter-root">
            <button type="button" onClick={this.handleDecreaseWithCount(2)}>
              --
            </button>
            <button type="button" onClick={this.handleDecrease}>
              -
            </button>
            <span className="flex-grow text-center">{counter}</span>
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

export default MultipleReducers;
