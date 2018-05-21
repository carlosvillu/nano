import React from 'react'
import PropTypes from 'prop-types'

import Line from '../../components/Line'
import Section from '../../components/Section'
import Title from '../../components/Title'

export default class About extends React.PureComponent {
  static displayName = 'About'
  static contextTypes = {i18n: PropTypes.object}

  render () {
    const {i18n} = this.context
    return (
      <div className='About'>
        <Line />
        <Section>
          <Title>Toni Navarro</Title>
          <div className='About-card'>
            <a href='https://www.linkedin.com/in/toni-navarro-a0b6ab6/'>
              <img className='About-img' src='https://svg-loaders.surge.sh/toni.jpg' width='150' height='150' />
            </a>
            <p className='About-bio'>{i18n.t('ABOUT_US_TONI_BIO')}</p>
          </div>
        </Section>
        <Line />
        <Section>
          <Title>Carlos Villuendas</Title>
          <div className='About-card'>
            <a href='https://www.linkedin.com/in/carlosvillu/'>
              <img className='About-img' src='https://svg-loaders.surge.sh/carlitos.jpg' width='150' height='150' />
            </a>
            <p className='About-bio'>{i18n.t('ABOUT_US_CARLOS_BIO')}</p>
          </div>
        </Section>
        <Line />
      </div>
    )
  }
}
