import React from 'react'
import PropTypes from 'prop-types'

import Link from 'react-router/lib/Link'
import Line from '../Line'
import Section from '../Section'

const App = ({ children }, {i18n}) => (
  <div className='App'>
    <header>
      <Link to='/'>
        <img className='App-logo' src='https://svg-loaders.surge.sh/brainblocks2.svg' width='500' />
      </Link>
    </header>
    {children}
    <Line />
    <Section>
      <div className='Next-links'>
        <Link to='/' className='App-link'>{i18n.t('HOME')}</Link>
        <span className='App-separator'>|</span>
        <Link to='how-it-works' className='App-link'>{i18n.t('HOW_IT_IS_WORKS')}</Link>
        <span className='App-separator'>|</span>
        <Link to='about' className='App-link'>{i18n.t('ABOUT_US')}</Link>
        <span className='App-separator'>|</span>
        <Link to='contact' className='App-link'>{i18n.t('CONTACT_US')}</Link>
      </div>
    </Section>
    <Line />
  </div>
)
App.propTypes = { children: PropTypes.element }
App.contextTypes = {i18n: PropTypes.object}

export default App
