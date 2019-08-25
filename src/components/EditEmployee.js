import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editEmployee } from '../redux/actions'
import { Button, Modal, TextInput, Switch, Row } from 'react-materialize'

class EditEmployee extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.employee.id,
      firstName: this.props.employee.firstName,
      middleInitial: this.props.employee.middleInitial,
      lastName: this.props.employee.lastName,
      dateOfBirth: this.props.employee.dateOfBirth,
      dateOfEmployment: this.props.employee.dateOfEmployment,
      isActive: false,
    }
  }

  componentDidMount() {
    this.setState({
      ...this.state,
      isActive: this.props.employee.isActive,
    })
  }

  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    })
  }

  toggleActive = event => {
    this.setState({
      ...this.state,
      isActive: !this.state.isActive,
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.editEmployee(this.state)
  }

  render() {
    const {
      firstName,
      middleInitial,
      lastName,
      dateOfBirth,
      dateOfEmployment,
    } = this.state
    const isEnabled =
      firstName.length > 0 &&
      middleInitial.length > 0 &&
      lastName.length > 0 &&
      dateOfBirth.length > 0 &&
      dateOfEmployment.length > 0

    return (
      <Modal
        header='Edit Employee Information'
        trigger={
          <Button
            floating
            small
            waves='light'
            className='add-edit-employee'
            icon='edit'
          />
        }>
        <form className='modal-content editForm' onSubmit={this.handleSubmit}>
          <Row>
            <TextInput
              validate
              label='First Name'
              name='firstName'
              onChange={this.handleChange}
              defaultValue={this.props.employee.firstName}
              required
              error='First name is required'
            />
            <TextInput
              validate
              label='Middle Initial'
              name='middleInitial'
              onChange={this.handleChange}
              defaultValue={this.props.employee.middleInitial}
              required
              error='Middle initial is required'
            />
            <TextInput
              validate
              label='Last Name'
              name='lastName'
              onChange={this.handleChange}
              defaultValue={this.props.employee.lastName}
              required
              error='Last name is required'
            />
          </Row>
          <Row>
            <TextInput
              validate
              label='Date of Birth'
              name='dateOfBirth'
              onChange={this.handleChange}
              defaultValue={this.props.employee.dateOfBirth}
              required
              error='Date of birth is required'
            />
            <TextInput
              validate
              label='Date of Employment'
              name='dateOfEmployment'
              onChange={this.handleChange}
              defaultValue={this.props.employee.dateOfEmployment}
              required
              error='Date of employment required'
            />
            <button
              onClick={this.toggleActive}
              style={{ backgroundColor: 'transparent', border: 'none' }}>
              <Switch
                offLabel='Not Active'
                onLabel='Active'
                name='isActive'
                checked={this.state.isActive}
              />
            </button>
          </Row>
          <Button
            disabled={isEnabled ? false : true}
            modal='close'
            type='submit'
            waves='light'>
            Submit
          </Button>
        </form>
      </Modal>
    )
  }
}

export default connect(
  null,
  { editEmployee }
)(EditEmployee)
