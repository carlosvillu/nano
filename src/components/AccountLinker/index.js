import React, { Component } from 'react'
import PropTypes from 'prop-types'

class AccountLinker extends Component {
  constructor (props) {
    super()

    this.state = {
      input_root: '',
      input_destination: '',
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  handleClick = (e) => {
    e.preventDefault()
    /* const { input_root, input_destination } = this.state
    const url = 'https://pepe.com/api/criptomoneda'

    fetch(url,
      {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify({input_root, input_destination})
      })
      .then(function(){ console.log('todo ok') })
      .catch(function(error){ console.log(error) }) */
    this.props.onResponse({
      amount: 0.00003,
      account: 'xrb_1brainb3zz81wmhxndsbrjb94hx3fhr1fyydmg6iresyk76f3k7y7jiazoji',
      currency: 'rai'
    })
  }

  render () {
    const { input_root, input_destination } = this.state
    return (
      <div className='AccountLinker'>
        <h1 className='steps'>1.Step one</h1>
        <form className='form'>
          <input
            className='AccountLinker-Root'
            name='input_root'
            autoCapitalize='off'
            autoComplete='off'
            autoCorrect='off'
            autoFocus=''
            placeholder='AC ROOT'
            spellCheck='false'
            value={input_root}
            onChange={this.handleChange}
          />
          <input
            className='AccountLinker-Destination'
            name='input_destination'
            autoCapitalize='off'
            autoComplete='off'
            autoCorrect='off'
            autoFocus=''
            placeholder='AC DESTINATION'
            spellCheck='false'
            value={input_destination}
            onChange={this.handleChange}
          />
          <button onClick={this.handleClick} >VINCULAR CUENTA</button>
        </form>
      </div>
    )
  }
}

AccountLinker.contextTypes = {i18n: PropTypes.object}
export default AccountLinker
