import React, { Component } from 'react'
import netlifyIdentity from 'netlify-identity-widget'

import { loginUser, logoutUser } from './identityActions'

import { Button } from 'react-materialize'

import AddEmployee from './components/AddEmployee'
import EmployeeList from './components/EmployeeList'
import FilterEmployees from './components/FilterEmployees'

export default class App extends Component {
  state = { user: null }

  componentDidMount() {
    const user = localStorage.getItem('currentUser')
    if (user) {
      this.setState({ user: JSON.parse(user) })
    } else {
      loginUser()
    }
    netlifyIdentity.on('login', user => this.setState({ user }, loginUser()))
    netlifyIdentity.on('logout', user =>
      this.setState({ user: null }, logoutUser())
    )
  }

  handleLogIn = () => {
    netlifyIdentity.open()
  }

  handleLogOut = () => {
    netlifyIdentity.logout()
  }

  render() {
    return (
      <div className='App card-panel'>
        {this.state.user ? (

        <AddEmployee />
        <FilterEmployees />
        <EmployeeList />
        ) : (
          <>
            <Button
              large
              waves-light
              className='login-button'
              onClick={this.handleLogIn}>
              Login
            </Button>
          </>
      </div>
    )
  }
}
