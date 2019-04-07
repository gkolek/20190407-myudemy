import React, { Component } from 'react';
import { connect } from 'react-redux'

import { registerUser } from '../actions'

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
    this.props.registerUser(this.state);
    event.preventDefault()
  }

  renderIndicator = () => {
    if (this.props.isLoading) {
      return <div><span style={{ color: 'green' }}>Loading...</span></div>
    }
    return null
  }

  renderError = () => {
    if (this.props.hasError) {
      return <div><span style={{ color: 'red' }}>Error</span></div>
    }
    return null
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.renderIndicator()}
        {this.renderError()}
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

const mapStateToProps = state => ({
  isLoading: state.auth.isLoading,
  hasError: state.auth.hasError
})


const mapDispatchToProps = dispatch => ({
  registerUser: (formData) => dispatch(registerUser(formData))
})

export default connect(mapStateToProps, mapDispatchToProps)(Register);
