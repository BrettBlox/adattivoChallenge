import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editEmployee } from '../redux/actions'
import uuid from 'uuid'
import { Button, Modal, TextInput, Switch, Row, Col } from 'react-materialize'

class EditEmployee extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    console.log()
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  toggleActive = e => {
    this.setState({ isActive: !this.state.isActive })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.setState({ id: this.props.employee.id, ...this.state })
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
              onChange={this.toggleActive}
              name='isActive'
              checked={this.props.employee.isActive && true}
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
