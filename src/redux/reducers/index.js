import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import visibilityFilter from './visibilityFilter'
import employees from './employees'

const employeeApp = combineReducers({
  visibilityFilter,
  employees,
  form: formReducer,
})

export default employeeApp
