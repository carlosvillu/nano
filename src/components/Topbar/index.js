import React from 'react'
import PropTypes from 'prop-types'

import Link from 'react-router/lib/Link'

const Topbar = () => {
  return (
    <div className='Topbar'>
      <Link className='Topbar-link' to='/'>
        <img className='Topbar-logo' src='https://svg-loaders.surge.sh/LogoOriginalVector.svg' />
      </Link>
    </div>
  )
}

export default Topbar