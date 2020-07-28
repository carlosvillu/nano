import React from 'react'
import PropTypes from 'prop-types'

import Line from '../../components/Line'
import Section from '../../components/Section'
import LoadingSVG from '../SVG/Loading'

const Loading = ({children}) => {
  return (
    <>
      <Line />
      <Section>
        <div className="Loading">
          <LoadingSVG className="Loading-spinner" />
          <p>{children}</p>
        </div>
      </Section>
      <Line />
    </>
  )
}

Loading.propTypes = {children: PropTypes.node}

export default Loading
