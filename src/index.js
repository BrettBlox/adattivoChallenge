import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import netlifyIdentity from 'netlify-identity-widget'
import employeeApp from './redux/reducers/index'

import './styles/index.css'

import App from './App'

const store = createStore(
  employeeApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const rootElement = document.getElementById('root')
netlifyIdentity.init()
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)
