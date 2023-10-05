import React, { Component } from 'react';
import './Components/s.css'; 

class SignupForm extends Component {
  constructor() {
    super();
    this.state = {
      first: '',
      surname: '',
      email: '',
      password: '',
    };
  }

  handleFnameChange = (event) => {
    this.setState({ first: event.target.value });
  };

  handleLnameChange = (event) => {
    this.setState({ surname: event.target.value });
  };

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    
  };

  render() {
    console.log(this.state.first);
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Yahoo</h2>
        <div>
          <input
            onChange={this.handleFnameChange}
            value={this.state.first}
            type='text'
            placeholder='Enter your first name'
          />
        </div>

        <div>
          <input
            onChange={this.handleLnameChange}
            value={this.state.surname}
            type='text'
            placeholder='Enter your surname'
          />
        </div>

        <div>
          <input
            onChange={this.handleEmailChange}
            value={this.state.email}
            type='email'
            placeholder='Enter your email'
          />
        </div>

        <div>
          <input
            onChange={this.handlePasswordChange}
            value={this.state.password}
            type='password'
            placeholder='Enter your password'
          />
        </div>

        <input type='submit' />
      </form>
    );
  }
}

export default SignupForm;
