import React, { Component } from 'react';

export default class FormAppV2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      gender: 'male',
    };
  }
  handleSubmit = event => {
    event.preventDefault(); // prevent default submit action
    console.log('Registering with form values');
    console.log(JSON.stringify(this.state));
  };

  handleChangeName = event => {
    const { value } = event.target;
    this.setState({
      name: value,
    });
  };

  // Use name of the target element to set value for its own
  handleChangeInput = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleResetForm = () => {
    this.setState({
      name: '',
      email: '',
      gender: 'male',
    });
  };

  render() {
    const { name, email, gender } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Registration Form</h4>
        <div className="form-field">
          <label htmlFor="name">Name</label>{' '}
          <input
            id="name"
            name="name"
            value={name}
            onChange={this.handleChangeInput}
          />
        </div>
        <div className="form-field">
          <label htmlFor="email">Email</label>{' '}
          <input
            id="email"
            name="email"
            value={email}
            onChange={this.handleChangeInput}
          />
        </div>
        <div className="form-field">
          <label htmlFor="gender">Gender</label>{' '}
          <select
            id="gender"
            name="gender"
            value={gender}
            onChange={this.handleChangeInput}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="actions">
          <button type="submit">Register</button>{' '}
          <button type="button" onClick={this.handleResetForm}>
            Reset
          </button>
        </div>
      </form>
    );
  }
}
