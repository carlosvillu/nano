import RequestEntryAccountsUseCase from './RequestEntryAccountsUseCase'
import InfoAccountsUseCase from './InfoAccountsUseCase'

export default class AccountsUseCasesFactory {
  static requestEntryAccountsUseCase = () =>
    new RequestEntryAccountsUseCase()

  static infoAccountsUseCase = () =>
    new InfoAccountsUseCase()
}
