import React from 'react'
import PropTypes from 'prop-types'

import cx from 'classnames'
import LoadingSVG from '../SVG/Loading'
import events, {GA_EVENTS, CATEGORIES} from '../../libs/events'

const VALID_NANO_REGEXP = /(xrb|nano)_([13456789abcdefghijkmnopqrstuwxyz]{60})/

export default class Request extends React.PureComponent {
  static displayName = 'Request'

  static contextTypes = {domain: PropTypes.object, i18n: PropTypes.object}
  static defaultProps = {onResponse: () => {}}
  static propTypes = {
    onResponse: PropTypes.func,
    destination: PropTypes.string
  }

  state = {
    isLoading: false,
    hasError: false,
    hasAccount: false
  }

  render() {
    const {i18n} = this.context
    const {destination} = this.props
    const {isLoading, hasError, hasAccount} = this.state

    const button = cx('Request-button', {
      'has-account': hasAccount,
      'has-destination': destination.match(VALID_NANO_REGEXP)
    })
    const loader = cx('Request-loading', {'is-loading': isLoading})
    const error = cx('Request-error', {'has-error': hasError})

    return (
      <div className="Request">
        <div className={button} onClick={this.requestClickHandler}>
          <LoadingSVG className={loader} />
          <span>{i18n.t('REQUEST')}</span>
        </div>
        <p className={error}>{i18n.t('REQUEST_ERROR')}</p>
      </div>
    )
  }

  requestClickHandler = async () => {
    const USE_CASE = 'request_entry_accounts_use_case'
    if (!this.props.destination.match(VALID_NANO_REGEXP)) {
      return
    }

    this.setState({isLoading: true, hasError: false, hasAccount: false})

    const resp = await this.context.domain
      .get(USE_CASE)
      .execute({destination: this.props.destination})
      .catch(error => {
        this.setState({isLoading: false, hasError: true, hasAccount: false})
        events.publish(GA_EVENTS, {
          category: CATEGORIES.JS.DOMAIN.ERROR,
          action: USE_CASE,
          label: error.message
        })
      })

    this.setState({
      isLoading: false,
      hasError: false,
      hasAccount: resp.account !== undefined
    })
    this.props.onResponse(resp)
    events.publish(GA_EVENTS, {
      category: CATEGORIES.JS.DOMAIN.SUCCESS,
      action: USE_CASE
    })
  }
}
