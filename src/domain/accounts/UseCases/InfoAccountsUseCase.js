import {UseCase} from '@s-ui/domain'

export default class InfoAccountsUseCase extends UseCase {
  constructor({config} = {}) {
    super()
    this._config = config
  }

  async execute({account, token} = {}) {
    const url = `${this._config.get(
      'API_HOST'
    )}/public/account/${account}/check/${token}`
    const resp = await window.fetch(url)
    const wallet = await resp.json()
    return wallet
  }
}
