import React, { Component } from 'react'
import { connect } from 'react-redux'
import uuid from 'uuid'


export default class AddEmployee extends Component {
  state = {
    newEmployee: {
      firstName: '',
      lastName: '',
      middleInitial: '',
      dateOfBirth: '',
      dateOfEmployement: '',
      isActive: '',
    },
  }

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value,
    })
  }
  handleSubmit = evt => {
    console.log('added employee')
  }

  render() {
    return (
      <div className='new-employee-container'>
        <h1>ADD EMPLOYEE</h1>
        <form onSubmit={this.handleSubmit}>
          <div className='employee-input'>
            <label htmlFor='firstName'>First Name</label>
            <br />
            <input
              type='text'
              placeholder='First Name'
              id='firstName'
              name='firstName'
              value={this.state.employee}
              onChange={this.handleChange}
            />
          </div>
          <div className='employee-input'>
            <label htmlFor='middleInitial'>Middle Initial</label>
            <br />
            <input
              type='text'
              placeholder='Middle Initial'
              id='middleInitial'
              name='middleInitial'
              value={this.state.employee}
              onChange={this.handleChange}
            />
          </div>
          <div className='employee-input'>
            <label htmlFor='lastName'>Last Name</label>
            <br />
            <input
              type='text'
              placeholder='Last Name'
              id='lastName'
              name='lastName'
              value={this.state.employee}
              onChange={this.handleChange}
            />
          </div>
          <div className='employee-input'>
            <label htmlFor='dateOfBirth'>Date of Birth</label>
            <br />
            <input
              type='text'
              placeholder='Date of Birth'
              id='dateOfBirth'
              name='dateOfBirth'
              value={this.state.employee}
              onChange={this.handleChange}
            />
          </div>
          <div className='employee-input'>
            <label htmlFor='dateOfEmployment'>Date of Employment</label>
            <br />
            <input
              type='text'
              placeholder='Date of Employment'
              id='dateOfEmployment'
              name='dateOfEmployment'
              value={this.state.employee}
              onChange={this.handleChange}
            />
          </div>
          <div className='employee-input'>
            <label htmlFor='isActive'>Active?</label>
            <input
              type='checkbox'
              placeholder='Active/Inactive'
              id='isActive'
              name='isActive'
              value={this.state.employee}
              onChange={this.handleChange}
            />
          </div>
          <button>Add New Employee</button>
        </form>
      </div>
    )
  }
}
