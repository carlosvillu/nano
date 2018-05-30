import React from 'react'
import PropTypes from 'prop-types'

import CountDown from '../../components/CountDown'
import Line from '../../components/Line'
import Loading from '../../components/Loading'
import QRAccount from '../../components/QRAccount'
import Section from '../../components/Section'
import Title from '../../components/Title'
import Paragraph from '../../components/Paragraph'
import TrackPageView from '../../components/TrackPageView'

export default class Account extends React.PureComponent {
  static contextTypes = {i18n: PropTypes.object}
  static propTypes = {
    createdAt: PropTypes.number,
    status: PropTypes.string,
    destination_account: PropTypes.string,
    routeParams: PropTypes.object
  }
  static displayName = 'Account'

  static renderLoading = () => <Loading>Cheking account</Loading>
  static getInitialProps = ({context, routeInfo}) => {
    const {domain} = context
    return domain.get('info_accounts_use_case').execute({
      account: routeInfo.params.direction,
      token: routeInfo.location.query.token
    })
  }

  render() {
    const {
      createdAt = false,
      status,
      destination_account: destinationAccount,
      routeParams
    } = this.props
    const IS_TEMP = status === 'TEMP'
    const IS_KO = status === 'KO'
    const IS_OK = status === 'OK'
    const {i18n} = this.context
    return (
      <div className="Account">
        <TrackPageView />
        <Section display={IS_OK}>
          <Title>{i18n.t('ACCOUNT_OK_TITLE')}</Title>
          <Paragraph>{i18n.t('ACCOUNT_OK_DESCRIPTION')}</Paragraph>
          <QRAccount account={routeParams.direction} />
        </Section>
        <Line display={IS_OK} />

        <Section display={IS_KO}>
          <Title>{i18n.t('ACCOUNT_KO_TITLE')}</Title>
          <Paragraph>{i18n.t('ACCOUNT_KO_DESCRIPTION')}</Paragraph>
        </Section>

        <Section display={IS_TEMP}>
          <Title>{i18n.t('COUNTDOWN_TITLE')}</Title>
          <Paragraph>{i18n.t('COUNTDOWN_DESCRIPTION')}</Paragraph>
          <QRAccount account={routeParams.direction} />
          <CountDown startAt={createdAt} />
        </Section>

        <Section display={IS_TEMP || IS_OK}>
          <Title>{i18n.t('DESTINATION_ACCOUNT_INFO_TITLE')}</Title>
          <Paragraph>
            {i18n.t('DESTINATION_ACCOUNT_INFO_DESCRIPTION')}
          </Paragraph>
          <QRAccount account={destinationAccount} qr={false} />
        </Section>
      </div>
    )
  }
}
