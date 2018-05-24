import React from 'react'
import PropTypes from 'prop-types'

import Line from '../../components/Line'
import Title from '../../components/Title'
import Request from '../../components/Request'
import Section from '../../components/Section'
import Input from '../../components/Form/Input'

class Home extends React.PureComponent {
  static contextTypes = {i18n: PropTypes.object}
  static propTypes = {router: PropTypes.object}
  static displayName = 'Home'

  state = {response: {}, account: ''}

  render () {
    const {i18n} = this.context
    const {router} = this.props

    return (
      <div className='Home'>
        <Line />
        <Section>
          <Title>{i18n.t('DESTINATION_ACCOUNT_TITLE')}</Title>
          <p className='Home-description'>{i18n.t('DESTINATION_ACCOUNT_DESCRIPTION')}</p>
          <Input
            placeholder={i18n.t('DESTINATION_ACCOUNT_PLACEHOLDER')}
            onChange={evt => this.setState({account: evt.target.value})}
            value={this.state.account}
          />
        </Section>
        <Line />
        <Section>
          <Title>{i18n.t('REQUEST_ACCOUNT_TITLE')}</Title>
          <p className='Home-description'>{i18n.t('REQUEST_ACCOUNT_DESCRIPTION')}</p>
          <Request
            onResponse={({account, token}) => router.push(`/account/${account}?token=${token}`)}
            destination={this.state.account}
          />
        </Section>
        <Line />
      </div>
    )
  }
}

export default Home
