import React from 'react'
import PropTypes from 'prop-types'

import Line from '../../components/Line'
import Section from '../../components/Section'

const Loading = ({children}) => {
  return (
    <React.Fragment>
      <Line />
      <Section>
        <div className='Loading'>
          <img className='Loading-spinner' src='https://svg-loaders.surge.sh/bars.svg' />
          <p>{children}</p>
        </div>
      </Section>
      <Line />
    </React.Fragment>
  )
}

Loading.propTypes = {children: PropTypes.node}

export default Loading
