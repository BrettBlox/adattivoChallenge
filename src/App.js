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
      <>
        {this.state.user ? (
          <div className='App card-panel'>
            <Button
              large
              waves='light'
              className='red logout-button'
              onClick={this.handleLogOut}>
              &larr;Logout
            </Button>
            <AddEmployee />
            <FilterEmployees />
            <EmployeeList />
          </div>
        ) : (
          <div className='App'>
            <div className='Login'>
              <h1>Welcome</h1>
              <h3>Please login to continue</h3>
              <Button
                large
                waves='light'
                className='login-button'
                onClick={this.handleLogIn}>
                Login&rarr;
              </Button>
            </div>
          </div>
        )}
      </>
    )
  }
}
