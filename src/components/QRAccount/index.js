import React from 'react'
import PropTypes from 'prop-types'

const QRAccount = ({account, qr = true}) => (
  <div className='QRAccount'>
    {qr && <img src={`https://chart.googleapis.com/chart?chs=160x160&cht=qr&chl=${account}&choe=UTF-8`} width='160' height='160' />}
    <p className='QRAccount-account'>{account}</p>
  </div>
)
QRAccount.propTypes = {account: PropTypes.string, qr: PropTypes.bool}
export default QRAccount
