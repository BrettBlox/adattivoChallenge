import React from 'react'
import { IdentityContextProvider } from 'react-netlify-identity-widget'
import AuthStatusView from './components/AuthStatusView'

// import './styles/App.css'

export default function App() {
  const url = 'https://adattivochallenge.netlify.com'
  return (
    <IdentityContextProvider url={url}>
      <AuthStatusView />
    </IdentityContextProvider>
  )
}
