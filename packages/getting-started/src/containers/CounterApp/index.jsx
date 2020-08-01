import React, { Component } from 'react';

import Counter from '../../components/Counter';
import CounterV2 from '../../components/CounterV2';

export default class CounterApp extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <h4>Counter</h4>
          <Counter />
        </div>
        <div>
          <h4>Counter V2</h4>
          <CounterV2 />
        </div>
      </React.Fragment>
    );
  }
}
