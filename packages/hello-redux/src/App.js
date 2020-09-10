import React from 'react';

import LearningApp from './LearningApp';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://redux.js.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Redux
        </a>
      </header>
      <LearningApp />
    </div>
  );
}

export default App;
