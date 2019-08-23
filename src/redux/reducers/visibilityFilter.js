import { SET_VISIBILITY_FILTER } from '../actionTypes'
import { VISIBILITY_FILTERS } from '../actions'

const initialState = VISIBILITY_FILTERS.ALL

const visibilityFilter = (state = initialState, action) => {
  switch (action.type) {
      case SET_VISIBILITY_FILTER: {
      return action.payload.filter
    }
    default: {
      return state
    }
  }
}

export default visibilityFilter