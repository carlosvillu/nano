import React from 'react'
import PropTypes from 'prop-types'

import Link from 'react-router/lib/Link'

const FlashMessage = ({children, href}, {i18n}) => (
  <div className="FlashMessage">
    <span>{children}</span>
    <Link to={href} className="FlashMessage-readmore">
      {i18n.t('READ_MORE')}
    </Link>
  </div>
)

FlashMessage.contextTypes = {i18n: PropTypes.object}
FlashMessage.propTypes = {children: PropTypes.element, href: PropTypes.string}
export default FlashMessage
