import React from 'react'
import PropTypes from 'prop-types'

import CountDown from '../../components/CountDown'
import Line from '../../components/Line'
import Loading from '../../components/Loading'
import QRAccount from '../../components/QRAccount'
import Section from '../../components/Section'
import Title from '../../components/Title'
import Paragraph from '../../components/Paragraph'

import events, {GA_EVENTS, CATEGORIES} from '../../libs/events'

export default class Account extends React.PureComponent {
  static contextTypes = {i18n: PropTypes.object}
  static propTypes = {
    createdAt: PropTypes.number,
    destination_account: PropTypes.string,
    hasError: PropTypes.bool,
    routeParams: PropTypes.object,
    status: PropTypes.string
  }
  static displayName = 'Account'

  static renderLoading = () => <Loading>Cheking account</Loading>
  static getInitialProps = ({context, routeInfo}) => {
    const USE_CASE = 'info_accounts_use_case'
    const {domain} = context
    return domain
      .get(USE_CASE)
      .execute({
        account: routeInfo.params.direction,
        token: routeInfo.location.query.token
      })
      .catch(error => {
        events.publish(GA_EVENTS, {
          category: CATEGORIES.JS.DOMAIN.ERROR,
          action: USE_CASE,
          label: error.message
        })
        return {hasError: true}
      })
  }

  render() {
    const {
      createdAt = false,
      status,
      destination_account: destinationAccount,
      routeParams,
      hasError
    } = this.props
    const IS_TEMP = status === 'TEMP'
    const IS_KO = status === 'KO'
    const IS_OK = status === 'OK'
    const {i18n} = this.context
    !hasError &&
      events.publish(GA_EVENTS, {
        category: CATEGORIES.APP.ACCOUNT.STATUS,
        action: status
      })
    if (hasError) {
      return (
        <Section>
          <Title>{i18n.t('ACCOUNT_ERROR_TITLE')}</Title>
          <Paragraph>{i18n.t('ACCOUNT_ERROR_DESCRIPTION')}</Paragraph>
        </Section>
      )
    }
    return (
      <div className="Account">
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
        <Line display={IS_TEMP || IS_OK} />
        <Section display={IS_TEMP || IS_OK}>
          <Title>{i18n.t('PAGE_ACCOUNT_URL_TITLE')}</Title>
          <Paragraph>{i18n.t('PAGE_ACCOUNT_URL_DESCRIPTION')}</Paragraph>
          <div className="Account-url">
            http://localhost:3000/account/xrb_1aytxweddts89xgu7ojsajixkzppu67zwtpgai19iw9qo3g67xon5a855qkj?token=lsg89347lkjshf
          </div>
        </Section>
      </div>
    )
  }
}
