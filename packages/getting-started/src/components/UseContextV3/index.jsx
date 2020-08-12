import React, { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';

// Use useContext hook to access context values
const UseContextV3 = () => {
  const { color } = useContext(ThemeContext);
  return <span style={{ color }}>Hello React Context! (color = {color})</span>;
};

export default UseContextV3;
