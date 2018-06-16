import React from 'react'
import ReactDOM from 'react-dom'

import Router from 'react-router/lib/Router'
import match from 'react-router/lib/match'
import browserHistory from 'react-router/lib/browserHistory'
import routes from './routes'

import {register} from '@s-ui/bundler/registerServiceWorker'
import withContext from '@s-ui/hoc/lib/withContext'
import createClientContextFactoryParams from '@s-ui/react-initial-props/lib/createClientContextFactoryParams'
import contextFactory from './contextFactory'

import events, {GA_EVENTS, CATEGORIES} from './libs/events'

import './styles/index.scss'

events.subscribe(GA_EVENTS, ({category, action, label, value}) => {
  window.ga('send', 'event', category, action, label, value)
})

window.onerror = (message, file, line, col, error) => {
  events.publish(GA_EVENTS, {
    category: CATEGORIES.JS.GLOBAL.ERROR,
    action: file,
    label: message
  })
}

window.addEventListener('unhandledrejection', event =>
  events(GA_EVENTS, {
    category: CATEGORIES.JS.PROMISE.UNHANDLE,
    action: event.promise,
    label: event.reason
  })
)

contextFactory(createClientContextFactoryParams()).then(context => {
  match(
    {routes, history: browserHistory},
    (err, redirectLocation, renderProps) => {
      if (err) {
        console.error(err)
      }

      const App = withContext(context)(Router)
      ReactDOM.render(<App {...renderProps} />, document.getElementById('app'))
    }
  )
})

register({
  first: () => window.alert('Content is cached for offline use.'),
  renovate: () => window.alert('New content is available; please refresh.')
})()
