import React, { Component } from 'react';
import Fetch from '../../components/Fetch';

export default class CallingAPIApp extends Component {
  render() {
    return (
      <div>
        <div>
          <pre>
            This example include some techniques:
            <br />
            <span>
              <strong>
                <code>How to fetch data from API ?</code>
              </strong>
            </span>
            <br />
            <span>
              <strong>
                <code>How to handle error during calling API process?</code>
              </strong>
            </span>
          </pre>
        </div>
        <div>
          <div>
            <p>
              <strong>Call API on demand</strong>
            </p>
            <Fetch
              autoCallAPI={false}
              url="https://jsonplaceholder.typicode.com/users/1"
              method="GET"
            />
          </div>
          <div>
            <p>
              <strong>Auto Call API after the 1st render</strong>
            </p>
            <Fetch
              autoCallAPI
              url="https://jsonplaceholder.typicode.com/users/1"
              method="GET"
            />
          </div>
          <div>
            <p>
              <strong>Call API error</strong>
            </p>
            <Fetch autoCallAPI url="https://not.available.url" method="GET" />
          </div>
        </div>
      </div>
    );
  }
}
