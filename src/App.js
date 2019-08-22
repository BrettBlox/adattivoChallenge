import React from 'react'
import AddEmployee from './components/AddEmployee'
import EmployeeList from './components/EmployeeList'
import FilterEmployees from './components/FilterEmployees'

import './App.css'

export default function App() {
  return (
    <div>
      <h1>Employee List</h1>
      <AddEmployee />
      <EmployeeList />
      <FilterEmployees />
    </div>
  )
}
