import RequestEntryAccountsUseCase from './RequestEntryAccountsUseCase'

export default class AccountsUseCasesFactory {
  static requestEntryAccountsUseCase = () =>
    new RequestEntryAccountsUseCase()
}
