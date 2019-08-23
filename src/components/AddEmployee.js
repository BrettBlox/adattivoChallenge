import React from 'react'
import { connect } from 'react-redux'
import { addEmployee } from '../redux/actions'
import uuid from 'uuid'

class AddEmployee extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isActive: false }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  toggleActive = e => {
    this.setState({ isActive: !this.state.isActive })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.setState({ ...this.state, id: uuid() })
    this.props.addEmployee(this.state)
  }

  render() {
    return (
      <div className='add-employee row card-panel'>
        <h3>Add New Employee</h3>
        <form className='col s12' onSubmit={this.handleSubmit}>
          <div className='input-field col s5'>
            <input
              className='form-input'
              name='firstName'
              type='text'
              id='first-name'
              placeholder='First Name'
              onChange={this.handleChange}
            />
          </div>
          <div className='input-field col s2'>
            <input
              className='form-input'
              name='middleInitial'
              type='text'
              id='middle-initial'
              placeholder='Middle Initial'
              onChange={this.handleChange}
            />
          </div>
          <div className='input-field col s5'>
            <input
              className='form-input'
              name='lastName'
              type='text'
              id='last-name'
              placeholder='Last Name'
              onChange={this.handleChange}
            />
          </div>
          <div className='input-field col s6'>
            <label htmlFor='date-of-birth'>Date of Employment</label>
            <input
              className='form-input'
              name='dateOfBirth'
              type='date'
              id='date-of-birth'
              placeholder='Date of Birth'
              onChange={this.handleChange}
            />
          </div>
          <div className='input-field col s6'>
            <label htmlFor='date-of-birth'>Date of Employment</label>
            <input
              className='form-input'
              name='dateOfEmployment'
              type='date'
              id='date-of-birth'
              placeholder='Date of Employment'
              onChange={this.handleChange}
            />
          </div>
          <div className='switch col s6'>
            <label>
              Inactive
              <input
                type='checkbox'
                id='isActive'
                type='checkbox'
                name='isActive'
                onChange={this.toggleActive}
              />
              <span className='lever' />
              Active
            </label>
          </div>
          <div className='col sm6'>
            <button
              className='btn waves-effect waves-light'
              type='submit'
              name='action'>
              Submit
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default connect(
  null,
  { addEmployee }
)(AddEmployee)
