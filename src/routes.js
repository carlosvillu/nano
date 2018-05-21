import React from 'react'
import Route from 'react-router/lib/Route'
import Router from 'react-router/lib/Router'
import IndexRoute from 'react-router/lib/IndexRoute'
import loadPage from '@s-ui/react-initial-props/lib/loadPage'
import contextFactory from './contextFactory'

const loadHomePage = loadPage(contextFactory, () =>
  import(/* webpackChunkName: "Home" */ './pages/Home')
)

const loadContactPage = loadPage(contextFactory, () =>
  import(/* webpackChunkName: "Contact" */ './pages/Contact')
)

const loadAboutPage = loadPage(contextFactory, () =>
  import(/* webpackChunkName: "About" */ './pages/About')
)

export default (
  <Router>
    <Route component={require('./components/App').default}>
      <Route path='/'>
        <IndexRoute getComponent={loadHomePage} />
        <Route path='contact' getComponent={loadContactPage} />
        <Route path='about' getComponent={loadAboutPage} />
      </Route>
    </Route>
  </Router>
)
