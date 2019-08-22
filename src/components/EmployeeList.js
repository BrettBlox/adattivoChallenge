import React from 'react'
import { connect } from 'react-redux'
import Employee from './Employee'

const EmployeeList = ({ employees }) => (
  <ul>
    <Employee />
  </ul>
)

export default EmployeeList
