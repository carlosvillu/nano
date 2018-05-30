import React from 'react'
import PropTypes from 'prop-types'

import Section from '../../components/Section'
import Title from '../../components/Title'
import Input from '../../components/Form/Input'
import TrackPageView from '../../components/TrackPageView'

class Contact extends React.PureComponent {
  static displayName = Contact
  static contextTypes = {i18n: PropTypes.object}

  render() {
    const {i18n} = this.context
    return (
      <div className="Contact">
        <TrackPageView />
        <Section>
          <Title>{i18n.t('CONTACT_TITLE')}</Title>
          <form
            className="Contact-form"
            method="POST"
            action="https://formspree.io/carlosvillu@gmail.com"
          >
            <Input
              type="email"
              name="email"
              placeholder={i18n.t('CONTACT_EMAIL_PLACEHOLDER')}
            />
            <textarea
              className="Contact-textare"
              name="message"
              placeholder={i18n.t('CONTACT_MESSAGE_PLACEHOLDER')}
            />
            <button className="Contact-button" type="submit">
              {i18n.t('SEND')}
            </button>
          </form>
        </Section>
      </div>
    )
  }
}

export default Contact
