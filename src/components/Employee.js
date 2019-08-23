import React from 'react'
import { connect } from 'react-redux'
import EditEmployee from './EditEmployee'

const active = <div style={{ color: 'blue' }}>Active</div>
const inactive = <div style={{ color: 'red' }}>Not Active</div>

const Employee = ({ employee }) => (
  <div className='card-panel employee'>
    <h2>
      {employee.firstName} {employee.middleInitial}. {employee.lastName}
    </h2>
    <div className='employee-info'>Date of Birth: {employee.dateOfBirth}</div>
    <div className='employee-info'>
      Date of Employment: {employee.dateOfEmployment}
    </div>
    <div className='employee-info'>{employee.isActive ? active : inactive}</div>
    <EditEmployee employee={employee} />
  </div>
)

export default Employee
