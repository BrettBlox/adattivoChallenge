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

  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    })
  }

  toggleActive = e => {
    this.setState({ ...this.state, isActive: !this.state.isActive })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.editEmployee(this.state)
  }

  render() {
    return (
      <Modal
        header='Edit Employee Information'
        trigger={
          <Button floating small className='green' waves='light' icon='edit' />
        }>
        <form className='modal-content editForm' onSubmit={this.handleSubmit}>
          <Row>
            <TextInput
              validate
              label='First Name'
              name='firstName'
              onChange={this.handleChange}
              defaultValue={this.props.employee.firstName}
            />
            <TextInput
              validate
              label='Middle Initial'
              name='middleInitial'
              onChange={this.handleChange}
              defaultValue={this.props.employee.middleInitial}
            />
            <TextInput
              validate
              label='Last Name'
              name='lastName'
              onChange={this.handleChange}
              defaultValue={this.props.employee.lastName}
            />
          </Row>
          <Row>
            <TextInput
              validate
              label='Date of Birth'
              name='dateOfBirth'
              onChange={this.handleChange}
              defaultValue={this.props.employee.dateOfBirth}
            />
            <TextInput
              validate
              label='Date of Employment'
              name='dateOfEmployment'
              onChange={this.handleChange}
              defaultValue={this.props.employee.dateOfEmployment}
            />
            <Switch
              offLabel='Incactive'
              onLabel='Active'
              name='isActive'
              checked={this.props.employee.isActive ? true : false}
              onChange={this.toggleActive}
            />
          </Row>
          <Button
            className='modal-action modal-close'
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
