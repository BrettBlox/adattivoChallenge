import { VISIBILITY_FILTERS } from '../redux/actions'

//HELPER FUNCTIONS FOR FILTERING EMPLOYEES BASED ON THEIR STATUS

export const getEmployeesState = store => store.employees

export const getEmployeeList = store =>
  getEmployeesState(store) ? getEmployeesState(store).employees : []

export const getEmployeesByVisibilityFilter = (store, visibilityFilter) => {
  const allEmployees = getEmployeeList(store)
  switch (visibilityFilter) {
    case VISIBILITY_FILTERS.ACTIVE:
      return allEmployees.filter(employee => employee.isActive)
    case VISIBILITY_FILTERS.INACTIVE:
      return allEmployees.filter(employee => !employee.isActive)
    case VISIBILITY_FILTERS.ALL:
    default:
      return allEmployees
  }
}
