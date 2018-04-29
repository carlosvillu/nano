import React from 'react'
import Route from 'react-router/lib/Route'
import Router from 'react-router/lib/Router'
import IndexRoute from 'react-router/lib/IndexRoute'
import loadPage from '@s-ui/react-initial-props/lib/loadPage'
import contextFactory from './contextFactory'

const loadHomePage = loadPage(contextFactory, () =>
  import(/* webpackChunkName: "Home" */ './pages/Home')
)

export default (
  <Router>
    <Route component={require('./components/App').default}>
      <Route path='/'>
        <IndexRoute getComponent={loadHomePage} />
      </Route>
    </Route>
  </Router>
)
