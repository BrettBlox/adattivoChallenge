import React from 'react'
import { connect } from 'react-redux'
import { addEmployee } from '../redux/actions'
import uuid from 'uuid'
import M from 'materialize-css'

class AddEmployee extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isActive: false }
  }

  componentDidMount() {
    let dropdowns = document.querySelectorAll('.dropdown-trigger')
    M.Dropdown.init(dropdowns)
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
        <a
          className='btn-floating btn-large waves-effect waves-light red dropdown-trigger'
          href='#'
          data-target='form'>
          <i className='large material-icons'>add</i>
        </a>
        <h3>Add New Employee</h3>
        <form
          id='form-dropdown'
          className='col s12 dropdown-content'
          onSubmit={this.handleSubmit}>
          <div className='input-field col s5'>
            <label htmlFor='first-name'>First Name</label>
            <input
              name='firstName'
              type='text'
              id='first-name'
              onChange={this.handleChange}
            />
          </div>
          <div className='input-field col s2'>
            <label htmlFor='middle-initial'>Middle Initial</label>
            <input
              name='middleInitial'
              type='text'
              id='middle-initial'
              onChange={this.handleChange}
            />
          </div>
          <div className='input-field col s5'>
            <label htmlFor='last-name'>Last Name</label>
            <input
              name='lastName'
              type='text'
              id='last-name'
              onChange={this.handleChange}
            />
          </div>
          <div className='input-field col s6'>
            <label htmlFor='date-of-birth'>
              Date of Employment: Month DD, YYYY
            </label>
            <input
              name='dateOfBirth'
              type='text'
              id='date-of-birth'
              onChange={this.handleChange}
            />
          </div>
          <div className='input-field col s6'>
            <label htmlFor='date-of-birth'>
              Date of Employment: Month DD, YYYY
            </label>
            <input
              name='dateOfEmployment'
              type='text'
              id='date-of-birth'
              onChange={this.handleChange}
            />
          </div>
          <div className='switch col s6'>
            <label>
              Inactive
              <input
                type='checkbox'
                id='isActive'
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
