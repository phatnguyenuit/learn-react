import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './redux/store';
import Counter from './components/Counter';
import './styles.css';

class UsingReactRedux extends Component {
  render() {
    return (
      <div className="app-root">
        <h4>Show you:</h4>
        <ul>
          <li>
            What is the purpose of{' '}
            <a
              href="https://react-redux.js.org/introduction/quick-start"
              target="_blank"
              rel="noopener noreferrer"
            >
              react-redux
            </a>{' '}
            ?
          </li>
          <li>
            How does{' '}
            <a
              href="https://react-redux.js.org/introduction/why-use-react-redux"
              target="_blank"
              rel="noopener noreferrer"
            >
              react-redux
            </a>{' '}
            works ?
          </li>
        </ul>
        <hr />
        <h4>Usage:</h4>
        <ol>
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
          <Counter />
        </Provider>
      </div>
    );
  }
}

export default UsingReactRedux;
