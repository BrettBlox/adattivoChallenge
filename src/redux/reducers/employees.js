import { ADD_EMPLOYEE, EDIT_EMPLOYEE } from '../actionTypes'

const initialState = {
  employees: [
    {
      id: 0,
      firstName: 'Jerry',
      middleInitial: 'J',
      lastName: 'Garcia',
      dateOfBirth: 'August 1, 1942',
      dateOfEmployment: 'June 21, 1997',
      isActive: false,
    },
    {
      id: 1,
      firstName: 'Brett',
      middleInitial: 'T',
      lastName: 'Bloxom',
      dateOfBirth: 'April 29, 1991',
      dateOfEmployment: 'March 15, 2011',
      isActive: true,
    },
    {
      id: 2,
      firstName: 'Dan',
      middleInitial: 'F',
      lastName: 'Abramov',
      dateOfBirth: 'August 14, 1982',
      dateOfEmployment: 'April 22, 2013',
      isActive: false,
    },
    {
      id: 3,
      firstName: 'Thomas',
      middleInitial: 'J',
      lastName: 'Sanford',
      dateOfBirth: 'September 20, 1986',
      dateOfEmployment: 'June 1, 2014',
      isActive: false,
    },
    {
      id: 4,
      firstName: 'Alyssa',
      middleInitial: 'K',
      lastName: 'Countway',
      dateOfBirth: 'August 23, 1993',
      dateOfEmployment: 'May 1, 2017',
      isActive: true,
    },
    {
      id: 5,
      firstName: 'Amanda',
      middleInitial: 'S',
      lastName: 'Bloxom',
      dateOfBirth: 'July 27, 1987',
      dateOfEmployment: 'September 6, 2016',
      isActive: true,
    },
    {
      id: 6,
      firstName: 'Dustin',
      middleInitial: 'G',
      lastName: 'Dyer',
      dateOfBirth: 'October 2, 1985',
      dateOfEmployment: 'January 6, 2007',
      isActive: true,
    },
    {
      id: 7,
      firstName: 'Jimmy',
      middleInitial: 'M',
      lastName: 'Hendrix',
      dateOfBirth: 'November 27, 1942',
      dateOfEmployment: 'December 23, 1987',
      isActive: false,
    },
  ],
}

export default function employees(state = initialState, action) {
  switch (action.type) {
    case ADD_EMPLOYEE: {
      const { content } = action.payload
      return {
        ...state,
        employees: [...state.employees, content],
      }
    }
    case EDIT_EMPLOYEE: {
      const { content } = action.payload
      return {
        ...state,
        employees: state.employees.map(employee =>
          employee.id === content.id ? content : employee
        ),
      }
    }
    default:
      return state
  }
}
