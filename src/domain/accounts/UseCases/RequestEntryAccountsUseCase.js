import {UseCase} from '@s-ui/domain'

export default class RequestEntryAccountsUseCase extends UseCase {
  execute({user, password} = {}) {
    return new Promise((resolve, reject) => {
      setTimeout(
        () =>
          resolve({
            account:
              'xrb_1aytxweddts89xgu7ojsajixkzppu67zwtpgai19iw9qo3g67xon5a855qkj',
            token: 'lsg89347lkjshf'
          }),
        3000
      )
    })
  }
}
