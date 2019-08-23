import { VISIBILITY_FILTERS } from '../redux/actions'

export const getEmployeesState = store => store.employees

export const getEmployeeList = store =>
  getEmployeesState(store) ? getEmployeesState(store).employees : []

export const getEmployeeById = (store, id) =>
  getEmployeesState(store) ? { ...getEmployeesState(store).byIds[id], id } : {}

export const getEmployees = store =>
  getEmployeeList(store).map(id => getEmployeeById(store, id))

export const getEmployeesByVisibilityFilter = (store, visibilityFilter) => {
  const allEmployees = getEmployees(store)
  switch (visibilityFilter) {
    case VISIBILITY_FILTERS.ACTIVE:
      return allEmployees.filter(employee => employee.active)
    case VISIBILITY_FILTERS.INACTIVE:
      return allEmployees.filter(employee => !employee.active)
    case VISIBILITY_FILTERS.ALL:
    default:
      return allEmployees
  }
}
