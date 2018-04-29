import React from 'react'
import PropTypes from 'prop-types'

import SenderMoney from '../../components/SenderMoney'

const Home = (_, { i18n }) => (
  <div className='Home'>
    <header className='Home-title'>
      <h1 className='Home-title'>{i18n.t('SEND_MONEY_PRIVACY_CLAIM')}</h1>
    </header>
    <section className='Home-section'>
      <SenderMoney />
    </section>
  </div>
)

Home.contextTypes = { i18n: PropTypes.object }

export default Home
