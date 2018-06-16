import React from 'react'
import PropTypes from 'prop-types'

import Line from '../../components/Line'
import Section from '../../components/Section'
import Title from '../../components/Title'
import Paragraph from '../../components/Paragraph'

export default class HowItWorks extends React.PureComponent {
  static contextTypes = {i18n: PropTypes.object}
  static displayName = 'HowItWorks'

  render() {
    const {i18n} = this.context

    return (
      <div className="HowItWorks">
        <Section>
          <Title>{i18n.t('WHAT_IT_IS_TITLE')}</Title>
          <Paragraph>{i18n.t('WHAT_IT_IS_DESCRIPTION_1')}</Paragraph>
          <Paragraph>{i18n.t('WHAT_IT_IS_DESCRIPTION_2')}</Paragraph>
          <Paragraph>{i18n.t('WHAT_IT_IS_DESCRIPTION_3')}</Paragraph>
        </Section>
        <Line />
        <Section>
          <Title>{i18n.t('HOW_IT_IS_WORKS_TITLE')}</Title>
          <Paragraph>{i18n.t('HOW_IT_IS_WORKS_DESCRIPTION_1')}</Paragraph>
          <Paragraph>{i18n.t('HOW_IT_IS_WORKS_DESCRIPTION_2')}</Paragraph>
        </Section>
      </div>
    )
  }
}
