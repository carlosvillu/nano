import { EntryPointFactory } from '@s-ui/domain'

import AccountsUseCasesFactory from './accounts/UseCases/factory'

import Config from './config'

const config = new Config()

const useCases = {
  'request_entry_accounts_use_case': AccountsUseCasesFactory.requestEntryAccountsUseCase(),
  'info_accounts_use_case': AccountsUseCasesFactory.infoAccountsUseCase()
}

export default EntryPointFactory({ config, useCases })
