import React from 'react';
import FunctionalComponent from '../../components/FunctionalComponent';

export default function FunctionalApp() {
  return (
    <div>
      <div>
        <pre>
          This example include some techniques:
          <br />
          <span>
            <strong>
              <code>How to write component following functional style ?</code>
            </strong>
          </span>
          <br />
          <span>
            <strong>
              <code>How to access `props` in the functional component?</code>
            </strong>
          </span>
        </pre>
      </div>
      <div>
        <div>
          <h4>Functional Components</h4>
          <div>
            <p>No Props</p>
            <FunctionalComponent />
          </div>
          <div>
            <p>Having Props</p>
            <FunctionalComponent a={100} b={false} c={'string value'} />
          </div>
        </div>
      </div>
    </div>
  );
}
