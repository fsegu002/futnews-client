// import * as serviceWorker from './serviceWorker';

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './screens/App'


import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './store/store'

import './styles/stylesheets.scss'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <Router>
          <Route path="/" component={App} />
        </Router>
      </Provider>
    </PersistGate>,
    document.getElementById('root'),
  )
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
