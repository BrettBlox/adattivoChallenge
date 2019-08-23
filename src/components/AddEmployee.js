import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addEmployee } from '../redux/actions'
import uuid from 'uuid'
import { Button, Modal, TextInput, Switch, Row, Col } from 'react-materialize'

class AddEmployee extends Component {
  constructor(props) {
    super(props)
    this.state = { isActive: false }
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
    this.setState({ ...this.state, id: uuid() })
    this.props.addEmployee(this.state)
    this.resetInputFields()
  }

  resetInputFields() {
    this.setState({
      firstName: '',
      middleInitial: '',
      lastName: '',
      dateOfBirth: '',
      dateOfEmployment: '',
      isActive: false,
    })
  }

  render() {
    return (
      <div className='add-employee'>
        <Modal
          header='Add New Employee'
          trigger={
            <Button floating large className='red' waves='light' icon='add' />
          }>
          <form className='modal-content' onSubmit={this.handleSubmit}>
            <Row>
              <TextInput
                validate
                label='First Name'
                name='firstName'
                onChange={this.handleChange}
                value={this.state.firstName}
              />
              <TextInput
                validate
                label='Middle Initial'
                name='middleInitial'
                onChange={this.handleChange}
                value={this.state.middleInitial}
              />
              <TextInput
                validate
                label='Last Name'
                name='lastName'
                onChange={this.handleChange}
                value={this.state.lastName}
              />
            </Row>
            <Row>
              <TextInput
                validate
                label='Date of Birth'
                name='dateOfBirth'
                onChange={this.handleChange}
                value={this.state.dateOfBirth}
              />
              <TextInput
                validate
                label='Date of Employment'
                name='dateOfEmployment'
                onChange={this.handleChange}
                value={this.state.dateOfEmployment}
              />

              <Switch
                offLabel='Incactive'
                onLabel='Active'
                onChange={this.toggleActive}
                name='isActive'
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
      </div>
    )
  }
}

export default connect(
  null,
  { addEmployee }
)(AddEmployee)
