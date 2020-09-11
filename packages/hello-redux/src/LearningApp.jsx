import React, { Component } from 'react';
import apps from './containers';

const defaultAppName =
  localStorage.getItem('selectedAppName') || 'simple-redux';

export default class LearningApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedAppName: defaultAppName,
    };
  }

  handleChangeApp = event => {
    const appName = event.target.value;
    this.setState({
      selectedAppName: appName,
    });

    localStorage.setItem('selectedAppName', appName);
  };

  render() {
    const { selectedAppName } = this.state;
    const App = apps[selectedAppName];
    return (
      <React.Fragment>
        <label htmlFor="appSelection">Choose app to show:</label>{' '}
        <select
          id="appSelection"
          value={selectedAppName}
          onChange={this.handleChangeApp}
        >
          <option value="">-- Select app --</option>
          {Object.keys(apps).map(appName => (
            <option key={appName} value={appName}>
              {appName}
            </option>
          ))}
        </select>
        {App && <App />}
      </React.Fragment>
    );
  }
}
