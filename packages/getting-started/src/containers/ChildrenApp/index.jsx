import React, { Component } from 'react';
import Parent from '../../components/Parent';
import ParentV2 from '../../components/ParentV2';

export default class ChildrenApp extends Component {
  render() {
    return (
      <div>
        <div>
          <pre>
            This example include some techniques:
            <br />
            <span>
              <strong>
                <code>How to handle children in the custom component ?</code>
              </strong>
            </span>
            <br />
            <span>
              <strong>
                <code>How to pass children as a callback? (renderProps)</code>
              </strong>
            </span>
          </pre>
        </div>
        <div>
          <Parent>
            <button>
              Click me!{' '}
              <span role="img" aria-label="icon">
                😁
              </span>
            </button>
          </Parent>
          <ParentV2>
            {resultFromParent => (
              <button>
                {resultFromParent}{' '}
                <span role="img" aria-label="icon">
                  😎
                </span>
              </button>
            )}
          </ParentV2>
        </div>
      </div>
    );
  }
}
