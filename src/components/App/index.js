import React from 'react'
import PropTypes from 'prop-types'

import Topbar from '../Topbar'
import Footer from '../Footer'
import FlashMessage from '../FlashMessage'

const App = ({children}, {i18n}) => (
  <div className="App">
    <Topbar />
    <FlashMessage href="/beta">{i18n.t('FLASHMESSAGE_BETA')}</FlashMessage>
    <header className="App-header">
      <div className="App-container">
        <span className="App-claim">
          Privacy <span className="App-nano">Nano</span>
        </span>
        <p className="App-subclaim">{i18n.t('CLAIM')}</p>
      </div>
    </header>
    <div className="App-children">{children}</div>
    <Footer />
  </div>
)
App.propTypes = {children: PropTypes.element}
App.contextTypes = {i18n: PropTypes.object}

export default App
