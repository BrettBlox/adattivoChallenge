import React from 'react'
import EditEmployee from './EditEmployee'

const active = (
  <h5 className='employee-info' style={{ color: '#26a69a' }}>
    Active
  </h5>
)
const inactive = (
  <h5 className='employee-info' style={{ color: '#F44336' }}>
    Not Active
  </h5>
)

const Employee = ({ employee }) => (
  <div className='card-panel employee'>
    <h2>
      {employee.firstName} {employee.middleInitial}. {employee.lastName}
    </h2>
    <div className='employee-info'>
      <b>Date of Birth:</b> {employee.dateOfBirth}
    </div>
    <div className='employee-info'>
      <b>Date of Employment:</b> {employee.dateOfEmployment}
    </div>
    {employee.isActive ? active : inactive}
    <EditEmployee employee={employee} />
  </div>
)

export default Employee
