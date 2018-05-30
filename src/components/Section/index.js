import React from 'react'
import PropTypes from 'prop-types'

const Section = ({children, display = true}) =>
  display && <section className="Section">{children}</section>

Section.propTypes = {children: PropTypes.node}

export default Section
