import React from 'react'
import IdentityModal, {
  useIdentityContext,
} from 'react-netlify-identity-widget'
import 'react-netlify-identity-widget/styles.css'

import { Button } from 'react-materialize'
import AddEmployee from './AddEmployee'
import EmployeeList from './EmployeeList'
import FilterEmployees from './FilterEmployees'

const AuthStatusView = () => {
  const identity = useIdentityContext()
  const [dialog, setDialog] = React.useState(false)
  const avatar_url =
    identity &&
    identity.user &&
    identity.user.user_metadata &&
    identity.user.user_metadata.avatar_url
  return (
    <div className='Auth'>
      {identity && identity.isLoggedIn ? (
        <>
          <AddEmployee />
          <FilterEmployees />
          <EmployeeList />
        </>
      ) : (
        <>
          <h1>Log In</h1>
          <Button onClick={() => setDialog(true)}>LOG IN</Button>
        </>
      )}

      <React.Suspense fallback='loading...'>
        <IdentityModal
          showDialog={dialog}
          onCloseDialog={() => setDialog(false)}
          style={{ width: '100%' }}
        />
      </React.Suspense>
    </div>
  )
}

export default AuthStatusView
