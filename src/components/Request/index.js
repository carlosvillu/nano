import React from 'react'
import PropTypes from 'prop-types'

import cx from 'classnames'

export default class Request extends React.PureComponent {
  static displayName = 'Request'

  static contextTypes = { domain: PropTypes.object, i18n: PropTypes.object }
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

  render () {
    const {i18n} = this.context
    const {destination} = this.props
    const {isLoading, hasError, hasAccount} = this.state

    const button = cx('Request-button', {'has-account': hasAccount, 'has-destination': destination})
    const loader = cx('Request-loading', {'is-loading': isLoading})
    const error = cx('Request-error', {'has-error': hasError})

    return (
      <div className='Request'>
        <div className={button} onClick={this.requestClickHandler}>
          <img className={loader} src='https://svg-loaders.surge.sh/bars.svg' />
          <span>{i18n.t('REQUEST')}</span>
        </div>
        <p className={error}>{i18n.t('REQUEST_ERROR')}</p>
      </div>
    )
  }

  requestClickHandler = async () => {
    if (!this.props.destination) { return }

    this.setState({isLoading: true, hasError: false, hasAccount: false})

    const resp = await this.context.domain
      .get('request_entry_accounts_use_case')
      .execute()
      .catch(() => this.setState({isLoading: false, hasError: true, hasAccount: false}))

    this.setState({isLoading: false, hasError: false, hasAccount: resp.account !== undefined})
    this.props.onResponse(resp)
  }
}
