/***** action types ******/

export const ADD_EMPLOYEE = 'ADD_EMPLOYEE'
export const EDIT_EMPLOYEE = 'EDIT_EMPLOYEE'
export const TOGGLE_ACTIVE = 'TOGGLE_ACTIVE'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

/***** other constants ******/
export const VISIBILITY_FILTERS = {
  ALL: 'all',
  ACTIVE: 'active',
  INACTIVE: 'inactive',
}

/***** action creators ******/
export const addEmployee = content => ({
  type: ADD_EMPLOYEE,
  payload: {content},
})
export const editEmployee = id => ({
  type: EDIT_EMPLOYEE,
  payload: {},
})
export function toggleActive(index) {
  return { type: TOGGLE_ACTIVE, index }
}

export const setVisibilityFilter = filter => ({ type: SET_VISIBILITY_FILTER, payload: { filter } });