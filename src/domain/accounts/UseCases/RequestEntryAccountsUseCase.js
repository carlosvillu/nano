import {UseCase} from '@s-ui/domain'

export default class RequestEntryAccountsUseCase extends UseCase {
  constructor({config} = {}) {
    super()
    this._config = config
  }

  async execute({destination} = {}) {
    const url = `${this._config.get(
      'API_HOST'
    )}/public/account/${destination}/link`
    const resp = await window.fetch(url)
    const wallet = await resp.json()
    return wallet
  }
}
