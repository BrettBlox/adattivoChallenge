import React from 'react'
import AddEmployee from './components/AddEmployee'
import EmployeeList from './components/EmployeeList'
import FilterEmployees from './components/FilterEmployees'

import './styles/App.css'

export default function App() {
  return (
    <div className='App card-panel'>
      <FilterEmployees />
      <AddEmployee />
      <EmployeeList />
    </div>
  )
}
