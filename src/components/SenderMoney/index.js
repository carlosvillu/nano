import React from 'react'
import PropTypes from 'prop-types'

const SenderMoney = (_, {i18n}) => (
  <div className='SenderMoney'>
    <div className='SenderMoney-Query'>

      <div className='SenderMoney-Wrapper'>
        <div className='SenderMoney-Dollar' />
        <input
          className='SenderMoney-Input'
          autoCapitalize='off'
          autoComplete='off'
          autoCorrect='off'
          autoFocus=''
          placeholder={i18n.t('AMOUNT')}
          spellCheck='false'
        />
      </div>
      <div className='SenderMoney-Wrapper'>
        <div className='SenderMoney-Direction' />
        <input
          className='SenderMoney-Input'
          autoCapitalize='off'
          autoComplete='off'
          autoCorrect='off'
          autoFocus=''
          placeholder={i18n.t('DIRECTION')}
          spellCheck='false'
        />
      </div>
    </div>
  </div>
)

SenderMoney.contextTypes = {i18n: PropTypes.object}
export default SenderMoney
