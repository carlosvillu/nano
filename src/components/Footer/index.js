import React from 'react'
import PropTypes from 'prop-types'

import Link from 'react-router/lib/Link'

const Footer = ({display = true}, {i18n}) => {
  return (
    display && (
      <footer className="Footer">
        <div className="Footer-links">
          <Link to="/" className="Footer-link">
            {i18n.t('HOME')}
          </Link>
          <span className="Footer-separator">|</span>
          <Link to="/how-it-works" className="Footer-link">
            {i18n.t('HOW_IT_IS_WORKS')}
          </Link>
          <span className="Footer-separator">|</span>
          <Link to="/about" className="Footer-link">
            {i18n.t('ABOUT_US')}
          </Link>
          <span className="Footer-separator">|</span>
          <Link to="/contact" className="Footer-link">
            {i18n.t('CONTACT_US')}
          </Link>
        </div>
      </footer>
    )
  )
}

Footer.contextTypes = {i18n: PropTypes.object}
Footer.propTypes = {display: PropTypes.bool}

export default Footer
