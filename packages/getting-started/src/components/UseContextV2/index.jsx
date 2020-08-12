import React from 'react';
import ThemeContext from '../../context/ThemeContext';

const UseContextV2 = () => {
  return (
    <ThemeContext.Consumer>
      {({ color }) => (
        <span style={{ color }}>Hello React Context! (color = {color})</span>
      )}
    </ThemeContext.Consumer>
  );
};

export default UseContextV2;
