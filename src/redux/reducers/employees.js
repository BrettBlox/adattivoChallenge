import { EDIT_EMPLOYEE, ADD_EMPLOYEE } from '../actionTypes'

const initialState = {
  employees: [
    {
      id: 0,
      firstName: 'Jerry',
      middleInitial: 'J',
      lastName: 'Garcia',
      dateOfBirth: new Date('August 1, 1942'),
      dateOfEmployment: new Date('June 21, 1997'),
      isActive: false,
    },
    {
      id: 1,
      firstName: 'Brett',
      middleInitial: 'T',
      lastName: 'Bloxom',
      dateOfBirth: new Date('April 29, 1991'),
      dateOfEmployment: new Date('March 15, 2011'),
      isActive: true,
    },
    {
      id: 2,
      firstName: 'Dan',
      middleInitial: 'F',
      lastName: 'Abramov',
      dateOfBirth: new Date('August 14, 1982'),
      dateOfEmployment: new Date('April 22, 2013'),
      isActive: false,
    },
    {
      id: 3,
      firstName: 'Thomas',
      middleInitial: 'James',
      lastName: 'Sanford',
      dateOfBirth: new Date('September 20, 1986'),
      dateOfEmployment: new Date('June 1, 2014'),
      isActive: false,
    },
    {
      id: 4,
      firstName: 'Jerry',
      middleInitial: 'J',
      lastName: 'Garcia',
      dateOfBirth: new Date('August 1, 1942'),
      dateOfEmployment: new Date('June 21, 1997'),
      isActive: true,
    },
    {
      id: 5,
      firstName: 'Alyssa',
      middleInitial: 'J',
      lastName: 'Countway',
      dateOfBirth: new Date('August 23, 1993'),
      dateOfEmployment: new Date('May 1, 2017'),
      isActive: true,
    },
    {
      id: 6,
      firstName: 'Amanda',
      middleInitial: 'S',
      lastName: 'Bloxom',
      dateOfBirth: new Date('July 27, 1987'),
      dateOfEmployment: new Date('September 6, 2016'),
      isActive: true,
    },
  ],
  byIds: {},
}

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_EMPLOYEE: {}
    case EDIT_EMPLOYEE: {}
    default:
      return state
  }
}
