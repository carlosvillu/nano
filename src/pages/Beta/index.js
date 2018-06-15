import React from 'react'
import PropTypes from 'prop-types'

import Section from '../../components/Section'
import Title from '../../components/Title'
import Paragraph from '../../components/Paragraph'

export default class Beta extends React.PureComponent {
  static contextTypes = {i18n: PropTypes.object}
  static displayName = 'Beta'

  render() {
    const {i18n} = this.context

    return (
      <div className="Beta">
        <Section>
          <Title>{i18n.t('BETA_TITLE')}</Title>
          <Paragraph>{i18n.t('BETA_DESCRIPTION')}</Paragraph>
        </Section>
      </div>
    )
  }
}
