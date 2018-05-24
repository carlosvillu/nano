import React from 'react'
import PropTypes from 'prop-types'

import Line from '../../components/Line'
import Section from '../../components/Section'
import Title from '../../components/Title'

export default class HowItWorks extends React.PureComponent {
  static contextTypes = {i18n: PropTypes.object}
  static displayName = 'HowItWorks'

  render () {
    const {i18n} = this.context

    return (
      <div className='HowItWorks'>
        <Line />
        <Section>
          <Title>{i18n.t('WHAT_IT_IS_TITLE')}</Title>
          <p>{i18n.t('WHAT_IT_IS_DESCRIPTION')}</p>
        </Section>
        <Line />
        <Section>
          <Title>{i18n.t('HOW_IT_IS_WORKS_TITLE')}</Title>
          <p>{i18n.t('HOW_IT_IS_WORKS_DESCRIPTION')}</p>
        </Section>
        <Line />
      </div>
    )
  }
}
