import React from 'react'
import { connect } from 'react-redux'
import Employee from './Employee'
import { getEmployeesByVisibilityFilter } from '../redux/selectors'

const EmployeeList = ({ employees }) => (
  <div className='employee-list card-panel'>
    {employees.map((employee, index) => {
      return <Employee key={`emoloyee-${employee.id}`} employee={employee} />
    })}
  </div>
)

const mapStateToProps = state => {
  const { visibilityFilter } = state
  const employees = getEmployeesByVisibilityFilter(state, visibilityFilter)
  return { employees }
}
export default connect(mapStateToProps)(EmployeeList)
