import RequestEntryAccountsUseCase from './RequestEntryAccountsUseCase'
import InfoAccountsUseCase from './InfoAccountsUseCase'

export default class AccountsUseCasesFactory {
  static requestEntryAccountsUseCase = ({config}) =>
    new RequestEntryAccountsUseCase({config})

  static infoAccountsUseCase = ({config}) => new InfoAccountsUseCase({config})
}
