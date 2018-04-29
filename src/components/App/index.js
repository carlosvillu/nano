import React from 'react'
import PropTypes from 'prop-types'

const App = ({ children }) => (
  <div className='App'>
    {children}
  </div>
)
App.propTypes = { children: PropTypes.element }

export default App
