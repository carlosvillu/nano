import {UseCase} from '@s-ui/domain'

const randomIntegerInRange = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min
const STATUS = ['KO', 'OK', 'TEMP']

export default class InfoAccountsUseCase extends UseCase {
  execute({account, token} = {}) {
    return new Promise((resolve, reject) => {
      setTimeout(
        () =>
          resolve({
            destination_account:
              'xrb_1aytxweddts89xgu7ojsajixkzppu67zwtpgai19iw9qo3g67xon5a855qkj',
            createdAt: Date.now(),
            status: STATUS[randomIntegerInRange(0, 2)]
          }),
        3000
      )
    })
  }
}
