import { combineReducers } from 'redux'
import visibilityFilter from './visibilityFilter'
import employees from './employees'

const employeeApp = combineReducers({
  visibilityFilter,
  employees,
})

export default employeeApp
