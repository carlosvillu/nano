import React from 'react'
import PropTypes from 'prop-types'

const MILISECONDS_IN_DAY = 86400 * 1000
const TICK_INTERVAL = 1000

export default class CountDown extends React.PureComponent {
  static displayName = 'CountDown'
  static contextTypes = {i18n: PropTypes.object}
  static propTypes = { startAt: PropTypes.number }
  static defaultProps = {startAt: Date.now()}

  constructor (props) {
    super(props)
    this.state = {
      endAt: props.startAt + MILISECONDS_IN_DAY
    }
  }

  componentDidMount () {
    this.interval = window.setInterval(() => {
      const remaining = this.state.endAt - TICK_INTERVAL
      remaining < 0 ? clearInterval(this.interval) : this.setState({endAt: remaining})
    }, TICK_INTERVAL)
  }

  componentWillUnmount () {
    clearInterval(this.interval)
  }

  render () {
    const {i18n} = this.context
    const [h0, h1, m0, m1, s0, s1] = this.getTime(this.state.endAt - this.props.startAt)
    return (
      <div className='CountDown'>
        <div className='CountDown-digit'>{h0}</div>
        <div className='CountDown-digit'>{h1}</div>
        <div className='CountDown-split'>{i18n.t('HOURS')}</div>
        <div className='CountDown-digit'>{m0}</div>
        <div className='CountDown-digit'>{m1}</div>
        <div className='CountDown-split'>{i18n.t('MINUTES')}</div>
        <div className='CountDown-digit'>{s0}</div>
        <div className='CountDown-digit'>{s1}</div>
        <div className='CountDown-split'>{i18n.t('SECONDS')}</div>
      </div>
    )
  }

  getTime (timestamp) {
    const totalSeconds = Math.round(timestamp / 1000)

    let seconds = parseInt(totalSeconds % 60, 10)
    let minutes = parseInt(totalSeconds / 60, 10) % 60
    let hours = parseInt(totalSeconds / 3600, 10)

    seconds = seconds < 10 ? '0' + seconds : seconds
    minutes = minutes < 10 ? '0' + minutes : minutes
    hours = hours < 10 ? '0' + hours : hours
    return '' + hours + minutes + seconds // Dont do it at home!
  }
}
