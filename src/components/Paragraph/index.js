import React from 'react'
import PropTypes from 'prop-types'

const Paragraph = ({children, display = true}) => (
  display && <section className='Paragraph'>{children}</section>
)

Paragraph.propTypes = {children: PropTypes.node}

export default Paragraph
