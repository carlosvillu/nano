import React from 'react'
import PropTypes from 'prop-types'

const Title = ({children}) => <h3 className="Title">{children}</h3>

Title.displayName = 'Title'
Title.propTypes = {children: PropTypes.string}

export default Title
