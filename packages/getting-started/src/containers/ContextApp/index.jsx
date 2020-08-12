import React, { Component } from 'react';
import UseContext from '../../components/UseContext';
import UseContextV2 from '../../components/UseContextV2';
import UseContextV3 from '../../components/UseContextV3';

import ThemeContext from '../../context/ThemeContext';

// Reference: https://htmlcolorcodes.com/
const COMMON_COLORS = [
  'indianred',
  'lightcoral',
  'salmon',
  'darksalmon',
  'lightsalmon',
  'color name',
  // 'white',
  'silver',
  'gray',
  'black',
  'red',
  'maroon',
  'yellow',
  'olive',
  'lime',
  'green',
  'aqua',
  'teal',
  'blue',
  'navy',
  'fuchsia',
  'purple',
];

const getRandomItem = (list = []) => {
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
};

export default class ContextApp extends Component {
  state = {
    color: getRandomItem(COMMON_COLORS),
  };

  changeColor = () => {
    this.setState({
      color: getRandomItem(COMMON_COLORS),
    });
  };

  render() {
    const { color } = this.state;
    return (
      <div>
        <div>
          <pre>
            This example include some techniques:
            <br />
            <span>
              <strong>
                <code>How to use React Context Provider?</code>
              </strong>
            </span>
            <br />
            <span>
              <strong>
                <code>How to retrieve React Context values in Component?</code>
              </strong>
            </span>
          </pre>
        </div>
        <div>
          <div>
            <h4>React Context</h4>
            <button onClick={this.changeColor}>Change color!</button>
            <br />
            <div>
              <p>
                <strong>Class style with static `contextType`</strong>
              </p>
              <ThemeContext.Provider value={{ color }}>
                <UseContext />
                {/* Which component wants to use context values 
                should be wrapped inside `ThemeContext.Provider`*/}
              </ThemeContext.Provider>
            </div>
            <div>
              <p>
                <strong>Functional style with `Context Consumer`</strong>
              </p>
              <ThemeContext.Provider value={{ color }}>
                <UseContextV2 />
                {/* Which component wants to use context values 
                should be wrapped inside `ThemeContext.Provider`*/}
              </ThemeContext.Provider>
            </div>
            <div>
              <p>
                <strong>Functional style with `useContext` hook</strong>
              </p>
              <ThemeContext.Provider value={{ color }}>
                <UseContextV3 />
                {/* Which component wants to use context values 
                should be wrapped inside `ThemeContext.Provider`*/}
              </ThemeContext.Provider>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
