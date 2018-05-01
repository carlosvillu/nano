import React, { Component } from 'react'
import PropTypes from 'prop-types'

import AccountLinker from '../../components/AccountLinker'
import Transfercount from '../../components/Transfercount'
import Explanation from '../../components/Explanation'

class Home extends Component {
  constructor (props) {
    super()
  }
  state = {}
  onResponse = (resp) => { this.setState(resp) }
  render () {
    return (
      <div className='Home'>
        <header className='Home-title'>
          <img className='logo' src={'https://cdn3.f-cdn.com/contestentries/1021201/23871606/5915c3a7b7850_thumb900.jpg'} />
          <h1 className='Home-title'>ENVIA DINERO CON PRIVACIDAD</h1>
        </header>
        <section className='Home-section'>
          <hr />
          <AccountLinker onResponse={this.onResponse} />
          <hr />
          <Transfercount {...this.state} />
          <hr />
          <Explanation />
        </section>
      </div>
    )
  }
}

Home.contextTypes = { i18n: PropTypes.object }

export default Home
