import React, { Component } from 'react';


class Register extends Component {

  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input onChange={this.handleChange} type="email" name="email" value={this.state.email} placeholder="E-mail" />
        </div>
        <div>
          <input onChange={this.handleChange} type="password" name="password" value={this.state.password} placeholder="Password" />
        </div>
        <div>
          <input onChange={this.handleChange} type="text" name="firstName" value={this.state.firstName} placeholder="First Name" />
        </div>
        <div>
          <input onChange={this.handleChange} type="text" name="lastName" value={this.state.lastName} placeholder="Last Name" />
        </div>
        <div>
          <input type="submit" value="Register me" />
        </div>
      </form>
    );
  }
}

export default Register;
