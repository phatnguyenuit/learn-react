import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './redux/store';
import Fetcher from './components/Fetcher';
import './styles.css';

class AsyncActionCreators extends Component {
  render() {
    return (
      <div className="app-root">
        <h4>Show you:</h4>
        <ul>
          <li>
            <a
              href="https://redux.js.org/advanced/async-actions#async-action-creators"
              target="_blank"
              rel="noopener noreferrer"
            >
              How to handle async action creators in redux ?
            </a>
          </li>
          <li>
            What is <code>thunk</code> ?
          </li>
          <li>
            How to setup{' '}
            <a
              href="https://github.com/reduxjs/redux-thunk"
              target="_blank"
              rel="noopener noreferrer"
            >
              redux-thunk
            </a>{' '}
            ?
          </li>
        </ul>
        <hr />
        <p>
          <code>Thunk</code> is a function that returns another function.
        </p>
        <p>
          That's the key, action creators in redux just return an action object.
          So you need to manually dispatch multiple actions in only one action
          creator, how?
        </p>
        <p>
          Apply <code>redux-thunk</code> middleware.
        </p>
        <hr />
        <h4>Usage:</h4>
        <ol>
          <li>
            Prepare <code>store</code> with <code>redux-thunk</code> middleware
          </li>
          <li>Prepare async action creators</li>
          <li>
            Wrap your App with <code>Provider</code> and provide{' '}
            <code>store</code>
          </li>
          <li>
            On your components use <code>connect</code> to use{' '}
            <code>state</code> and <code>dispatch</code> from <code>store</code>{' '}
            via component props
          </li>
        </ol>
        <hr />
        <h4>Example:</h4>
        <Provider store={store}>
          <Fetcher />
        </Provider>
      </div>
    );
  }
}

export default AsyncActionCreators;
