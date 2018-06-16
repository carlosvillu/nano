import React from 'react'
import PropTypes from 'prop-types'

import Line from '../../components/Line'
import Section from '../../components/Section'
import Title from '../../components/Title'
import Paragraph from '../../components/Paragraph'
import Image from '../../components/Image'

export default class About extends React.PureComponent {
  static displayName = 'About'
  static contextTypes = {i18n: PropTypes.object}

  render() {
    const {i18n} = this.context
    return (
      <div className="About">
        <Section>
          <Title>Toni Navarro</Title>
          <div className="About-card">
            <a href="https://www.linkedin.com/in/toni-navarro-a0b6ab6/">
              <Image
                className="About-img"
                src="https://svg-loaders.surge.sh/toni.jpg"
                width="150"
                height="150"
              />
            </a>
            <Paragraph>{i18n.t('ABOUT_US_TONI_BIO')}</Paragraph>
          </div>
        </Section>
        <Line />
        <Section>
          <Title>Carlos Villuendas</Title>
          <div className="About-card">
            <a href="https://www.linkedin.com/in/carlosvillu/">
              <Image
                className="About-img"
                src="https://svg-loaders.surge.sh/carlitos.jpg"
                width="150"
                height="150"
              />
            </a>
            <Paragraph>{i18n.t('ABOUT_US_CARLOS_BIO')}</Paragraph>
          </div>
        </Section>
      </div>
    )
  }
}
