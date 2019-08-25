import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addEmployee } from '../redux/actions'
import uuidv4 from 'uuid/v4'
import { Button, Modal, TextInput, Switch, Row } from 'react-materialize'

class AddEmployee extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      middleInitial: '',
      lastName: '',
      dateOfBirth: '',
      dateOfEmployment: '',
      isActive: false,
    }
  }

  componentDidMount() {
    this.setState({
      ...this.state,
      id: uuidv4(),
    })
  }

  handleChange = e => {
    this.setState({ ...this.state, [e.target.name]: e.target.value })
  }

  toggleActive = e => {
    this.setState({ isActive: !this.state.isActive })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addEmployee(this.state)
    document.getElementById('add-form').reset()
    this.resetInputFields()
  }

  resetInputFields() {
    this.setState({
      id: uuidv4(),
      firstName: '',
      middleInitial: '',
      lastName: '',
      dateOfBirth: '',
      dateOfEmployment: '',
      isActive: false,
    })
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
      <div className='add-employee'>
        <Modal
          header='Add New Employee'
          trigger={
            <Button
              floating
              large
              className='red add-edit-employee'
              waves='light'
              icon='add'
            />
          }>
          <form
            className='modal-content'
            id='add-form'
            onSubmit={this.handleSubmit}>
            <Row>
              <TextInput
                validate
                label='First Name'
                name='firstName'
                onChange={this.handleChange}
                value={this.state.firstName}
                required
                error='First name is required'
              />
              <TextInput
                validate
                label='Middle Initial'
                name='middleInitial'
                onChange={this.handleChange}
                value={this.state.middleInitial}
                required
                error='Middle initial is required'
              />
              <TextInput
                validate
                label='Last Name'
                name='lastName'
                onChange={this.handleChange}
                value={this.state.lastName}
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
                value={this.state.dateOfBirth}
                required
                error='Date of birth is required'
              />
              <TextInput
                validate
                label='Date of Employment'
                name='dateOfEmployment'
                onChange={this.handleChange}
                value={this.state.dateOfEmployment}
                required
                error='Date of employment is required'
              />
              <Switch
                offLabel='Not Active'
                onLabel='Active'
                onChange={this.toggleActive}
                name='isActive'
              />
            </Row>
            <Button
              modal='close'
              disabled={isEnabled ? false : true}
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
