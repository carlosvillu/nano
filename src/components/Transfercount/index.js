import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Transfercount extends Component {
  constructor (props) {
    super()
  }
  componentWillReceiveProps (nextProps) {
    const {account, amount, currency} = nextProps

    account && amount && currency && window.brainblocks.Button.render({
      // Pass in payment options
      payment: {
        destination: account,
        currency: currency,
        amount: amount
      },
      onPayment: function (data) {
        console.log('Payment successful!', data.token)
      }

    }, '#nano-button')
  }
  render () {
    const { amount } = this.props || 0.0000

    return (
      <div>
        <h1 className='steps'>2.Step two</h1>
        <h5 className='send-adress'>{`Click the button and try sending ${amount} NANO to the address`}</h5>
        <div id='nano-button' />
      </div>
    )
  }
}

Transfercount.propTypes = {
  account: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string
}

export default Transfercount
