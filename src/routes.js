import React from 'react'
import Route from 'react-router/lib/Route'
import Router from 'react-router/lib/Router'
import IndexRoute from 'react-router/lib/IndexRoute'
import loadPage from '@s-ui/react-initial-props/lib/loadPage'
import contextFactory from './contextFactory'

const loadHomePage = loadPage(contextFactory, () =>
  import(/* webpackChunkName: "Home" */ './pages/Home')
)

const loadHowItWorksPage = loadPage(contextFactory, () =>
  import(/* webpackChunkName: "HowItWorks" */ './pages/How')
)

const loadContactPage = loadPage(contextFactory, () =>
  import(/* webpackChunkName: "Contact" */ './pages/Contact')
)

const loadAboutPage = loadPage(contextFactory, () =>
  import(/* webpackChunkName: "About" */ './pages/About')
)

const loadAccountPage = loadPage(contextFactory, () =>
  import(/* webpackChunkName: "Account" */ './pages/Account')
)

export default (
  <Router>
    <Route component={require('./components/App').default}>
      <Route path="/">
        <IndexRoute getComponent={loadHomePage} />
        <Route path="how-it-works" getComponent={loadHowItWorksPage} />
        <Route path="contact" getComponent={loadContactPage} />
        <Route path="about" getComponent={loadAboutPage} />
        <Route path="account/:direction" getComponent={loadAccountPage} />
      </Route>
    </Route>
  </Router>
)
