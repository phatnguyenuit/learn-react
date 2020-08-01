import React, { Component } from 'react';

export default class Fetch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      response: undefined,
      error: '',
    };
  }

  // Call API after the 1st render ?
  componentDidMount() {
    const { autoCallAPI = false } = this.props;
    if (autoCallAPI) {
      this.fetchAPI();
    }
  }

  fetchAPI = () => {
    const { url, method = 'GET' } = this.props;

    // Set loading = true
    this.setState({ loading: true });

    // Call API with fetch method
    fetch(url, { method: method })
      // raw response
      .then(response => {
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }
        return response.json();
      })
      // parsed json response
      .then(response => {
        this.setState({ response, error: undefined });
      })
      .catch(error => {
        this.setState({ error: error.message, response: undefined });
      })
      .finally(() => {
        this.setState(oldState => ({
          loading: !oldState.loading,
        }));
      });
  };

  render() {
    const { loading, response, error } = this.state;
    return (
      <div>
        <button onClick={this.fetchAPI}>Call API manually!</button>
        <p>API's response:</p>
        {loading && 'Loading.....'}
        {(response || error) && (
          <div style={{ padding: 8, border: '1px solid black' }}>
            {JSON.stringify(response, null, 2)}
            {error}
          </div>
        )}
      </div>
    );
  }
}
