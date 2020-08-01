import React, { Component } from 'react';

export default class ListApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  handleAddItem = () => {
    this.setState(oldState => ({
      items: [...oldState.items, `item ${new Date().getTime()}`],
    }));
  };

  handleDeleteItem = toDeleteItem => () => {
    this.setState(oldState => ({
      items: oldState.items.filter(item => item !== toDeleteItem),
    }));
  };

  render() {
    const { items } = this.state;
    return (
      <div>
        <h4>List App</h4>
        <p>Total: {items.length} item(s)</p>
        <button onClick={this.handleAddItem}>Add new item</button>
        <ul>
          {items.map(item => (
            // Every single item in the list rendered should have a unique key
            <li key={item}>
              {item}{' '}
              <button onClick={this.handleDeleteItem(item)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
