import Domain from './domain'
import i18nFactory from './literals'

const domain = new Domain()

export default async () => ({ domain, i18n: i18nFactory({ lang: 'en-GB' }) })
