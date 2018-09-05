import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'mobx-react'
import App from './views/App'
import AppState from './store/app-state'

const root = document.getElementById('root')

const initialState = window.__INITIAL__STATE__ || {} //eslint-disable-line

const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate
renderMethod(
  <Provider appState={new AppState(initialState.appState)}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  root,
)
